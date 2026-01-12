import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/icons/video-player_3168171.png" 
                alt="Streaming Plus" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              STREAMING <span className="text-primary-400">PLUS</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a 
                href="#promociones" 
                className="text-slate-300 hover:text-primary-400 transition-colors font-medium text-sm"
              >
                Servicios
              </a>
              <a 
                href="#combos" 
                className="text-slate-300 hover:text-primary-400 transition-colors font-medium text-sm"
              >
                Combos
              </a>
              <a 
                href="#pagos" 
                className="text-slate-300 hover:text-primary-400 transition-colors font-medium text-sm"
              >
                Pagos
              </a>
              <a 
                href="#faq" 
                className="text-slate-300 hover:text-primary-400 transition-colors font-medium text-sm"
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;