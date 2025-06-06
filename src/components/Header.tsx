import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images.png';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'E-learning', href: '/elearning' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'fr' | 'en');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={logoImage}
                alt="Kéba Consulting" 
                className="h-14 w-auto transform transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-orange-500/10 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="nav-link">
                {language === 'fr' ? link.name : link.name === 'Accueil' ? 'Home' : link.name}
              </Link>
            ))}
          </nav>

          {/* Language selector */}
          <div className="hidden md:flex items-center">
            <select 
              value={language}
              onChange={handleLanguageChange}
              className="bg-blue-50 text-blue-800 font-medium px-3 py-2 rounded-md border-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
            </select>
          </div>

          {/* Menu mobile (icon) */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} className="text-blue-900" /> : <Menu size={24} className="text-blue-900" />}
          </button>
        </div>
      </div>

      {/* Menu mobile (open) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="nav-link py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'fr' ? link.name : link.name === 'Accueil' ? 'Home' : link.name}
              </Link>
            ))}
            <div className="pt-2">
              <select 
                value={language}
                onChange={handleLanguageChange}
                className="bg-blue-50 text-blue-800 font-medium px-3 py-2 rounded-md w-full border-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
