import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">{t('faq.title')}</h2>
          <p className="text-lg text-slate-600">{t('faq.subtitle')}</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-b border-gray-200 ${index === 0 ? 'border-t' : ''}`}
            >
              <button
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-slate-800">{faq.question}</span>
                <span className="ml-6 flex-shrink-0 text-purple-600">
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;