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
    <section id="faq" className="py-16 md:py-20 px-4" style={{ backgroundColor: '#1A1F2B' }}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(47, 128, 237, 0.1)' }}>
            <HelpCircle className="w-8 h-8" style={{ color: '#2F80ED' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F5F7FA' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-lg" style={{ color: '#9AA4B2' }}>Resolvemos todas tus dudas</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{ 
                backgroundColor: '#0B0F14',
                border: '1px solid rgba(154, 164, 178, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(47, 128, 237, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(154, 164, 178, 0.2)';
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors group"
                style={{ backgroundColor: openIndex === index ? '#1A1F2B' : 'transparent' }}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = '#1A1F2B';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <h3 className="font-semibold text-lg pr-4" style={{ color: '#F5F7FA' }}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#2F80ED' }} />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0 group-hover:text-tech transition-colors" style={{ color: '#9AA4B2' }} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5" style={{ borderTop: '1px solid rgba(154, 164, 178, 0.2)' }}>
                  <p className="leading-relaxed pt-4" style={{ color: '#9AA4B2' }}>
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