import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <img 
            src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg" 
            alt="Elegant woman wearing jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6">
            {t('hero.subtitle')}
          </p>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <a 
            href="#calculator" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;