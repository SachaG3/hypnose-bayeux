"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Image = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export default function CarouselClient({ images }: { images: Image[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  // Fonction pour afficher l&apos;image précédente
  const showPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Fonction pour afficher l&apos;image suivante
  const showNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  // Avance automatique du carrousel
  useEffect(() => {
    const intervalId = setInterval(showNextSlide, 6000);
    
    return () => clearInterval(intervalId); // Nettoyage au démontage
  }, [showNextSlide]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="carousel-container overflow-hidden rounded-xl shadow-lg bg-gray-50">
        <div className="carousel-wrapper relative">
          {/* Main Image Display */}
          <div className="relative h-[500px] w-full">
            <div className="relative w-full h-full overflow-hidden">
              {images.map((image, index) => (
                <div key={index}
                     className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        fill
                        sizes="(max-width: 768px) 100vw, 1024px"
                        style={{objectFit: 'contain'}}
                        className="z-0"
                        priority={index === 0}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                      <h3 className="text-2xl font-medium mb-2">{image.title}</h3>
                      <p className="text-white/90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button 
                onClick={showPrevSlide}
                aria-label="Image précédente"
                className="carousel-control bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-300 z-30">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={showNextSlide}
                aria-label="Image suivante"
                className="carousel-control bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-colors duration-300 z-30">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="carousel-thumbnails grid grid-cols-5 gap-2 p-4 bg-gray-100">
          {images.map((image, index) => (
            <button 
              key={index}
              aria-label={`Voir ${image.alt}`}
              className={`relative aspect-square overflow-hidden rounded-md hover:opacity-90 transition-opacity border-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${index === currentIndex ? 'border-teal-500' : 'border-transparent'}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image 
                src={image.src} 
                alt={`Miniature - ${image.alt}`} 
                fill
                sizes="(max-width: 768px) 64px, 128px"
                style={{objectFit: 'cover'}}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 