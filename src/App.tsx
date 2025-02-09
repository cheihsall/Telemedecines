import React from 'react';
import { ArrowRight, Users, Heart, Shield, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="accueil" className="pt-20">
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Télémédecine au Sénégal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">La Santé Accessible Pour Tous</h1>
              <p className="text-xl mb-8">Connecter les zones rurales du Sénégal aux meilleurs soins de santé grâce à la télémédecine.</p>
              <div className="space-x-4">
                <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg inline-flex items-center">
                  Nous Contacter
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a href="#about" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg">
                  En Savoir Plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Réduire les inégalités d'accès aux soins de santé en connectant les communautés rurales aux professionnels de santé grâce à la technologie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Consultations à Distance</h3>
              <p className="text-gray-600">Accédez à des consultations médicales de qualité depuis votre localité.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Suivi Médical</h3>
              <p className="text-gray-600">Bénéficiez d'un suivi régulier et personnalisé de votre santé.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Données Sécurisées</h3>
              <p className="text-gray-600">Vos informations médicales sont protégées selon les plus hauts standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment notre plateforme transforme l'accès aux soins de santé dans les zones rurales du Sénégal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Impact de la télémédecine"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Amélioration de l'Accès aux Soins</h3>
                <p className="text-gray-600">Plus de 1000 consultations réalisées dans 50 villages différents.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Réduction des Déplacements</h3>
                <p className="text-gray-600">80% de réduction des déplacements vers les centres urbains pour des consultations.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Formation Continue</h3>
                <p className="text-gray-600">200 agents de santé formés à l'utilisation de la plateforme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous souhaitez en savoir plus sur notre projet ou devenir partenaire ? N'hésitez pas à nous contacter.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center"
                >
                  Envoyer
                  <Phone className="ml-2" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;