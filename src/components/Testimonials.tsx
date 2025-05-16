import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">{t('testimonials.title')}</h2>
          <p className="text-lg text-slate-600">{t('testimonials.subtitle')}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xl">★</span>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic text-slate-700 mb-8">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;