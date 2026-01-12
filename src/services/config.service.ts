/**
 * Configuration Service
 * Centraliza la configuración de la aplicación
 */

export interface AppConfig {
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
    return {
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

  getAppConfig() {
    return this.config.app;
  }

  isProduction(): boolean {
    return this.config.app.env === 'production';
  }

  isDevelopment(): boolean {
    return this.config.app.env === 'development';
  }
}

export const configService = new ConfigService();