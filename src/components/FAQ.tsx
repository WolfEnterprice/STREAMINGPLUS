import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuánto dura el servicio?",
      answer: "Todos nuestros servicios tienen duración de 1 mes desde la activación. Los combos incluyen 1 pantalla de cada plataforma."
    },
    {
      question: "¿Se puede compartir pantalla?",
      answer: "Cada servicio incluye 1 pantalla. Para Disney+ Premium y otros servicios premium, consulta disponibilidad de pantallas adicionales."
    },
    {
      question: "¿Qué garantía ofrecen?",
      answer: "Ofrecemos servicio garantizado. Si hay algún problema con tu cuenta, nos encargamos de solucionarlo o reemplazarla."
    },
    {
      question: "¿Cuánto tiempo tardan en activar el servicio?",
      answer: "Una vez confirmado el pago, el servicio se activa en máximo 2 horas durante horario laboral."
    },
    {
      question: "¿Puedo cambiar de combo después de la compra?",
      answer: "Sí, puedes actualizar tu combo pagando la diferencia correspondiente. Contáctanos por WhatsApp para más detalles."
    },
    {
      question: "¿Qué diferencia hay entre Disney+ Estándar y Premium?",
      answer: "Disney+ Premium incluye contenido en 4K y más pantallas simultáneas. Todos nuestros combos incluyen Disney+ Estándar por defecto. Disney+ Premium vale $3.000 más sobre el valor de la compra de cualquier combo que incluya Disney+."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Preguntas Frecuentes
            </span>
          </h2>
          <p className="text-slate-300 text-lg">Resolvemos todas tus dudas</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden
                         hover:border-primary-500/50 transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between 
                         hover:bg-slate-800/70 transition-colors group"
              >
                <h3 className="text-white font-semibold text-lg pr-4 group-hover:text-primary-300 transition-colors">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-hover:text-primary-400 transition-colors" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-slate-700/50">
                  <p className="text-slate-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;