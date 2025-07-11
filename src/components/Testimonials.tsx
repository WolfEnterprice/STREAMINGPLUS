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
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              CLIENTES FELICES
            </span>
          </h2>
          <p className="text-gray-300 text-lg">Lo que dicen nuestros usuarios</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="text-xs text-purple-400 font-semibold">
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-6 inline-block">
            <h3 className="text-white font-bold text-2xl mb-2">
              ¡SERVICIO GARANTIZADO!
            </h3>
            <p className="text-gray-300">
              Más de 1000 clientes satisfechos nos respaldan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;