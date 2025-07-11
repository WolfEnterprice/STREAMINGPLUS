import React from 'react';
import ServiceCard from './ServiceCard';

const PromotionsSection = () => {
  const promotions = [
    { name: 'Netflix', price: '13.000', logo: '🎬', color: 'from-red-600 to-red-700' },
    { name: 'Disney+ Estándar', price: '10.000', logo: '🏰', color: 'from-blue-600 to-blue-700', note: '' },
    { name: 'Prime Video', price: '9.000', logo: '📺', color: 'from-blue-500 to-cyan-500' },
    { name: 'HBO Max', price: '8.000', logo: '🎭', color: 'from-purple-600 to-purple-700' },
    { name: 'Disney+ Premium', price: '13.000', logo: '🏰', color: 'from-blue-600 to-blue-700', note: '' },
    { name: 'Paramount+', price: '8.000', logo: '⭐', color: 'from-blue-400 to-blue-500' },
    { name: 'Crunchyroll', price: '10.000', logo: '🍜', color: 'from-orange-500 to-orange-600' },
    { name: 'Plex', price: '10.000', logo: '📱', color: 'from-yellow-500 to-yellow-600' },
    { name: 'IPTV Smarters', price: '18.000', logo: '📡', color: 'from-gray-600 to-gray-700' },
    { name: 'Spotify (2 meses)', price: '20.000', logo: '🎵', color: 'from-green-500 to-green-600' },
    { name: 'YouTube (2 meses)', price: '20.000', logo: '▶️', color: 'from-red-500 to-red-600' },
    { name: 'ViX', price: '11.000', logo: '🎪', color: 'from-orange-600 to-red-600' },
  ];

  return (
    <section id="promociones" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Plantaformas
            </span>
          </h2>
          <p className="text-gray-300 text-lg">Servicios individuales a precios increíbles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {promotions.map((promotion, index) => (
            <ServiceCard
              key={index}
              name={promotion.name}
              price={promotion.price}
              logo={promotion.logo}
              color={promotion.color}
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