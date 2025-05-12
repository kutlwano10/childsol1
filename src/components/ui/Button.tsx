'use client'

import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  ...props
}: ButtonProps) {
  // Define variant classes based on the design
  const variantClasses: Record<string, string> = {
    primary: 'bg-[var(--color-secondary)] text-white hover:brightness-105',
    secondary: 'bg-[var(--color-primary)] text-white hover:brightness-105',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:bg-opacity-10',
    text: 'bg-transparent text-[var(--color-secondary)] hover:underline',
  };

  // Define size classes
  const sizeClasses: Record<string, string> = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant] || variantClasses.primary}
        ${sizeClasses[size] || sizeClasses.md}
        ${fullWidth ? 'w-[170px] h-[48px]' : ''}
        rounded-full transition-all duration-200
        font-medium whitespace-nowrap
        flex items-center justify-center
        ${icon ? 'gap-2' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}