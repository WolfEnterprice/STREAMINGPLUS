import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import PromotionsSection from './components/PromotionsSection';
import SuperCombosSection from './components/SuperCombosSection';
import PaymentMethods from './components/PaymentMethods';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-pink-900 to-blue-900">
      <Header />
      <HeroBanner />
      <PromotionsSection />
      <SuperCombosSection />
      <PaymentMethods />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;