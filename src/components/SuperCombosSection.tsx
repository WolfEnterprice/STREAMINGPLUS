import React from 'react';
import ServiceCard from './ServiceCard';

const SuperCombosSection = () => {
  const superCombos = [
    {
      id: 1,
      name: 'Netflix + Disney+',
      price: '24.000',
      services: ['Netflix', 'Disney+'],
      logo: '',
      color: 'from-red-600 to-blue-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 2,
      name: 'Netflix + Prime Video',
      price: '24.000',
      services: ['Netflix', 'Prime Video'],
      logo: '',
      color: 'from-red-600 to-cyan-600'
    },
    {
      id: 3,
      name: 'Netflix + HBO Max',
      price: '24.000',
      services: ['Netflix', 'HBO Max'],
      logo: '',
      color: 'from-red-600 to-purple-600'
    },
    {
      id: 4,
      name: 'Netflix + ViX',
      price: '25.000',
      services: ['Netflix', 'ViX'],
      logo: '',
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 5,
      name: 'Netflix + Paramount',
      price: '22.000',
      services: ['Netflix', 'Paramount+'],
      logo: '',
      color: 'from-red-600 to-blue-500'
    },
    {
      id: 6,
      name: 'Disney+ + Prime Video',
      price: '19.000',
      services: ['Disney+', 'Prime Video'],
      logo: '',
      color: 'from-blue-600 to-cyan-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 7,
      name: 'Disney+ + HBO Max',
      price: '19.000',
      services: ['Disney+', 'HBO Max'],
      logo: '',
      color: 'from-blue-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 8,
      name: 'Disney+ + Paramount',
      price: '18.000',
      services: ['Disney+', 'Paramount+'],
      logo: '',
      color: 'from-blue-600 to-blue-500',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 9,
      name: 'Prime Video + HBO Max',
      price: '18.000',
      services: ['Prime Video', 'HBO Max'],
      logo: '',
      color: 'from-cyan-600 to-purple-600'
    },
    {
      id: 10,
      name: 'HBO Max + Paramount',
      price: '17.000',
      services: ['HBO Max', 'Paramount+'],
      logo: '',
      color: 'from-purple-600 to-blue-500'
    },
    {
      id: 11,
      name: 'Netflix + Disney+ + Prime Video',
      price: '29.000',
      services: ['Netflix', 'Disney+', 'Prime Video'],
      logo: '',
      color: 'from-red-600 via-blue-600 to-cyan-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 12,
      name: 'Netflix + Disney+ + HBO Max',
      price: '29.000',
      services: ['Netflix', 'Disney+', 'HBO Max'],
      logo: '',
      color: 'from-red-600 via-blue-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 13,
      name: 'Disney+ + Prime Video + HBO Max',
      price: '25.000',
      services: ['Disney+', 'Prime Video', 'HBO Max'],
      logo: '',
      color: 'from-blue-600 via-cyan-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 14,
      name: 'Netflix + Disney+ + Prime Video + HBO Max',
      price: '31.000',
      services: ['Netflix', 'Disney+', 'Prime Video', 'HBO Max'],
      logo: '',
      color: 'from-red-600 via-blue-600 via-cyan-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 15,
      name: 'Netflix + Disney+ + Prime Video + HBO Max + Paramount',
      price: '33.000',
      services: ['Netflix', 'Disney+', 'Prime Video', 'HBO Max', 'Paramount+'],
      logo: '',
      color: 'from-red-600 via-blue-600 via-cyan-600 via-purple-600 to-blue-500',
      note: 'Disney+ Premium vale $3.000 más'
    },
  ];

  return (
    <section id="combos" className="py-16 md:py-20 px-4" style={{ backgroundColor: '#1A1F2B' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#00E676' }}>
            SUPER COMBOS
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#F5F7FA' }}>
            1 pantalla de cada plataforma
          </p>
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2" style={{ 
            backgroundColor: 'rgba(0, 230, 118, 0.1)',
            border: '1px solid rgba(0, 230, 118, 0.3)'
          }}>
            <span className="font-semibold text-sm" style={{ color: '#00E676' }}>IMPORTANTE:</span>
            <span className="text-sm" style={{ color: '#9AA4B2' }}>Los combos incluyen Disney+ Estándar. Para Disney+ Premium agregar $3.000 adicionales</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {superCombos.map((combo) => (
            <ServiceCard
              key={combo.id}
              name={combo.name}
              price={combo.price}
              logo={combo.logo}
              color={combo.color}
              type="combo"
              services={combo.services}
              comboId={combo.id}
              note={combo.note}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperCombosSection;