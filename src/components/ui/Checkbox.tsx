import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  label?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
  name,
  disabled = false,
  className = '',
  ...props
}: CheckboxProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-4 w-4 rounded border-gray-300 text-[var(--color-secondary)] 
                  focus:ring-[var(--color-secondary)] cursor-pointer"
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="ml-2 block text-sm text-[var(--color-text)] cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
}