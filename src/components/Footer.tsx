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
    <footer className="py-12 px-4" style={{ backgroundColor: '#0B0F14', borderTop: '1px solid rgba(154, 164, 178, 0.2)' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/icons/video-player_3168171.png" 
                alt="Streaming Plus" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-bold" style={{ color: '#F5F7FA' }}>
                STREAMING <span style={{ color: '#00E676' }}>PLUS</span>
              </h3>
            </div>
            <p className="mb-4 leading-relaxed max-w-md" style={{ color: '#9AA4B2' }}>
              Tu mejor opción para disfrutar de todas las plataformas de streaming 
              al mejor precio. Servicio garantizado y atención personalizada.
            </p>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#F5F7FA' }}>Información</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2F80ED' }} />
                <span className="text-sm" style={{ color: '#9AA4B2' }}>Activación: Máximo 2 horas</span>
              </div>
              <div className="flex items-start space-x-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2F80ED' }} />
                <span className="text-sm" style={{ color: '#9AA4B2' }}>Servicio garantizado</span>
              </div>
              <div className="flex items-start space-x-2">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2F80ED' }} />
                <span className="text-sm" style={{ color: '#9AA4B2' }}>
                  Atención: Domingo a Domingo<br />
                  9:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#F5F7FA' }}>Servicios</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#9AA4B2' }}>
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
            className="font-semibold py-4 px-8 rounded-xl transition-all duration-300 
                     transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
            style={{ 
              backgroundColor: '#00E676',
              color: '#0B0F14',
              boxShadow: '0 10px 40px rgba(0, 230, 118, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00C853';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00E676';
            }}
          >
            <DollarSign className="w-6 h-6" />
            <div className="text-left">
              <div className="text-lg font-bold">¿Quieres ingresos extra?</div>
              <div className="text-sm opacity-90">Únete a nosotros - Haz clic para mayor información</div>
            </div>
          </button>
        </div>

        <div className="pt-8 text-center" style={{ borderTop: '1px solid rgba(154, 164, 178, 0.2)' }}>
          <p className="text-sm" style={{ color: '#9AA4B2' }}>
            © 2024 Streaming Plus. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2" style={{ color: '#9AA4B2' }}>
            Servicio de reventa de cuentas premium. No somos propietarios de las marcas mencionadas.
          </p>
          <p className="text-xs mt-3" style={{ color: '#9AA4B2' }}>
            Página desarrollada por <span className="font-semibold" style={{ color: '#9AA4B2' }}>WolfEnterprise</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;