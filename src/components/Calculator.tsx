import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { calculateDestiny } from '../utils/calculationUtils';
import CalculatorResults from './CalculatorResults';

interface CalculationResult {
  rating: string;
  score: number;
  favorable: string[];
  unfavorable: string[];
  recommendation: string;
  explanation: string;
}

const Calculator = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    setTimeout(() => {
      const calculationResults = calculateDestiny(name, birthDate, birthTime);
      setResults(calculationResults);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <section id="calculator" className="relative pt-8 pb-24 bg-transparent z-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-5 pt-[400px]">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">{t('calculator.title')}</h2>
          <p className="text-lg text-white-600">{t('calculator.subtitle')}</p>
        </div>
        
        {!results ? (
          <div className="max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-amber-400/20">
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-3 py-2 rounded-lg border border-amber-400/50 bg-white text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
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
                    className="w-full px-3 py-2 rounded-lg border border-amber-400/50 bg-white text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
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
                    className="w-full px-3 py-2 rounded-lg border border-amber-400/50 bg-white text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isCalculating}
                  className={`w-full py-3 px-4 rounded-lg text-black font-medium focus:outline-none focus:ring-4 focus:ring-amber-300 ${
                    isCalculating 
                      ? 'bg-amber-200 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 transition-colors'
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
      
      {/* 底部渐变，确保与calculator底部对齐，范围扩大一倍 */}
      <div className="absolute bottom-0 left-0 right-0 h-[1000px] bg-gradient-to-b from-transparent via-white/50 via-white/90 to-white pointer-events-none"></div>
    </section>
  );
};

export default Calculator;