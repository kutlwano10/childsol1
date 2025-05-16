import React, { InputHTMLAttributes } from 'react';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  id,
  name,
  required = false,
  disabled = false,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-[var(--color-text)] font-medium"
        >
          {label} {required && <span className="text-[var(--color-danger)]">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`
          w-full px-4 py-3 
          bg-white
          border border-[var(--color-gray-300)]
          text-[--color-text-light] rounded-2xl
          focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]
          focus:border-[var(--color-secondary)]
          transition-all duration-200
          ${error ? 'border-[var(--color-danger)] focus:ring-[var(--color-danger)]' : ''}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-[var(--color-danger)]">{error}</p>}
    </div>
  );
}