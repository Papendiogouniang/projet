import React from 'react';
import { Building2 } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'TechCorp International',
      logo: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Leader mondial en solutions technologiques'
    },
    {
      name: 'Global Education Group',
      logo: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Réseau international d\'établissements d\'enseignement'
    },
    {
      name: 'Legal Solutions Pro',
      logo: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Cabinet d\'avocats de premier plan'
    },
    {
      name: 'HR Excellence Corp',
      logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Expert en ressources humaines et développement'
    }
  ];

  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Nos <span className="text-orange-500">Partenaires</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Nous collaborons avec des organisations de premier plan pour offrir des solutions innovantes et efficaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="card-hover bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 image-hover-effect shine-effect">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <div className="flex items-center mb-3">
                  <Building2 className="h-5 w-5 text-orange-500 mr-2" />
                  <h3 className="font-heading font-semibold text-lg text-blue-900">{partner.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Intéressé par un partenariat avec Kéba Consulting ?
          </p>
          <a href="#contact" className="btn-secondary inline-flex items-center shine-effect">
            Devenir partenaire
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;