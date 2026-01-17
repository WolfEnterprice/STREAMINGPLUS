import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  price: string;
  logo: string;
  logoText?: string;
  color: string;
  bgColor?: string;
  type: 'individual' | 'combo';
  services?: string[];
  comboId?: number;
  note?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  name, 
  price, 
  logo, 
  logoText,
  color, 
  bgColor,
  type, 
  services, 
  comboId,
  note
}) => {
  const handlePurchase = () => {
    let message = '';
    
    if (type === 'individual') {
      message = `Hola, estoy interesado en el servicio de ${name} por $${price}. ¿Está disponible?`;
    } else {
      message = `Hola, estoy interesado en el combo #${comboId} (${name}) por $${price}. ¿Está disponible?`;
    }
    
    const phoneNumber = '573206714618';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="group rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      style={{ 
        backgroundColor: '#1A1F2B',
        border: '1px solid rgba(154, 164, 178, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 230, 118, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(154, 164, 178, 0.2)';
      }}
    >
      {type === 'individual' && logo && logo.startsWith('/') ? (
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <img src={logo} alt={name} className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
          {type === 'individual' ? (
            <span className="text-lg font-bold" style={{ color: '#F5F7FA' }}>{logoText || logo}</span>
          ) : (
            <span className="text-2xl">🎯</span>
          )}
        </div>
      )}
      
      <h3 className="font-bold text-center mb-2 text-lg" style={{ color: '#F5F7FA' }}>
        {name}
      </h3>
      
      {note && (
        <div className="mb-3">
          <p className="text-xs text-center font-medium rounded-lg px-2 py-1" style={{ 
            color: '#00E676',
            backgroundColor: 'rgba(0, 230, 118, 0.1)',
            border: '1px solid rgba(0, 230, 118, 0.3)'
          }}>
            {note}
          </p>
        </div>
      )}
      
      {services && (
        <p className="text-sm text-center mb-4 font-medium min-h-[2.5rem]" style={{ color: '#9AA4B2' }}>
          {services.join(' + ')}
        </p>
      )}
      
      <div className="text-center mb-5">
        <div className="text-3xl font-bold mb-1" style={{ color: '#00E676' }}>
          ${price}
        </div>
        <span className="text-xs font-medium" style={{ color: '#9AA4B2' }}>
          {type === 'combo' ? 'Precio del combo' : 'Mensual'}
        </span>
      </div>
      
      <button
        onClick={handlePurchase}
        className="w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 
                 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg"
        style={{ 
          backgroundColor: '#00E676',
          color: '#0B0F14',
          boxShadow: '0 4px 20px rgba(0, 230, 118, 0.25)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#00C853';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#00E676';
        }}
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Comprar ahora</span>
      </button>
    </div>
  );
};

export default ServiceCard;