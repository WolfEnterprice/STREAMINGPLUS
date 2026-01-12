import React from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      rating: 5,
      comment: "Excelente servicio, llevo 6 meses usando sus combos y nunca he tenido problemas. Muy recomendado!",
      service: "Combo Netflix + Disney+"
    },
    {
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Súper rápida la activación y el precio es increíble. Atención al cliente de 10.",
      service: "Combo Completo"
    },
    {
      name: "Ana López",
      rating: 5,
      comment: "Me encanta poder tener todas las plataformas por un precio tan accesible. Servicio confiable.",
      service: "Netflix + HBO Max"
    },
    {
      name: "David Martínez",
      rating: 5,
      comment: "Llevamos toda la familia usando el servicio. Funciona perfecto en todos los dispositivos.",
      service: "Super Combo Premium"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Clientes Satisfechos
            </span>
          </h2>
          <p className="text-slate-300 text-lg">Lo que dicen nuestros usuarios</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 
                         hover:bg-slate-800/70 hover:border-primary-500/50 transition-all duration-300
                         transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full 
                              flex items-center justify-center mr-3 shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm mb-4 leading-relaxed min-h-[4rem]">
                "{testimonial.comment}"
              </p>
              
              <div className="text-xs text-primary-400 font-semibold bg-primary-500/10 rounded-full px-3 py-1 inline-block">
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 
                        rounded-2xl p-6 md:p-8 inline-block max-w-2xl">
            <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
              ¡Servicio Garantizado!
            </h3>
            <p className="text-slate-300 text-lg">
              Más de 1000 clientes satisfechos nos respaldan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;