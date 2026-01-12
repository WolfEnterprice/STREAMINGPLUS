import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { configService } from '../services/config.service'

export interface VisitorStats {
  id: number
  total_visitors: number
  updated_at: string
}

/**
 * Inicializa el cliente de Supabase con validación de configuración
 */
function initializeSupabase(): SupabaseClient {
  const config = configService.getSupabaseConfig();
  const validation = configService.validateConfig();

  if (!validation.valid) {
    console.warn('⚠️ Configuración de Supabase incompleta:', validation.errors);
    console.warn('La aplicación funcionará en modo offline/degradado');
  }

  // Crear cliente con valores por defecto si no están configurados
  const url = config.url || 'https://placeholder.supabase.co';
  const key = config.anonKey || 'placeholder-key';

  const client = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return client;
}

export const supabase = initializeSupabase();