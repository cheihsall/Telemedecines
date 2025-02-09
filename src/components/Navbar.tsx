import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">TeZR-Senegal</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-indigo-600">Accueil</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">À propos</a>
            <a href="#impact" className="text-gray-700 hover:text-indigo-600">Impact</a>
            <a href="#technology" className="text-gray-700 hover:text-indigo-600">Technologie</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Accueil</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">À propos</a>
            <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Impact</a>
            <a href="#technology" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Technologie</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}