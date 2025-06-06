import React, { useState } from 'react';
import { Scale, BookOpen, Users, Briefcase, Lightbulb, BarChart } from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Scale className="h-8 w-8" />,
      title: 'Conseil Juridique',
      description: 'Accompagnement personnalisé sur les questions juridiques liées à votre activité professionnelle, avec une expertise particulière en droit des affaires et droit social.',
      color: 'bg-blue-800',
    },
    {
      id: 2,
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Formation Professionnelle',
      description: 'Programmes de formation sur mesure adaptés aux besoins spécifiques de votre organisation, avec des méthodes pédagogiques innovantes et participatives.',
      color: 'bg-orange-500',
    },
    {
      id: 3,
      icon: <Users className="h-8 w-8" />,
      title: 'Développement RH',
      description: 'Stratégies et outils pour optimiser la gestion de vos ressources humaines, favoriser l\'engagement et développer les compétences de vos équipes.',
      color: 'bg-blue-700',
    },
    {
      id: 4,
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Accompagnement Professionnel',
      description: 'Coaching individuel et collectif pour accompagner les transitions professionnelles, renforcer le leadership et améliorer la performance.',
      color: 'bg-orange-600',
    },
    {
      id: 5,
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation Managériale',
      description: 'Conseils et méthodes pour mettre en place des pratiques managériales innovantes, adaptées aux nouveaux défis des organisations.',
      color: 'bg-blue-600',
    },
    {
      id: 6,
      icon: <BarChart className="h-8 w-8" />,
      title: 'Audit et Évaluation',
      description: 'Diagnostics organisationnels et audits de compétences pour identifier les forces et les axes d\'amélioration de votre structure.',
      color: 'bg-orange-700',
    },
  ];

  const handleServiceClick = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Nos <span className="text-orange-500">Services</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour accompagner votre organisation dans son développement et renforcer son capital humain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform ${
                activeService === service.id ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className={`${service.color} p-4 text-white`}>
                <div className="flex justify-between items-center">
                  {service.icon}
                  <span className="text-xs font-semibold">0{service.id}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                <div className={`mt-4 h-1 w-12 ${service.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;