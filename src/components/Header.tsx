"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif text-teal-700 font-medium tracking-wide relative group">
            <span className="group-hover:text-teal-800 transition-colors duration-300">Hypnose Bayeux</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-700 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-teal-700 transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">
              Accueil
            </Link>
            <Link href="/tarifs" className="text-gray-700 hover:text-teal-700 transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">
              Tarifs et Horaires
            </Link>
            <Link href="/galerie" className="text-gray-700 hover:text-teal-700 transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">
              Galerie
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-700 transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">
              Contact
            </Link>
            <Link href="/acces" className="text-gray-700 hover:text-teal-700 transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">
              Accès
            </Link>
            
            <Link 
              href="/contact" 
              className="bg-teal-700 text-white px-5 py-2 rounded-md ml-4 hover:bg-teal-800 transition-all duration-300 font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Rendez-vous
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-700 transition-colors duration-300"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-teal-700 transition-colors duration-300 py-2 font-medium relative inline-block"
                onClick={toggleMenu}
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">Accueil</span>
              </Link>
              <Link 
                href="/tarifs" 
                className="text-gray-700 hover:text-teal-700 transition-colors duration-300 py-2 font-medium relative inline-block"
                onClick={toggleMenu}
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">Tarifs et Horaires</span>
              </Link>
              <Link 
                href="/galerie" 
                className="text-gray-700 hover:text-teal-700 transition-colors duration-300 py-2 font-medium relative inline-block"
                onClick={toggleMenu}
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">Galerie</span>
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-teal-700 transition-colors duration-300 py-2 font-medium relative inline-block"
                onClick={toggleMenu}
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">Contact</span>
              </Link>
              <Link 
                href="/acces" 
                className="text-gray-700 hover:text-teal-700 transition-colors duration-300 py-2 font-medium relative inline-block"
                onClick={toggleMenu}
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300">Accès</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 