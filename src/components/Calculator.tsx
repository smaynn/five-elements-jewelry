import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { calculateDestiny } from '../utils/calculationUtils';
import CalculatorResults from './CalculatorResults';

const Calculator = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    
    setTimeout(() => {
      const calculationResults = calculateDestiny(name, birthDate, birthTime);
      setResults(calculationResults);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('calculator.title')}</h2>
          <p className="text-lg text-gray-600">{t('calculator.subtitle')}</p>
        </div>
        
        {!results ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('calculator.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('calculator.placeholder.name')}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('calculator.birthdate')}
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="birthtime" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('calculator.birthtime')}
                  </label>
                  <input
                    type="time"
                    id="birthtime"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-imperial-400 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isCalculating}
                  className={`w-full py-4 px-6 rounded-lg text-black font-medium focus:outline-none focus:ring-4 focus:ring-imperial-300 ${
                    isCalculating 
                      ? 'bg-imperial-200 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-imperial-400 to-imperial-500 hover:from-imperial-500 hover:to-imperial-600 transition-colors'
                  }`}
                >
                  {isCalculating ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </span>
                  ) : (
                    t('calculator.calculate')
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <CalculatorResults results={results} />
        )}
      </div>
    </section>
  );
};

export default Calculator;