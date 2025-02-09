import React from 'react';
import { Facebook, Twitter, Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TeZR-Senegal</h3>
            <p className="text-gray-400">Améliorer l'accès aux soins de santé dans les zones rurales du Sénégal grâce à la télémédecine.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>chmouhammed2605@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+221 777839359</span>
              </div>
              <div className="flex items-center">
                <Linkedin size={20} className="mr-2" />
                <a href="https://www.linkedin.com/in/cheikh-sall-497359238/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                  Cheikh Sall
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partenaires</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} TeZR-Senegal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}