import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import WarningBanner from './components/WarningBanner';
import PromotionsSection from './components/PromotionsSection';
import SuperCombosSection from './components/SuperCombosSection';
import PaymentMethods from './components/PaymentMethods';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Header />
      <HeroBanner />
      <WarningBanner />
      <PromotionsSection />
      <SuperCombosSection />
      <PaymentMethods />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;