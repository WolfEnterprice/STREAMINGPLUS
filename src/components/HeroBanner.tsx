import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const HeroBanner = () => {
  const scrollToPromotions = () => {
    document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 via-transparent to-transparent" />
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="inline-flex items-center space-x-2 mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-300 font-semibold text-sm">SERVICIO GARANTIZADO</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Disfruta tus series y
          <span className="block">
            películas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">favoritas</span> por menos
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Accede a las mejores plataformas de streaming con nuestros combos exclusivos. 
          Netflix, Disney+, HBO Max, Prime Video y más al mejor precio.
        </p>
        
        <button
          onClick={scrollToPromotions}
          className="group bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 
                   text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 
                   transform hover:scale-105 shadow-xl hover:shadow-primary-500/50 inline-flex items-center space-x-2"
        >
          <span>Ver Nuestros Combos</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;