import React from 'react';
import ServiceCard from './ServiceCard';

const PromotionsSection = () => {
  const promotions = [
    { name: 'Netflix', price: '14.000', logo: '/icons/netflix_732228 (1).png', logoText: 'N', color: 'from-red-500 to-red-700', bgColor: 'bg-red-600' },
    { name: 'Disney+ Estándar', price: '11.000', logo: '/icons/castle_1760281.png', logoText: 'D+', color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-600', note: '' },
    { name: 'Prime Video', price: '10.000', logo: '/icons/icons8-amazon-prime-48.png', logoText: 'PV', color: 'from-cyan-400 to-blue-600', bgColor: 'bg-blue-500' },
    { name: 'HBO Max', price: '10.000', logo: '/icons/icons8-hbo-64.png', logoText: 'HBO', color: 'from-purple-500 to-purple-700', bgColor: 'bg-purple-600' },
    { name: 'Disney+ Premium', price: '14.000', logo: '/icons/castle_1760281.png', logoText: 'D+', color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-600', note: '' },
    { name: 'Paramount+', price: '9.000', logo: '/icons/icons8-primordial-plus-100.png', logoText: 'P+', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500' },
    { name: 'Crunchyroll', price: '10.000', logo: '/icons/icons8-crunchyroll-48.png', logoText: 'CR', color: 'from-orange-400 to-orange-600', bgColor: 'bg-orange-500' },
    { name: 'Plex', price: '10.000', logo: '/icons/icons8-plex-24.png', logoText: 'PX', color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-500' },
    { name: 'IPTV Smarters', price: '18.000', logo: '/icons/icons8-iptv-de-escritorio-24.png', logoText: 'TV', color: 'from-gray-500 to-gray-700', bgColor: 'bg-gray-600' },
    { name: 'Spotify (2 meses)', price: '22.000', logo: '/icons/icons8-spotify-50.png', logoText: 'SP', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500' },
    { name: 'YouTube (2 meses)', price: '22.000', logo: '/icons/icons8-youtube-48.png', logoText: 'YT', color: 'from-red-400 to-red-600', bgColor: 'bg-red-500' },
    { name: 'ViX', price: '12.000', logo: '', logoText: 'ViX', color: 'from-orange-500 to-red-600', bgColor: 'bg-orange-600' },
  ];

  return (
    <section id="promociones" className="py-16 md:py-20 px-4" style={{ backgroundColor: '#0B0F14' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#F5F7FA' }}>
            Servicios Individuales
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto" style={{ color: '#9AA4B2' }}>
            Accede a tus plataformas favoritas con los mejores precios del mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {promotions.map((promotion, index) => (
            <ServiceCard
              key={index}
              name={promotion.name}
              price={promotion.price}
              logo={promotion.logo}
              logoText={promotion.logoText}
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