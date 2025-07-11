import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroBanner = () => {
  const scrollToPromotions = () => {
    document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="text-yellow-400 font-semibold">SERVICIO GARANTIZADO</span>
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          ¡Disfruta tus series y películas
          <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            favoritas por menos!
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Accede a las mejores plataformas de streaming con nuestros combos exclusivos. 
          Netflix, Disney+, HBO Max, Prime Video y más.
        </p>
        
        <button
          onClick={scrollToPromotions}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 
                   text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 
                   transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
        >
          <span>Ver Nuestros Combos</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;