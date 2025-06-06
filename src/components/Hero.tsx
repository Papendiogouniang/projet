import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative pt-24 lg:pt-32 min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-1000 ease-out`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Développez votre <span className="text-orange-500">capital humain</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Kéba Consulting vous accompagne dans vos démarches de conseil juridique et de développement professionnel pour créer de la valeur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary flex items-center justify-center">
                Nos services <ChevronRight size={20} className="ml-1" />
              </a>
              <a href="#contact" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center">
                Contactez-nous
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-1000 delay-300 ease-out relative`}>
            <div className="bg-white p-4 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://www.senformation.com/content/uploads/keba-consulting-1-1024x576.jpg" 
                alt="Équipe de professionnels" 
                className="rounded w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <p className="text-white font-semibold">Expertise et professionnalisme</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;