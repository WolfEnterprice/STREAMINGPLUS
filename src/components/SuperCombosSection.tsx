import React from 'react';
import ServiceCard from './ServiceCard';

const SuperCombosSection = () => {
  const superCombos = [
    {
      id: 1,
      name: 'Netflix + Disney+',
      price: '22.000',
      services: ['Netflix', 'Disney+'],
      logo: '',
      color: 'from-red-600 to-blue-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 2,
      name: 'Netflix + Prime Video',
      price: '21.000',
      services: ['Netflix', 'Prime Video'],
      logo: '',
      color: 'from-red-600 to-cyan-600'
    },
    {
      id: 3,
      name: 'Netflix + HBO Max',
      price: '20.000',
      services: ['Netflix', 'HBO Max'],
      logo: '',
      color: 'from-red-600 to-purple-600'
    },
    {
      id: 4,
      name: 'Netflix + ViX',
      price: '23.000',
      services: ['Netflix', 'ViX'],
      logo: '',
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 5,
      name: 'Netflix + Paramount',
      price: '20.000',
      services: ['Netflix', 'Paramount+'],
      logo: '',
      color: 'from-red-600 to-blue-500'
    },
    {
      id: 6,
      name: 'Disney+ + Prime Video',
      price: '17.000',
      services: ['Disney+', 'Prime Video'],
      logo: '',
      color: 'from-blue-600 to-cyan-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 7,
      name: 'Disney+ + HBO Max',
      price: '16.000',
      services: ['Disney+', 'HBO Max'],
      logo: '',
      color: 'from-blue-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 8,
      name: 'Disney+ + Paramount',
      price: '16.000',
      services: ['Disney+', 'Paramount+'],
      logo: '',
      color: 'from-blue-600 to-blue-500',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 9,
      name: 'Prime Video + HBO Max',
      price: '16.000',
      services: ['Prime Video', 'HBO Max'],
      logo: '',
      color: 'from-cyan-600 to-purple-600'
    },
    {
      id: 10,
      name: 'HBO Max + Paramount',
      price: '15.000',
      services: ['HBO Max', 'Paramount+'],
      logo: '',
      color: 'from-purple-600 to-blue-500'
    },
    {
      id: 11,
      name: 'Netflix + Disney+ + Prime Video',
      price: '27.000',
      services: ['Netflix', 'Disney+', 'Prime Video'],
      logo: '',
      color: 'from-red-600 via-blue-600 to-cyan-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 12,
      name: 'Netflix + Disney+ + HBO Max',
      price: '26.000',
      services: ['Netflix', 'Disney+', 'HBO Max'],
      logo: '',
      color: 'from-red-600 via-blue-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 13,
      name: 'Disney+ + Prime Video + HBO Max',
      price: '22.000',
      services: ['Disney+', 'Prime Video', 'HBO Max'],
      logo: '',
      color: 'from-blue-600 via-cyan-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 14,
      name: 'Netflix + Disney+ + Prime Video + HBO Max',
      price: '29.000',
      services: ['Netflix', 'Disney+', 'Prime Video', 'HBO Max'],
      logo: '',
      color: 'from-red-600 via-blue-600 via-cyan-600 to-purple-600',
      note: 'Disney+ Premium vale $3.000 más'
    },
    {
      id: 15,
      name: 'Netflix + Disney+ + Prime Video + HBO Max + Paramount',
      price: '31.000',
      services: ['Netflix', 'Disney+', 'Prime Video', 'HBO Max', 'Paramount+'],
      logo: '',
      color: 'from-red-600 via-blue-600 via-cyan-600 via-purple-600 to-blue-500',
      note: 'Disney+ Premium vale $3.000 más'
    },
  ];

  return (
    <section id="combos" className="py-16 px-4 bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              SUPER COMBOS
            </span>
          </h2>
          <p className="text-gray-300 text-lg">1 PANTALLA DE CADA PLATAFORMA</p>
          <p className="text-gray-400 text-sm mt-2">
            <span className="text-yellow-400 font-semibold">IMPORTANTE:</span> Los combos incluyen Disney+ Estándar. Para Disney+ Premium agregar $3.000 adicionales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuperCombosSection;