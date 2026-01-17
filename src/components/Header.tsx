import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: '#1A1F2B', borderBottom: '1px solid rgba(154, 164, 178, 0.2)' }}>
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
            <h1 className="text-xl md:text-2xl font-bold" style={{ color: '#F5F7FA' }}>
              STREAMING <span style={{ color: '#00E676' }}>PLUS</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <nav className="hidden md:flex space-x-6">
              <a 
                href="#promociones" 
                className="transition-colors font-medium text-sm hover:opacity-80"
                style={{ color: '#9AA4B2' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2F80ED'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9AA4B2'}
              >
                Servicios
              </a>
              <a 
                href="#combos" 
                className="transition-colors font-medium text-sm hover:opacity-80"
                style={{ color: '#9AA4B2' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2F80ED'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9AA4B2'}
              >
                Combos
              </a>
              <a 
                href="#pagos" 
                className="transition-colors font-medium text-sm hover:opacity-80"
                style={{ color: '#9AA4B2' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2F80ED'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9AA4B2'}
              >
                Pagos
              </a>
              <a 
                href="#faq" 
                className="transition-colors font-medium text-sm hover:opacity-80"
                style={{ color: '#9AA4B2' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2F80ED'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9AA4B2'}
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