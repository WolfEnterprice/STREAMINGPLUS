/**
 * Event Bus Service
 * Servicio centralizado para comunicación entre componentes mediante eventos
 */

type EventCallback = (...args: any[]) => void;

interface EventListener {
  id: string;
  callback: EventCallback;
}

class EventBusService {
  private events: Map<string, EventListener[]> = new Map();
  private listenerIdCounter = 0;

  /**
   * Suscribirse a un evento
   * @param eventName Nombre del evento
   * @param callback Función a ejecutar cuando se dispare el evento
   * @returns ID del listener para poder cancelar la suscripción
   */
  on(eventName: string, callback: EventCallback): string {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listenerId = `listener_${++this.listenerIdCounter}`;
    const listeners = this.events.get(eventName)!;
    
    listeners.push({
      id: listenerId,
      callback,
    });

    return listenerId;
  }

  /**
   * Desuscribirse de un evento
   * @param eventName Nombre del evento
   * @param listenerId ID del listener a eliminar
   */
  off(eventName: string, listenerId: string): void {
    const listeners = this.events.get(eventName);
    if (!listeners) return;

    const index = listeners.findIndex(listener => listener.id === listenerId);
    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length === 0) {
      this.events.delete(eventName);
    }
  }

  /**
   * Disparar un evento
   * @param eventName Nombre del evento
   * @param args Argumentos a pasar a los callbacks
   */
  emit(eventName: string, ...args: any[]): void {
    const listeners = this.events.get(eventName);
    if (!listeners) return;

    listeners.forEach(listener => {
      try {
        listener.callback(...args);
      } catch (error) {
        console.error(`Error en listener del evento ${eventName}:`, error);
      }
    });
  }

  /**
   * Suscribirse a un evento una sola vez
   * @param eventName Nombre del evento
   * @param callback Función a ejecutar
   * @returns ID del listener
   */
  once(eventName: string, callback: EventCallback): string {
    const listenerId = this.on(eventName, (...args) => {
      callback(...args);
      this.off(eventName, listenerId);
    });

    return listenerId;
  }

  /**
   * Eliminar todos los listeners de un evento
   * @param eventName Nombre del evento
   */
  removeAllListeners(eventName: string): void {
    this.events.delete(eventName);
  }

  /**
   * Obtener el número de listeners para un evento
   * @param eventName Nombre del evento
   * @returns Número de listeners
   */
  listenerCount(eventName: string): number {
    return this.events.get(eventName)?.length || 0;
  }

  /**
   * Obtener todos los nombres de eventos activos
   * @returns Array con los nombres de eventos
   */
  eventNames(): string[] {
    return Array.from(this.events.keys());
  }

  /**
   * Limpiar todos los eventos
   */
  clear(): void {
    this.events.clear();
  }
}

// Exportar instancia singleton
export const eventBus = new EventBusService();

// Tipos de eventos comunes (opcional, para mejor tipado)
export enum AppEvents {
  VISITOR_COUNT_UPDATED = 'visitor:count:updated',
  CART_UPDATED = 'cart:updated',
  USER_AUTHENTICATED = 'user:authenticated',
  NOTIFICATION = 'notification',
  MODAL_OPENED = 'modal:opened',
  MODAL_CLOSED = 'modal:closed',
}
