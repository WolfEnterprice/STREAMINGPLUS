import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const HeroBanner = () => {
  const scrollToPromotions = () => {
    document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden" style={{ backgroundColor: '#0B0F14' }}>
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="inline-flex items-center space-x-2 mb-6 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 230, 118, 0.1)', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
          <Shield className="w-4 h-4" style={{ color: '#00E676' }} />
          <span className="font-semibold text-sm" style={{ color: '#00E676' }}>SERVICIO GARANTIZADO</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#F5F7FA' }}>
          Disfruta tus series y
          <span className="block">
            películas <span style={{ color: '#00E676' }}>favoritas</span> por menos
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#9AA4B2' }}>
          Accede a las mejores plataformas de streaming con nuestros combos exclusivos. 
          Netflix, Disney+, HBO Max, Prime Video y más al mejor precio.
        </p>
        
        <button
          onClick={scrollToPromotions}
          className="group font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 
                   transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
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
          <span>Ver Nuestros Combos</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;