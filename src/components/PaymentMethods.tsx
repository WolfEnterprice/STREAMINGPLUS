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
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      type: 'Transferencia Bancaria',
      icon: <Building className="w-6 h-6" />,
      methods: [
        { 
          name: 'Bancolombia', 
        },
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      type: 'Corresponsalía',
      icon: <CreditCard className="w-6 h-6" />,
      methods: [
        { 
          name: 'Efecty y Super Giros',
        },
      ],
      color: 'from-amber-500 to-amber-600'
    },
  ];

  return (
    <section id="pagos" className="py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Métodos de Pago
            </span>
          </h2>
          <p className="text-slate-300 text-lg">Elige tu método de pago preferido</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {paymentMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6
                         hover:bg-slate-800/70 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br ${method.color} 
                             flex items-center justify-center text-white shadow-lg`}>
                {method.icon}
              </div>
              
              <h3 className="text-white font-bold text-center mb-5 text-lg">
                {method.type}
              </h3>
              
              <div className="space-y-3">
                {method.methods.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                    <h4 className="text-white font-semibold mb-2">{item.name}</h4>
                    {'number' in item && item.number && (
                      <p className="text-slate-300 text-sm">{item.number}</p>
                    )}
                    {'details' in item && item.details && (
                      <>
                        <p className="text-slate-300 text-sm">{item.details}</p>
                        <p className="text-slate-300 text-sm">{item.cc}</p>
                        <p className="text-slate-300 text-sm">{item.owner}</p>
                      </>
                    )}
                    {'city' in item && item.city && (
                      <>
                        <p className="text-slate-300 text-sm">{item.owner}</p>
                        <p className="text-slate-300 text-sm">{item.cc}</p>
                        <p className="text-slate-300 text-sm">{item.city}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-amber-400" />
            <h3 className="text-amber-300 font-bold text-lg md:text-xl">Importante</h3>
          </div>
          <p className="text-white text-center leading-relaxed">
            <strong>No escribir nada en la descripción de la transferencia.</strong><br />
            Enviar pantallazo con fecha, hora y cuenta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;