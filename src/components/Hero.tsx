import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-36 pb-0">
      {/* Background image with integrated gradient */}
      <div className="absolute inset-0 h-[300%] z-0">
        <div className="absolute top-[-400px] left-0 w-full h-full">
          <img 
            src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg" 
            alt="Elegant woman wearing jewelry"
            className="w-full h-full object-cover"
          />
          {/* 优化的多点渐变 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 via-black/30 via-black/20 via-black/10 to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-9xl mx-auto text-center text-amber-100 pt-20">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6 text-amber-200">
            {t('hero.subtitle')}
          </p>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <a 
            href="#calculator" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-20"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;