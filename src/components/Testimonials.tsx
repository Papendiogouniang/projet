import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rokhaya Tall",
      role: "Directrice RH",
      company: "Tech Solutions France",
      content: "Kéba Consulting nous a accompagnés dans la transformation de notre politique RH. Leur expertise et leur approche personnalisée ont été déterminantes dans le succès de ce projet.",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Ousseynou Mbaye",
      role: "CEO",
      company: "Innovate Corp",
      content: "L'expertise juridique et les formations proposées par Kéba Consulting ont permis à notre entreprise de se développer en toute sécurité. Une collaboration précieuse.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Pape Ninag",
      role: "Directrice de Formation",
      company: "EduPro France",
      content: "La plateforme e-learning développée avec Kéba Consulting a révolutionné notre approche de la formation continue. Un véritable partenaire de confiance.",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Ils nous font <span className="text-orange-500">confiance</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients et partenaires qui nous font confiance pour les accompagner dans leur développement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-heading font-semibold text-lg text-blue-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-orange-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-orange-500 opacity-20" />
                <p className="text-gray-700 italic relative z-10 pl-4">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="h-2 w-2 rounded-full bg-blue-800"></span>
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;