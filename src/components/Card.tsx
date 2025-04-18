import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt = '',
  href,
  className = '',
}) => {
  const cardContent = (
    <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 flex-grow mb-4">
          {description}
        </p>
        {href && (
          <div className="mt-auto">
            <span className="text-teal-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300 inline-block">
              En savoir plus
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    // Utilisation de la syntaxe JSX standard
    const linkProps = { href, className: `block group ${className}` };
    // @ts-expect-error - Next.js Link n'est pas correctement typé pour les strings simples
    return React.createElement(Link, linkProps, cardContent);
  }

  return <div className={className}>{cardContent}</div>;
};

export default Card; 