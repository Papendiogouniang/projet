import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Logo from '../assets/logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo className="h-10 mb-6" />
            <h1 className="text-3xl font-bold text-orange-500 mb-2">
              KEBA <span className="text-white-900">CONSULTING</span>
            </h1>
            <p className="text-blue-100 mb-6">
              Cabinet de conseil et organisme de formation spécialisé dans le développement du capital humain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-orange-500 transition-colors duration-300 rounded-full p-2">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-orange-500 transition-colors duration-300 rounded-full p-2">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-orange-500 transition-colors duration-300 rounded-full p-2">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-orange-500 transition-colors duration-300 rounded-full p-2">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Accueil</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">À propos</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Services</a></li>
              <li><a href="#elearning" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">E-learning</a></li>
              <li><a href="#contact" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Nos services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Conseil Juridique</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Formation Professionnelle</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Développement RH</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Accompagnement Professionnel</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-orange-500 transition-colors duration-300">Innovation Managériale</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-blue-100 mb-4">Abonnez-vous à notre newsletter pour recevoir nos actualités et offres.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 bg-blue-800 text-white rounded-l-md focus:outline-none flex-grow"
              />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors duration-300">
                <ArrowUp className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kéba Consulting. Tous droits réservés.
          </p>
          <div className="flex space-x-4 text-sm text-blue-100">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Mentions légales</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Politique de confidentialité</a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Conditions d'utilisation</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;