import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function Title({ 
  children, 
  level = 1, 
  className = '' 
}: TitleProps) {
  const baseClass = 'font-semibold text-[var(--color-heading)]';
  
  // Simple size classes based on heading level
  const sizeClasses: Record<number, string> = {
    1: 'text-3xl md:text-4xl',
    2: 'text-2xl md:text-3xl',
    3: 'text-xl md:text-2xl',
    4: 'text-lg md:text-xl',
    5: 'text-base md:text-lg',
    6: 'text-sm md:text-base',
  };

  // Use simple conditional rendering for different heading levels
  if (level === 1) return <h1 className={`${baseClass} ${sizeClasses[1]} ${className}`}>{children}</h1>;
  if (level === 2) return <h2 className={`${baseClass} ${sizeClasses[2]} ${className}`}>{children}</h2>;
  if (level === 3) return <h3 className={`${baseClass} ${sizeClasses[3]} ${className}`}>{children}</h3>;
  if (level === 4) return <h4 className={`${baseClass} ${sizeClasses[4]} ${className}`}>{children}</h4>;
  if (level === 5) return <h5 className={`${baseClass} ${sizeClasses[5]} ${className}`}>{children}</h5>;
  if (level === 6) return <h6 className={`${baseClass} ${sizeClasses[6]} ${className}`}>{children}</h6>;
  
  // Default fallback to h1
  return <h1 className={`${baseClass} ${sizeClasses[1]} ${className}`}>{children}</h1>;
}