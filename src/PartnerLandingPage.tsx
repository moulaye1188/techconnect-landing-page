import React from 'react';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import {
  StarIcon as StarSolidIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/solid';

const PartnerLandingPage: React.FC = () => {
  const benefits = [
    {
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      title: "Revenus supplémentaires",
      description: "Générez des revenus réguliers en connectant clients et techniciens. Commission attractive sur chaque mission réalisée.",
      highlight: "Jusqu'à 15% de commission"
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Réseau étendu", 
      description: "Accédez à un large réseau de techniciens qualifiés et de clients dans toute la CEDEAO.",
      highlight: "15 pays couverts"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Support complet",
      description: "Bénéficiez de notre support technique, commercial et marketing pour développer votre activité.",
      highlight: "Support 24/7"
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Outils de gestion",
      description: "Dashboard complet avec statistiques, suivi des performances et outils de gestion avancés.",
      highlight: "Analytics en temps réel"
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Marché en croissance",
      description: "Profitez de la digitalisation du secteur des services techniques en Afrique de l'Ouest.",
      highlight: "Marché de 50M+ habitants"
    },
    {
      icon: <CheckBadgeIcon className="h-8 w-8" />,
      title: "Formation incluse",
      description: "Formation complète sur la plateforme et les meilleures pratiques commerciales.",
      highlight: "Certification partenaire"
    }
  ];

  const testimonials = [
    {
      name: "Amadou Traoré",
      role: "Partenaire - Ouagadougou",
      company: "TechServices BF",
      content: "Depuis que nous sommes partenaires TechConnect, notre chiffre d'affaires a augmenté de 40%. La plateforme nous apporte de nouveaux clients chaque semaine.",
      rating: 5,
      revenue: "+40% CA"
    },
    {
      name: "Fatou Diallo", 
      role: "Partenaire - Abidjan",
      company: "Solutions Pro CI",
      content: "TechConnect nous a permis d'étendre nos services à toute la région. Le support client est excellent et les outils de gestion très pratiques.",
      rating: 5,
      revenue: "200+ missions"
    },
    {
      name: "Kwame Asante",
      role: "Partenaire - Accra",
      company: "GoldCoast Tech", 
      content: "La formation partenaire est très complète. En 6 mois, nous avons constitué un réseau de 50+ techniciens qualifiés.",
      rating: 5,
      revenue: "50+ techniciens"
    }
  ];

  const stats = [
    { number: "1000+", label: "Partenaires actifs" },
    { number: "5000+", label: "Techniciens certifiés" },
    { number: "15000+", label: "Missions réalisées" },
    { number: "98%", label: "Satisfaction client" }
  ];

  const countries = [
    "🇧🇫 Burkina Faso", "🇨🇮 Côte d'Ivoire", "🇸🇳 Sénégal", "🇲🇱 Mali",
    "🇳🇪 Niger", "🇹🇬 Togo", "🇧🇯 Bénin", "🇬🇭 Ghana",
    "🇬🇳 Guinée", "🇸🇱 Sierra Leone", "🇱🇷 Libéria", "🇬🇲 Gambie", 
    "🇬🇼 Guinée-Bissau", "🇨🇻 Cap-Vert", "🇳🇬 Nigeria"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                TechConnect
              </div>
              <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full font-medium">
                CEDEAO
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:savadogo.mohamed@gmail.com"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#inscription"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Devenir partenaire
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rejoignez la révolution
              <span className="block text-yellow-300">des services techniques</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Devenez partenaire TechConnect et développez votre business dans 15 pays de la CEDEAO. 
              Connectez techniciens qualifiés et clients en demande.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#inscription"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center"
              >
                Devenir partenaire maintenant
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a href="#avantages" className="text-white border border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-medium transition-all">
                Découvrir les avantages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="avantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi devenir partenaire ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez tous les avantages de rejoindre le réseau TechConnect et développez 
              votre activité dans le secteur des services techniques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Couverture CEDEAO complète
            </h2>
            <p className="text-xl text-gray-600">
              Développez votre business dans 15 pays avec plus de 50 millions d'habitants
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {countries.map((country, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{country.split(' ')[0]}</div>
                <div className="text-sm text-gray-600 font-medium">
                  {country.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos partenaires témoignent
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment TechConnect transforme les business de nos partenaires
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{testimonial.revenue}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscription" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à rejoindre l'aventure ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous dès maintenant pour en savoir plus sur le programme partenaire TechConnect. 
            Formation et support inclus !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:savadogo.mohamed@gmail.com?subject=Demande de partenariat TechConnect"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center"
            >
              Nous contacter
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <div className="flex items-center text-blue-100">
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              <span>Réponse sous 24h</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>Activation rapide</span>
            </div>
            <div className="flex items-center justify-center">
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              <span>Support dédié</span>
            </div>
            <div className="flex items-center justify-center">
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              <span>Commission attractive</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Des questions ? Contactez notre équipe
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center text-gray-600">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>+226 78 67 60 35</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <span>savadogo.mohamed@gmail.com</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>Ouagadougou, Burkina Faso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">TechConnect CEDEAO</div>
            <p className="text-gray-400 mb-6">
              La plateforme de référence pour les services techniques en Afrique de l'Ouest
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Confidentialité</a>
              <a href="#" className="hover:text-white">Conditions</a>
              <a href="mailto:contact@techconnect-cedeao.com" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnerLandingPage;
