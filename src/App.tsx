import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 font-sans">
        <Header />
        <main>
          <Hero />
          <Calculator />
          <Products />
          <Features />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;