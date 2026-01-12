import React from 'react';
import { AlertTriangle, Shield, X } from 'lucide-react';

const WarningBanner = () => {
  return (
    <section className="py-8 md:py-10 px-4 bg-amber-950/30 border-y border-amber-500/20">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-slate-800/60 backdrop-blur-sm border-2 border-amber-500/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
            <h3 className="text-xl md:text-2xl font-bold text-amber-300">
              Advertencia Importante
            </h3>
          </div>
          
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-5 md:p-6 mb-5">
            <div className="flex items-start space-x-4">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div className="text-white">
                <h4 className="font-bold text-lg mb-3 text-amber-200">
                  No compartir credenciales
                </h4>
                <p className="text-slate-200 leading-relaxed mb-3">
                  Por favor <strong>NO compartir</strong> su usuario y contraseña con personas ajenas a quien compró la cuenta.
                </p>
                <p className="text-amber-200 font-semibold">
                  El compartir las credenciales resultará en la <span className="text-amber-300 font-bold">cancelación automática</span> de la cuenta sin reembolso.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-900/50 border border-amber-500/20 rounded-lg p-4 text-center">
              <X className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <p className="text-slate-200 font-medium text-sm">
                No compartir con amigos
              </p>
            </div>
            <div className="bg-slate-900/50 border border-amber-500/20 rounded-lg p-4 text-center">
              <X className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <p className="text-slate-200 font-medium text-sm">
                No compartir con familiares
              </p>
            </div>
            <div className="bg-slate-900/50 border border-amber-500/20 rounded-lg p-4 text-center">
              <X className="w-5 h-5 text-amber-400 mx-auto mb-2" />
              <p className="text-slate-200 font-medium text-sm">
                No publicar en redes sociales
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 font-semibold text-sm">
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