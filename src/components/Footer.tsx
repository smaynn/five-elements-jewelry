import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scroll, MailIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-imperial-400 rounded-lg flex items-center justify-center">
                <Scroll className="h-5 w-5 text-black/80" />
              </div>
              <span className="text-xl font-bold">Five Elements</span>
            </div>
            <p className="text-gray-400 mb-4">
              Exquisite jewelry inspired by ancient Eastern wisdom, designed to balance your elemental energies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-imperial-400 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-imperial-400 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="mailto:contact@five-elements.com" className="text-gray-400 hover:text-imperial-400 transition-colors">
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-imperial-400 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-imperial-400 transition-colors">
                  {t('nav.calculator')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-imperial-400 transition-colors">
                  {t('nav.products')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-imperial-400 transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-imperial-400 transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-imperial-400 transition-colors">
                  {t('footer.about')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              {t('footer.contact')} contact@five-elements.com
            </p>
            <a 
              href="mailto:contact@five-elements.com"
              className="inline-block px-4 py-2 bg-imperial-400 hover:bg-imperial-500 text-black rounded-lg transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Five Elements. {t('footer.copyright')}
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;