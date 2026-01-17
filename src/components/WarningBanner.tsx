import React from 'react';
import { AlertTriangle, Shield, X } from 'lucide-react';

const WarningBanner = () => {
  return (
    <section className="py-8 md:py-10 px-4" style={{ backgroundColor: '#0B0F14', borderTop: '1px solid rgba(154, 164, 178, 0.2)', borderBottom: '1px solid rgba(154, 164, 178, 0.2)' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: '#1A1F2B', border: '2px solid rgba(0, 230, 118, 0.3)' }}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#00E676' }} />
            <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#00E676' }}>
              Advertencia Importante
            </h3>
          </div>
          
          <div className="rounded-xl p-5 md:p-6 mb-5" style={{ backgroundColor: 'rgba(0, 230, 118, 0.05)', border: '1px solid rgba(0, 230, 118, 0.2)' }}>
            <div className="flex items-start space-x-4">
              <Shield className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" style={{ color: '#2F80ED' }} />
              <div>
                <h4 className="font-bold text-lg mb-3" style={{ color: '#F5F7FA' }}>
                  No compartir credenciales
                </h4>
                <p className="leading-relaxed mb-3" style={{ color: '#9AA4B2' }}>
                  Por favor <strong style={{ color: '#F5F7FA' }}>NO compartir</strong> su usuario y contraseña con personas ajenas a quien compró la cuenta.
                </p>
                <p className="font-semibold" style={{ color: '#00E676' }}>
                  El compartir las credenciales resultará en la <span className="font-bold">cancelación automática</span> de la cuenta sin reembolso.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#0B0F14', border: '1px solid rgba(154, 164, 178, 0.2)' }}>
              <X className="w-5 h-5 mx-auto mb-2" style={{ color: '#00E676' }} />
              <p className="font-medium text-sm" style={{ color: '#9AA4B2' }}>
                No compartir con amigos
              </p>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#0B0F14', border: '1px solid rgba(154, 164, 178, 0.2)' }}>
              <X className="w-5 h-5 mx-auto mb-2" style={{ color: '#00E676' }} />
              <p className="font-medium text-sm" style={{ color: '#9AA4B2' }}>
                No compartir con familiares
              </p>
            </div>
            <div className="rounded-lg p-4 text-center" style={{ backgroundColor: '#0B0F14', border: '1px solid rgba(154, 164, 178, 0.2)' }}>
              <X className="w-5 h-5 mx-auto mb-2" style={{ color: '#00E676' }} />
              <p className="font-medium text-sm" style={{ color: '#9AA4B2' }}>
                No publicar en redes sociales
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 230, 118, 0.1)', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
              <Shield className="w-4 h-4" style={{ color: '#2F80ED' }} />
              <span className="font-semibold text-sm" style={{ color: '#00E676' }}>
                Protege tu inversión - Mantén tus credenciales seguras
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningBanner;