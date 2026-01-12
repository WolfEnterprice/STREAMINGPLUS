/**
 * Configuration Service
 * Centraliza la configuración de la aplicación
 */

export interface AppConfig {
  supabase: {
    url: string;
    anonKey: string;
  };
  app: {
    name: string;
    version: string;
    env: string;
  };
}

class ConfigService {
  private config: AppConfig;

  constructor() {
    this.config = this.loadConfig();
  }

  private loadConfig(): AppConfig {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
    
    return {
      supabase: {
        url: supabaseUrl,
        anonKey: supabaseAnonKey,
      },
      app: {
        name: 'Streaming Plus',
        version: '1.0.0',
        env: import.meta.env.MODE || 'development',
      },
    };
  }

  getConfig(): AppConfig {
    return this.config;
  }

  getSupabaseConfig() {
    return this.config.supabase;
  }

  getAppConfig() {
    return this.config.app;
  }

  isProduction(): boolean {
    return this.config.app.env === 'production';
  }

  isDevelopment(): boolean {
    return this.config.app.env === 'development';
  }

  validateConfig(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.config.supabase.url) {
      errors.push('VITE_SUPABASE_URL no está configurada');
    }

    if (!this.config.supabase.anonKey) {
      errors.push('VITE_SUPABASE_ANON_KEY no está configurada');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}

export const configService = new ConfigService();
