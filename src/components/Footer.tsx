import React from 'react';
import { Play, MessageCircle, Clock, Shield, DollarSign } from 'lucide-react';

const Footer = () => {
  const whatsappContact = () => {
    const message = "Hola, me interesa conocer más sobre sus servicios de streaming.";
    const phoneNumber = "573206714618";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const incomeOpportunity = () => {
    const message = "Hola, me interesa conocer más sobre las oportunidades de ingresos extra que ofrecen.";
    const phoneNumber = "573206714618";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                STREAMING <span className="text-primary-400">PLUS</span>
              </h3>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed max-w-md">
              Tu mejor opción para disfrutar de todas las plataformas de streaming 
              al mejor precio. Servicio garantizado y atención personalizada.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-white font-bold mb-4">Información</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-slate-400">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Activación: Máximo 2 horas</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-400">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Servicio garantizado</span>
              </div>
              <div className="flex items-start space-x-2 text-slate-400">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Atención: Domingo a Domingo<br />
                  9:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Netflix</li>
              <li>• Disney+</li>
              <li>• HBO Max</li>
              <li>• Prime Video</li>
              <li>• Paramount+</li>
              <li>• Y muchos más...</li>
            </ul>
          </div>
        </div>

        {/* Botón de ingresos extra */}
        <div className="text-center mb-8">
          <button
            onClick={incomeOpportunity}
            className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 
                     text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
          >
            <DollarSign className="w-6 h-6" />
            <div className="text-left">
              <div className="text-lg font-bold">¿Quieres ingresos extra?</div>
              <div className="text-sm opacity-90">Únete a nosotros - Haz clic para mayor información</div>
            </div>
          </button>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Streaming Plus. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Servicio de reventa de cuentas premium. No somos propietarios de las marcas mencionadas.
          </p>
          <p className="text-slate-600 text-xs mt-3">
            Página desarrollada por <span className="text-slate-400 font-semibold">WolfEnterprise</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;