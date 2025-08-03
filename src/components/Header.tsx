import React from 'react';
import { Play, Zap, Users, Eye } from 'lucide-react';
import { useGlobalVisitorCounter } from '../hooks/useGlobalVisitorCounter';

const Header = () => {
  const { visitorCount, loading } = useGlobalVisitorCounter();

  return (
    <header className="bg-gradient-to-r from-purple-900/95 via-pink-900/95 to-blue-900/95 backdrop-blur-sm border-b border-cyan-400/50 sticky top-0 z-50 shadow-lg shadow-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Play className="w-8 h-8 text-cyan-400 fill-current drop-shadow-lg" />
              <Zap className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
              STREAMING PLUS
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Contador de visitantes */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-4 py-2">
              <Eye className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 font-semibold text-sm">
                {loading ? '...' : visitorCount.toLocaleString()} visitantes
              </span>
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
      </div>
    </header>
  );
};

export default Header;