import React from 'react';
import { Play, Zap, MessageCircle, Clock, Shield, DollarSign } from 'lucide-react';

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
    <footer className="bg-black/50 border-t border-purple-500/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Play className="w-8 h-8 text-purple-400 fill-current" />
                <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                STREAMING PLUS
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Tu mejor opción para disfrutar de todas las plataformas de streaming 
              al mejor precio. Servicio garantizado y atención personalizada.
            </p>
            
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-white font-bold mb-4">Información</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Activación: Máximo 2 horas</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Servicio garantizado</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">
                  Horarios de atención:
                  De Domingo a Domingo
                  de 9:00AM a 10:00PM 
                </span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
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
        <div className="text-center mt-8 mb-8">
          <button
            onClick={incomeOpportunity}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                     text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
          >
            <DollarSign className="w-6 h-6" />
            <div className="text-left">
              <div className="text-lg font-bold">¿Quieres ingresos extra?</div>
              <div className="text-sm opacity-90">Únete a nosotros - Haz clic para mayor información</div>
            </div>
          </button>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Streaming Plus. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Servicio de reventa de cuentas premium. No somos propietarios de las marcas mencionadas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;