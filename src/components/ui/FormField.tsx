
import React, { ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
  label?: string;
  required?: boolean;
  className?: string;
  helpText?: string;
  error?: string;
}

export default function FormField({
  children,
  label,
  required = false,
  className = '',
  helpText,
  error,
}: FormFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-[var(--color-text-light)]">
          {label} {required && <span className="text-[var(--color-danger)]">*</span>}
        </label>
      )}
      {children}
      {helpText && <p className="mt-1 text-xs text-gray-500">{helpText}</p>}
      {error && <p className="mt-1 text-xs text-[var(--color-danger)]">{error}</p>}
    </div>
  );
}