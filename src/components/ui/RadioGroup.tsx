// components/ui/RadioGroup.tsx
import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function RadioGroup({
  name,
  options,
  selectedValue,
  onChange,
  className = '',
  orientation = 'vertical',
}: RadioGroupProps) {
  return (
    <div 
      className={`flex ${orientation === 'horizontal' ? 'flex-row space-x-4' : 'flex-col space-y-3'} ${className}`}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 text-[var(--color-primary)] border-gray-300 focus:ring-[var(--color-primary)]"
          />
          <label 
            htmlFor={`${name}-${option.value}`}
            className="ml-2 block text-sm font-medium text-gray-700"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}