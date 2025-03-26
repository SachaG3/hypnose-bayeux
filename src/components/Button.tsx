import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSmall?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  className = '',
  children,
  isPrimary = false,
  isSecondary = false,
  isSmall = false,
  type = 'button',
}) => {
  const baseClasses = `inline-block rounded-md font-medium focus:outline-none 
    transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm`;
  
  const sizeClasses = isSmall ? 'px-3 py-1.5 text-sm' : 'px-6 py-2.5 text-base';
  
  const colorClasses = isPrimary
    ? 'bg-teal-700 text-white hover:bg-teal-800'
    : isSecondary
    ? 'bg-white text-teal-700 border border-teal-700 hover:bg-teal-50'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  const allClasses = `${baseClasses} ${sizeClasses} ${colorClasses} ${className}`;

  if (href) {
    return (
      <Link href={href as any} className={allClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={allClasses}
    >
      {children}
    </button>
  );
};

export default Button; 