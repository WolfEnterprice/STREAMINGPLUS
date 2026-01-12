/**
 * Build Service
 * Servicio para gestionar builds, versiones y deployment
 */

import { configService } from './config.service';

export interface BuildInfo {
  version: string;
  buildTime: string;
  environment: string;
  commitHash?: string;
}

class BuildService {
  private buildInfo: BuildInfo;

  constructor() {
    this.buildInfo = this.generateBuildInfo();
  }

  private generateBuildInfo(): BuildInfo {
    const appConfig = configService.getAppConfig();
    
    return {
      version: appConfig.version,
      buildTime: new Date().toISOString(),
      environment: appConfig.env,
      commitHash: import.meta.env.VITE_COMMIT_HASH || undefined,
    };
  }

  /**
   * Obtener información del build
   */
  getBuildInfo(): BuildInfo {
    return { ...this.buildInfo };
  }

  /**
   * Obtener versión de la aplicación
   */
  getVersion(): string {
    return this.buildInfo.version;
  }

  /**
   * Obtener tiempo de build
   */
  getBuildTime(): string {
    return this.buildInfo.buildTime;
  }

  /**
   * Verificar si es un build de producción
   */
  isProductionBuild(): boolean {
    return configService.isProduction();
  }

  /**
   * Obtener información del build formateada para mostrar
   */
  getFormattedBuildInfo(): string {
    const { version, environment, buildTime } = this.buildInfo;
    const date = new Date(buildTime).toLocaleString('es-ES');
    return `v${version} (${environment}) - Build: ${date}`;
  }

  /**
   * Obtener información del build como objeto para logging
   */
  getBuildInfoForLogging(): Record<string, any> {
    return {
      ...this.buildInfo,
      buildTimeFormatted: new Date(this.buildInfo.buildTime).toLocaleString('es-ES'),
      isProduction: this.isProductionBuild(),
    };
  }

  /**
   * Validar que el build está correctamente configurado
   */
  validateBuild(): { valid: boolean; warnings: string[] } {
    const warnings: string[] = [];

    if (!this.buildInfo.version) {
      warnings.push('La versión no está definida');
    }

    if (this.isProductionBuild() && !this.buildInfo.commitHash) {
      warnings.push('El commit hash no está disponible en producción');
    }

    return {
      valid: warnings.length === 0,
      warnings,
    };
  }
}

export const buildService = new BuildService();
