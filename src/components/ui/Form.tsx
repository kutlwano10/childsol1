import React, { ReactNode, FormEvent } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
  title?: string;
  subtitle?: string;
  step?: number;
  totalSteps?: number;
  stepDescription?: string;
  showStepIndicator?: boolean;
  showNavigation?: boolean;
  nextButtonText?: string;
  previousButtonText?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  isLoading?: boolean;
}

export default function Form({
  children,
  onSubmit,
  className = '',
  title,
  subtitle,
  step,
  totalSteps,
  showStepIndicator = false,
  showNavigation = false,
  nextButtonText = 'Next Step',
  previousButtonText = 'Previous',
  onNext,
  onPrevious,
  isLoading = false,
}: FormProps) {
  return (
    <div className={`w-full mx-auto ${className}`}>
      {/* Form header with step indicator */}
      {showStepIndicator && step !== undefined && totalSteps !== undefined && (
        <div className="mb-2 text-center text-sm text-[var(--color-primary)]">
          STEP {step}/{totalSteps}
        </div>
      )}

      {/* Form title */}
      {title && (
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          {step && <span className="mr-2">{step}.</span>}
          {title}
        </h2>
      )}

      {/* Form subtitle */}
      {subtitle && (
        <p className="text-center text-gray-600 mb-6">{subtitle}</p>
      )}

      {/* Form content */}
      <form onSubmit={onSubmit} className="space-y-4">
        {children}

        {/* Navigation buttons */}
        {showNavigation && (
          <div className="flex justify-between mt-8">
            {step && step > 1 ? (
              <button
                type="button"
                onClick={onPrevious}
                className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                ← {previousButtonText}
              </button>
            ) : (
              <div></div>
            )}
            <button
              type="submit"
              onClick={onNext}
              className="px-6 py-2 bg-[var(--color-secondary)] text-white rounded-full hover:bg-[var(--color-secondary-dark)] transition-colors flex items-center"
              disabled={isLoading}
            >
              {nextButtonText} {!isLoading && <span className="ml-1">→</span>}
              {isLoading && (
                <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}