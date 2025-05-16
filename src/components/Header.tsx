import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center group">
          <img 
            src="/images/logo/jimeng-2025-05-16-344.png" 
            alt="Logo" 
            className="w-10 h-10 rounded-lg transition-transform transform group-hover:scale-110"
          />
          <div className="flex flex-col ml-2">
            <span className="text-xl font-bold text-black">Five Elements Jewelry</span>
            <span className="text-xs text-imperial-600">五行首饰</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-imperial-500 transition-colors">
              {t('nav.home')}
            </a>
            <a href="#calculator" className="text-gray-800 hover:text-imperial-500 transition-colors">
              {t('nav.calculator')}
            </a>
            <a href="#products" className="text-gray-800 hover:text-imperial-500 transition-colors">
              {t('nav.products')}
            </a>
            <a href="#contact" className="text-gray-800 hover:text-imperial-500 transition-colors">
              {t('nav.contact')}
            </a>
          </nav>
          
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-medium text-imperial-600 border border-imperial-400 rounded-full hover:bg-imperial-50 transition-colors"
          >
            {t('language')}
          </button>
        </div>
        
        <button className="md:hidden text-gray-800 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="h-1 w-full bg-imperial-400 bg-chinese-pattern"></div>
    </header>
  );
};

export default Header;