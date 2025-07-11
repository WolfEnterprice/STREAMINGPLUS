import React from 'react';
import { Play, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Play className="w-8 h-8 text-purple-400 fill-current" />
              <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              STREAMING PLUS
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#promociones" className="text-white hover:text-purple-400 transition-colors">
              Promociones
            </a>
            <a href="#combos" className="text-white hover:text-purple-400 transition-colors">
              Combos
            </a>
            <a href="#pagos" className="text-white hover:text-purple-400 transition-colors">
              Pagos
            </a>
            <a href="#faq" className="text-white hover:text-purple-400 transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;