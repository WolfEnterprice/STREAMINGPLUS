import React from 'react';
import { Smartphone, Building, CreditCard, AlertCircle } from 'lucide-react';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      type: 'Billeteras Digitales',
      icon: <Smartphone className="w-6 h-6" />,
      methods: [
        { name: 'Nequi', number: '' },
        { name: 'Daviplata', number: '' },
        { name: 'Transfiya', number: '' },
      ],
      iconColor: '#00E676'
    },
    {
      type: 'Transferencia Bancaria',
      icon: <Building className="w-6 h-6" />,
      methods: [
        { 
          name: 'Bancolombia', 
        },
      ],
      iconColor: '#2F80ED'
    },
    {
      type: 'Corresponsalía',
      icon: <CreditCard className="w-6 h-6" />,
      methods: [
        { 
          name: 'Efecty y Super Giros',
        },
      ],
      iconColor: '#2F80ED'
    },
  ];

  return (
    <section id="pagos" className="py-16 md:py-20 px-4" style={{ backgroundColor: '#0B0F14' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F5F7FA' }}>
            Métodos de Pago
          </h2>
          <p className="text-lg" style={{ color: '#9AA4B2' }}>Elige tu método de pago preferido</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {paymentMethods.map((method, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-6 transition-all duration-300"
              style={{ 
                backgroundColor: '#1A1F2B',
                border: '1px solid rgba(154, 164, 178, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(47, 128, 237, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(154, 164, 178, 0.2)';
              }}
            >
              <div 
                className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: method.iconColor, color: '#0B0F14' }}
              >
                {method.icon}
              </div>
              
              <h3 className="font-bold text-center mb-5 text-lg" style={{ color: '#F5F7FA' }}>
                {method.type}
              </h3>
              
              <div className="space-y-3">
                {method.methods.map((item, itemIndex) => (
                  <div key={itemIndex} className="rounded-lg p-4" style={{ backgroundColor: '#0B0F14', border: '1px solid rgba(154, 164, 178, 0.1)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: '#F5F7FA' }}>{item.name}</h4>
                    {'number' in item && item.number && (
                      <p className="text-sm" style={{ color: '#9AA4B2' }}>{item.number}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 md:p-8 max-w-3xl mx-auto" style={{ backgroundColor: 'rgba(0, 230, 118, 0.1)', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6" style={{ color: '#00E676' }} />
            <h3 className="font-bold text-lg md:text-xl" style={{ color: '#00E676' }}>Importante</h3>
          </div>
          <p className="text-center leading-relaxed" style={{ color: '#F5F7FA' }}>
            <strong>No escribir nada en la descripción de la transferencia.</strong><br />
            <span style={{ color: '#9AA4B2' }}>Enviar pantallazo con fecha, hora y cuenta.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;