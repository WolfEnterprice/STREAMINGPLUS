import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroBanner = () => {
  const scrollToPromotions = () => {
    document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-600/30 to-pink-500/30" />
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Star className="w-5 h-5 text-yellow-300 fill-current animate-pulse" />
          <span className="text-yellow-300 font-bold text-lg bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-400/30">SERVICIO GARANTIZADO</span>
          <Star className="w-5 h-5 text-yellow-300 fill-current animate-pulse" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          ¡Disfruta tus series y películas
          <span className="block bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            favoritas por menos!
          </span>
        </h2>
        
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-medium">
          Accede a las mejores plataformas de streaming con nuestros combos exclusivos. 
          Netflix, Disney+, HBO Max, Prime Video y más.
        </p>
        
        <button
          onClick={scrollToPromotions}
          className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 
                   text-white font-bold py-5 px-10 rounded-full text-xl transition-all duration-300 
                   transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 inline-flex items-center space-x-3 ring-2 ring-white/20 hover:ring-white/40"
        >
          <span>Ver Nuestros Combos</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;