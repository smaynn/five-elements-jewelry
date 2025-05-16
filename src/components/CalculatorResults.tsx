import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CalculatorResults = ({ results }) => {
  const { t } = useLanguage();

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'Excellent':
      case '优秀':
        return 'text-emerald-500';
      case 'Good':
      case '良好':
        return 'text-blue-500';
      case 'Average':
      case '一般':
        return 'text-amber-500';
      case 'Challenging':
      case '具挑战性':
        return 'text-orange-500';
      default:
        return 'text-gray-700';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-500';
    if (score >= 70) return 'text-blue-500';
    if (score >= 60) return 'text-amber-500';
    return 'text-orange-500';
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="px-8 pt-8 pb-4 bg-gradient-to-r from-imperial-400 to-imperial-500 text-black">
        <h3 className="text-2xl font-bold mb-2">{t('results.title')}</h3>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">{t('results.rating')}</p>
            <p className={`text-xl font-bold ${getRatingColor(results.rating)}`}>{results.rating}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">{t('results.score')}</p>
            <p className={`text-xl font-bold ${getScoreColor(results.score)}`}>{results.score}/100</p>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">{t('results.favorable')}</p>
          <div className="flex flex-wrap gap-2">
            {results.favorable.map((element, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-imperial-100 text-imperial-800 rounded-full text-sm font-medium"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">{t('results.unfavorable')}</p>
          <div className="flex flex-wrap gap-2">
            {results.unfavorable.map((element, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
              >
                {element}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">{t('results.recommendation')}</p>
          <p className="text-base font-medium">{results.recommendation}</p>
        </div>
        
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-1">{t('results.explanation')}</p>
          <p className="text-base">{results.explanation}</p>
        </div>
        
        <a 
          href="#products" 
          className="block w-full py-3 px-6 text-center bg-gradient-to-r from-imperial-400 to-imperial-500 text-black font-medium rounded-lg hover:from-imperial-500 hover:to-imperial-600 transition-colors"
        >
          {t('results.cta')}
        </a>
      </div>
    </div>
  );
};

export default CalculatorResults;