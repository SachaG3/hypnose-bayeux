"use client";

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Colonne 1: Information contact */}
          <div className="flex flex-col">
            <h3 className="text-xl font-serif text-teal-700 font-medium mb-6">Hypnose Bayeux</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-600 mr-3 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Nadège GUIGNARD</p>
                  <p>La Fosse Buhot</p>
                  <p>14400 Maisons</p>
                </div>
              </div>
              
              <a href="tel:0649292077" className="flex items-center hover:text-teal-700 transition-colors duration-300">
                <Phone className="w-5 h-5 text-teal-600 mr-3 shrink-0" />
                <span>06 49 29 20 77</span>
              </a>
              
              <a href="mailto:contact@bayeuxhypnose.fr" className="flex items-center hover:text-teal-700 transition-colors duration-300">
                <Mail className="w-5 h-5 text-teal-600 mr-3 shrink-0" />
                <span>contact@bayeuxhypnose.fr</span>
              </a>
            </div>
          </div>
          
          {/* Colonne 2: Navigation */}
          <div className="flex flex-col">
            <h3 className="text-xl font-serif text-teal-700 font-medium mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-teal-700 transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-600 hover:text-teal-700 transition-colors duration-300">
                  Tarifs et horaires
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-teal-700 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/acces" className="text-gray-600 hover:text-teal-700 transition-colors duration-300">
                  Plan d&apos;accès
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 3: Horaires */}
          <div className="flex flex-col">
            <h3 className="text-xl font-serif text-teal-700 font-medium mb-6">Horaires d&apos;ouverture</h3>
            <div className="flex items-start mb-4">
              <Clock className="w-5 h-5 text-teal-600 mr-3 shrink-0 mt-0.5" />
              <div className="text-gray-600">
                <p className="mb-1">Lundi - Vendredi : 9h00 - 19h00</p>
                <p className="mb-1">Samedi : Sur rendez-vous</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4 italic">
              Consultations uniquement sur rendez-vous
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Hypnose Bayeux. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 