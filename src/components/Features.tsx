import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PersonStandingIcon, AmbulanceIcon as BalanceIcon, GemIcon, GlobeIcon } from 'lucide-react';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <PersonStandingIcon className="h-8 w-8" />,
      title: t('features.feature1.title'),
      description: t('features.feature1.description'),
      color: 'from-green-500 to-emerald-700',
    },
    {
      icon: <BalanceIcon className="h-8 w-8" />,
      title: t('features.feature2.title'),
      description: t('features.feature2.description'),
      color: 'from-amber-500 to-orange-700',
    },
    {
      icon: <GemIcon className="h-8 w-8" />,
      title: t('features.feature3.title'),
      description: t('features.feature3.description'),
      color: 'from-blue-500 to-indigo-700',
    },
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      title: t('features.feature4.title'),
      description: t('features.feature4.description'),
      color: 'from-purple-500 to-fuchsia-700',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">{t('features.title')}</h2>
          <p className="text-lg text-slate-600">{t('features.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className={`p-6 bg-gradient-to-r ${feature.color} text-white`}>
                {feature.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;