import React, { ReactNode, HTMLAttributes } from 'react';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  variant?: 'info' | 'success' | 'warning' | 'danger';
  className?: string;
}

export default function Alert({
  children,
  title,
  variant = 'info',
  className = '',
  ...props
}: AlertProps) {
    
  const variantClasses: Record<string, string> = {
    info: 'bg-[var(--color-primary-light)] bg-opacity-10 border-[var(--color-primary)]',
    success: 'bg-[var(--color-success)] bg-opacity-10 border-[var(--color-success)]',
    warning: 'bg-[var(--color-warning)] bg-opacity-10 border-[var(--color-warning)]',
    danger: 'bg-[var(--color-danger)] bg-opacity-10 border-[var(--color-danger)]',
  };

  const titleColorClasses: Record<string, string> = {
    info: 'text-[var(--color-primary-dark)]',
    success: 'text-[var(--color-success)]',
    warning: 'text-[var(--color-warning)]',
    danger: 'text-[var(--color-danger)]',
  };

  return (
    <div 
      className={`
        ${variantClasses[variant]}
        p-4 rounded-md border-l-4
        ${className}
      `}
      {...props}
    >
      {title && (
        <h4 className={`font-medium mb-1 ${titleColorClasses[variant]}`}>
          {title}
        </h4>
      )}
      <div className="text-[var(--color-text)]">{children}</div>
    </div>
  );
}