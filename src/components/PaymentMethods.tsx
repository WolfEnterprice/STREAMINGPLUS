import React from 'react';
import { Smartphone, Building, CreditCard, AlertCircle, MessageCircle } from 'lucide-react';

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
      color: 'from-green-500 to-green-600'
    },
    {
      type: 'Transferencia Bancaria',
      icon: <Building className="w-6 h-6" />,
      methods: [
        { 
          name: 'Bancolombia', 
          
        },
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Corresponsalía',
      icon: <CreditCard className="w-6 h-6" />,
      methods: [
        { 
          name: 'Efecty y Super Giros',
          
        },
      ],
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section id="pagos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              MÉTODOS DE PAGO
            </span>
          </h2>
          <p className="text-gray-300 text-lg">Elige tu método de pago preferido</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white`}>
                {method.icon}
              </div>
              
              <h3 className="text-white font-bold text-center mb-4 text-lg">
                {method.type}
              </h3>
              
              <div className="space-y-3">
                {method.methods.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-black/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">{item.name}</h4>
                    {'number' in item && (
                      <p className="text-gray-300 text-sm">{item.number}</p>
                    )}
                    {'details' in item && (
                      <>
                        <p className="text-gray-300 text-sm">{item.details}</p>
                        <p className="text-gray-300 text-sm">{item.cc}</p>
                        <p className="text-gray-300 text-sm">{item.owner}</p>
                      </>
                    )}
                    {'city' in item && (
                      <>
                        <p className="text-gray-300 text-sm">{item.owner}</p>
                        <p className="text-gray-300 text-sm">{item.cc}</p>
                        <p className="text-gray-300 text-sm">{item.city}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-400" />
            <h3 className="text-yellow-400 font-bold text-lg">IMPORTANTE</h3>
          </div>
          <p className="text-white text-center">
            <strong>No escribir nada en la descripción de la transferencia.</strong><br />
            Enviar pantallazo con fecha, hora y cuenta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;