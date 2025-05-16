import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';

const Products = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.element.toLowerCase() === filter);

  const elementClasses = {
    wood: 'bg-green-100 text-green-800',
    fire: 'bg-red-100 text-red-800',
    earth: 'bg-amber-100 text-amber-800',
    metal: 'bg-gray-100 text-gray-800',
    water: 'bg-blue-100 text-blue-800',
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('products.title')}</h2>
          <p className="text-lg text-gray-600 mb-8">{t('products.subtitle')}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-imperial-400 text-black' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t('products.filter.all')}
            </button>
            <button 
              onClick={() => setFilter('wood')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'wood' 
                  ? 'bg-imperial-400 text-black' 
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {t('products.filter.wood')}
            </button>
            <button 
              onClick={() => setFilter('fire')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'fire' 
                  ? 'bg-imperial-400 text-black' 
                  : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              {t('products.filter.fire')}
            </button>
            <button 
              onClick={() => setFilter('earth')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'earth' 
                  ? 'bg-imperial-400 text-black' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {t('products.filter.earth')}
            </button>
            <button 
              onClick={() => setFilter('metal')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'metal' 
                  ? 'bg-imperial-400 text-black' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t('products.filter.metal')}
            </button>
            <button 
              onClick={() => setFilter('water')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'water' 
                  ? 'bg-imperial-400 text-black' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              {t('products.filter.water')}
            </button>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${elementClasses[product.element.toLowerCase()]}`}>
                  {product.element}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{t('products.material')}</p>
                    <p className="text-sm font-medium">{product.material}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Price</p>
                    <p className="text-lg font-bold text-imperial-600">${product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;