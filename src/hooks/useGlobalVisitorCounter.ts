import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const useGlobalVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeCounter = async () => {
      try {
        // Verificar si ya visitó esta sesión (solo para incrementar una vez por sesión)
        const hasVisited = sessionStorage.getItem('hasVisited') === 'true';

        // Obtener contador actual
        const { data, error } = await supabase
          .from('visitor_stats')
          .select('total_visitors')
          .eq('id', 1)
          .single();

        if (error && error.code === 'PGRST116') {
          // No existe el registro, crear uno inicial
          const { data: newData, error: insertError } = await supabase
            .from('visitor_stats')
            .insert({ id: 1, total_visitors: 1 })
            .select()
            .single();

          if (!insertError && newData) {
            setVisitorCount(newData.total_visitors);
            sessionStorage.setItem('hasVisited', 'true');
          }
        } else if (!error && data) {
          // Mostrar el contador actual primero
          setVisitorCount(data.total_visitors);
          
          // Si no ha visitado en esta sesión, incrementar contador
          if (!hasVisited) {
            const { data: updatedData, error: updateError } = await supabase
              .from('visitor_stats')
              .update({ total_visitors: data.total_visitors + 1 })
              .eq('id', 1)
              .select()
              .single();

            if (!updateError && updatedData) {
              setVisitorCount(updatedData.total_visitors);
            }
            sessionStorage.setItem('hasVisited', 'true');
          }
        }
      } catch (error) {
        console.error('Error managing visitor counter:', error);
        // Fallback al contador local si hay error
        const localCount = localStorage.getItem('visitorCount');
        setVisitorCount(localCount ? parseInt(localCount) : 1247); // Número base más realista
      } finally {
        setLoading(false);
      }
    };

    initializeCounter();

    // Suscribirse a cambios en tiempo real para que TODOS los usuarios vean las actualizaciones
    const subscription = supabase
      .channel('visitor_stats_changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'visitor_stats',
          filter: 'id=eq.1'
        },
        (payload) => {
          if (payload.new && typeof payload.new.total_visitors === 'number') {
            setVisitorCount(payload.new.total_visitors);
          }
        }
      )
      .subscribe();

    // También actualizar cada 30 segundos como respaldo
    const interval = setInterval(async () => {
      try {
        const { data, error } = await supabase
          .from('visitor_stats')
          .select('total_visitors')
          .eq('id', 1)
          .single();

        if (!error && data) {
          setVisitorCount(data.total_visitors);
        }
      } catch (error) {
        console.error('Error updating visitor count:', error);
      }
    }, 30000);

    return () => {
      subscription.unsubscribe();
      clearInterval(interval);
    };
  }, []);

  return { visitorCount, loading };
};