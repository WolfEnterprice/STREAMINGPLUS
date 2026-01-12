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
    <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 
                    hover:bg-slate-800/70 hover:border-primary-500/50 transition-all duration-300 
                    transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10">
      {type === 'individual' && logo && logo.startsWith('/') ? (
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <img src={logo} alt={name} className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center 
                        shadow-lg`}>
          {type === 'individual' ? (
            <span className="text-lg font-bold text-white">{logoText || logo}</span>
          ) : (
            <span className="text-2xl">🎯</span>
          )}
        </div>
      )}
      
      <h3 className="text-white font-bold text-center mb-2 text-lg">
        {name}
      </h3>
      
      {note && (
        <div className="mb-3">
          <p className="text-amber-300 text-xs text-center font-medium bg-amber-500/10 border border-amber-500/30 rounded-lg px-2 py-1">
            {note}
          </p>
        </div>
      )}
      
      {services && (
        <p className="text-slate-400 text-sm text-center mb-4 font-medium min-h-[2.5rem]">
          {services.join(' + ')}
        </p>
      )}
      
      <div className="text-center mb-5">
        <div className="text-3xl font-bold text-emerald-400 mb-1">
          ${price}
        </div>
        <span className="text-slate-400 text-xs font-medium">
          {type === 'combo' ? 'Precio del combo' : 'Mensual'}
        </span>
      </div>
      
      <button
        onClick={handlePurchase}
        className={`w-full bg-gradient-to-r ${color} hover:opacity-90 text-white font-semibold py-3 px-4 
                   rounded-xl transition-all duration-200 transform hover:scale-[1.02] 
                   flex items-center justify-center space-x-2 shadow-lg`}
      >
        <ShoppingCart className="w-4 h-4" />
        <span>Comprar ahora</span>
      </button>
    </div>
  );
};

export default ServiceCard;