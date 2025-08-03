import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  price: string;
  logo: string;
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
    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:from-white/25 hover:to-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-lg font-bold text-white shadow-lg ring-2 ring-white/20`}>
        {type === 'individual' ? logo : '🎯'}
      </div>
      
      <h3 className="text-white font-bold text-center mb-2 text-lg drop-shadow-md">
        {name}
      </h3>
      
      {note && (
        <p className="text-yellow-300 text-xs text-center mb-2 font-semibold bg-yellow-500/20 rounded-full px-2 py-1">
          {note}
        </p>
      )}
      
      {services && (
        <p className="text-gray-200 text-sm text-center mb-3 font-medium">
          {services.join(' + ')}
        </p>
      )}
      
      <div className="text-center mb-4">
        <span className="text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg">
          ${price}
        </span>
        <span className="text-gray-200 text-sm block font-semibold">
          {type === 'combo' ? 'Combo' : 'Mensual'}
        </span>
      </div>
      
      <button
        onClick={handlePurchase}
        className={`w-full bg-gradient-to-r ${color} hover:shadow-xl hover:shadow-purple-500/30 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ring-1 ring-white/20 hover:ring-white/40`}
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Comprar</span>
      </button>
    </div>
  );
};

export default ServiceCard;