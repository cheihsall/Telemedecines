import React from 'react';
import { ArrowRight, Users, Heart, Shield, Phone, Brain, Clock, Laptop, Globe, Leaf, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import img from './assets/telemedecinephotoseuleCROPPEDCOMPRESSEE.png'
import img2 from './assets/tm.jpeg'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar />
      <section id="accueil" className="pt-20">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src={img}
              alt="Télémédecine au Sénégal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <span className="text-indigo-400 font-semibold mb-4 block">Révolution Numérique pour la Santé au Sénégal</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">La Santé Accessible Pour Tous</h1>
              <p className="text-xl mb-8">Face aux inégalités médicales alarmantes, nous apportons une solution innovante pour connecter les zones rurales du Sénégal aux meilleurs soins de santé grâce à la télémédecine.</p>
              <div className="space-x-4">
                <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl inline-flex items-center transform hover:scale-105 transition-all duration-300">
                  Nous Contacter
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a href="#about" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300">
                  En Savoir Plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-12 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70%</div>
              <p>de la population rurale désormais connectée aux soins</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p>de réduction des déplacements inutiles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30%</div>
              <p>de gain de temps pour les urgences</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p>consultations réalisées</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold mb-2 block">Notre Mission</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">  Une Révolution pour la Santé en Milieu Rural </h2>
            <p className="text-xl text-gray-600  mx-auto">
          
Nous sommes à l’aube d’une transformation majeure dans le domaine de la santé. Notre mission est claire et ambitieuse : briser les barrières géographiques et réduire les inégalités d’accès aux soins en connectant les communautés rurales aux professionnels de santé grâce à une technologie innovante et inclusive.

Face aux défis persistants – manque de personnel médical, distances excessives, infrastructures insuffisantes – nous apportons une solution qui change la donne : une plateforme de télémédecine qui met la santé à portée de main, peu importe où l’on se trouve.

Avec cette initiative, nous ne nous contentons pas d’améliorer l’accès aux soins ; nous redéfinissons l’avenir de la médecine en la rendant plus accessible, plus rapide et plus efficace pour tous.

Ensemble, faisons de la technologie un moteur de progrès pour un monde où chaque individu, où qu'il soit, a droit à des soins de qualité ! 
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Consultations à Distance</h3>
              <p className="text-gray-600">Accédez à des consultations médicales de qualité depuis votre localité, sans déplacement inutile vers les centres urbains.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Brain className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">IA et Triage Intelligent</h3>
              <p className="text-gray-600">Un système de triage basé sur l'IA pour diagnostiquer et suivre les patients en temps réel, assurant une prise en charge rapide.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Données Sécurisées</h3>
              <p className="text-gray-600">Vos dossiers médicaux électroniques sont protégés selon les plus hauts standards de sécurité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold mb-2 block">Notre Impact</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Une Transformation Concrète</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre plateforme révolutionne l'accès aux soins dans les zones rurales du Sénégal avec des résultats mesurables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <Clock className="w-6 h-6 text-indigo-600 mr-2" />
                  Optimisation des Urgences
                </h3>
                <p className="text-gray-600">30% de gain de temps pour les urgences grâce à notre système de triage intelligent.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <Laptop className="w-6 h-6 text-indigo-600 mr-2" />
                  Digitalisation Complète
                </h3>
                <p className="text-gray-600">Intégration dans la stratégie "Sénégal Numérique 2025" pour moderniser les services de santé.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <Leaf className="w-6 h-6 text-indigo-600 mr-2" />
                  Impact Environnemental
                </h3>
                <p className="text-gray-600">Réduction significative des émissions de CO₂ grâce à la diminution des déplacements.</p>
              </div>
            </div>
            
            <div>
              <img
                src={img2}
                alt="Impact de la télémédecine"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Avenir */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold mb-2 block">L'Avenir</span>
            <h2 className="text-3xl font-bold mb-4">Vers une Généralisation des Soins Numériques</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre vision pour l'avenir de la santé au Sénégal inclut des innovations majeures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-indigo-500 p-8 rounded-xl">
              <Globe className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Cliniques Mobiles</h3>
              <p className="text-gray-300">Déploiement de cliniques mobiles connectées pour atteindre les zones les plus reculées.</p>
            </div>
            
            <div className="border border-indigo-500 p-8 rounded-xl">
              <Laptop className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Objets Connectés</h3>
              <p className="text-gray-300">Intégration d'objets connectés pour le suivi en temps réel des maladies chroniques.</p>
            </div>
            
            <div className="border border-indigo-500 p-8 rounded-xl">
              <Brain className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">IA Avancée</h3>
              <p className="text-gray-300">Amélioration continue des diagnostics grâce à l'intelligence artificielle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold mb-2 block">Agissons Ensemble</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rejoignez le Mouvement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participez à la transformation de la santé au Sénégal. Votre soutien peut faire la différence.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-indigo-500/30"
              >
                Rejoignez le Mouvement
                <ArrowRight className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
