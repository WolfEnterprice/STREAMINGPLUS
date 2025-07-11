import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  price: string;
  logo: string;
  color: string;
  type: 'individual' | 'combo';
  services?: string[];
  comboId?: number;
  note?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  name, 
  price, 
  logo, 
  color, 
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
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-2xl shadow-lg`}>
        {logo}
      </div>
      
      <h3 className="text-white font-bold text-center mb-2 text-lg">
        {name}
      </h3>
      
      {note && (
        <p className="text-yellow-400 text-xs text-center mb-2 font-semibold">
          {note}
        </p>
      )}
      
      {services && (
        <p className="text-gray-300 text-sm text-center mb-3">
          {services.join(' + ')}
        </p>
      )}
      
      <div className="text-center mb-4">
        <span className="text-3xl font-bold text-white">
          ${price}
        </span>
        <span className="text-gray-300 text-sm block">
          {type === 'combo' ? 'Combo' : 'Mensual'}
        </span>
      </div>
      
      <button
        onClick={handlePurchase}
        className={`w-full bg-gradient-to-r ${color} hover:shadow-lg text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Comprar</span>
      </button>
    </div>
  );
};

export default ServiceCard;