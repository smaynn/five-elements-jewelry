import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scroll } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-imperial-400 rounded-lg flex items-center justify-center transform -rotate-6 transition-transform group-hover:rotate-0">
            <Scroll className="h-6 w-6 text-black/80" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-black">Five Elements</span>
            <span className="text-xs text-imperial-600">五行相生</span>
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