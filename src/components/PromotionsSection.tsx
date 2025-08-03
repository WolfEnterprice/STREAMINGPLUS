import React from 'react';
import ServiceCard from './ServiceCard';

const PromotionsSection = () => {
  const promotions = [
    { name: 'Netflix', price: '13.000', logo: 'N', color: 'from-red-500 to-red-700', bgColor: 'bg-red-600' },
    { name: 'Disney+ Estándar', price: '10.000', logo: 'D+', color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-600', note: '' },
    { name: 'Prime Video', price: '9.000', logo: 'PV', color: 'from-cyan-400 to-blue-600', bgColor: 'bg-blue-500' },
    { name: 'HBO Max', price: '8.000', logo: 'HBO', color: 'from-purple-500 to-purple-700', bgColor: 'bg-purple-600' },
    { name: 'Disney+ Premium', price: '13.000', logo: 'D+', color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-600', note: '' },
    { name: 'Paramount+', price: '8.000', logo: 'P+', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500' },
    { name: 'Crunchyroll', price: '10.000', logo: 'CR', color: 'from-orange-400 to-orange-600', bgColor: 'bg-orange-500' },
    { name: 'Plex', price: '10.000', logo: 'PX', color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-500' },
    { name: 'IPTV Smarters', price: '18.000', logo: 'TV', color: 'from-gray-500 to-gray-700', bgColor: 'bg-gray-600' },
    { name: 'Spotify (2 meses)', price: '20.000', logo: 'SP', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500' },
    { name: 'YouTube (2 meses)', price: '20.000', logo: 'YT', color: 'from-red-400 to-red-600', bgColor: 'bg-red-500' },
    { name: 'ViX', price: '11.000', logo: 'ViX', color: 'from-orange-500 to-red-600', bgColor: 'bg-orange-600' },
  ];

  return (
    <section id="promociones" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Plataformas
            </span>
          </h2>
          <p className="text-gray-200 text-xl font-semibold">Servicios individuales a precios increíbles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {promotions.map((promotion, index) => (
            <ServiceCard
              key={index}
              name={promotion.name}
              price={promotion.price}
              logo={promotion.logo}
              color={promotion.color}
              bgColor={promotion.bgColor}
              type="individual"
              note={promotion.note}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;