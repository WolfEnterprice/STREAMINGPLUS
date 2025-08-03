import React from 'react';
import { AlertTriangle, Shield, X } from 'lucide-react';

const WarningBanner = () => {
  return (
    <section className="py-8 px-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-y border-red-500/30">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-red-500/30 to-orange-500/30 border-2 border-red-400/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold text-red-300">
              ⚠️ ADVERTENCIA IMPORTANTE ⚠️
            </h3>
            <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
          </div>
          
          <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-6 mb-4">
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-red-300 flex-shrink-0 mt-1" />
              <div className="text-white">
                <h4 className="font-bold text-lg mb-2 text-red-200">
                  🚫 NO COMPARTIR CREDENCIALES
                </h4>
                <p className="text-red-100 leading-relaxed mb-3">
                  <strong>Por favor NO compartir su usuario y contraseña con personas ajenas a quien compró la cuenta.</strong>
                </p>
                <p className="text-red-200 font-semibold">
                  ⚡ El compartir las credenciales resultará en la <span className="text-red-300 font-bold">CANCELACIÓN AUTOMÁTICA</span> de la cuenta sin reembolso.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-red-800/30 border border-red-400/20 rounded-lg p-4">
              <X className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-red-200 font-semibold text-sm">
                No compartir con amigos
              </p>
            </div>
            <div className="bg-red-800/30 border border-red-400/20 rounded-lg p-4">
              <X className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-red-200 font-semibold text-sm">
                No compartir con familiares
              </p>
            </div>
            <div className="bg-red-800/30 border border-red-400/20 rounded-lg p-4">
              <X className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-red-200 font-semibold text-sm">
                No publicar en redes sociales
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-yellow-300 font-bold text-lg bg-yellow-500/20 border border-yellow-400/30 rounded-full px-6 py-2 inline-block">
              🛡️ Protege tu inversión - Mantén tus credenciales seguras
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningBanner;