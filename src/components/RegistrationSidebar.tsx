// components/RegistrationSidebar.tsx
'use client';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useRegistration } from '@/app/context/RegistrationContext';

const steps = [
  { id: 1, label: "1. Child's Information" },
  { id: 2, label: "2. Parent's Information" },
  { id: 3, label: "3. Next of Kin Information" },
  { id: 4, label: "4. Declaration and Indemnity" },
  { id: 5, label: "5. Conditions of Registration" },
];

export default function RegistrationSidebar() {
  const { currentStep } = useRegistration();

  return (
    <aside className="fixed rounded-2xl h-[calc(100vh-64px)] w-[346px] bg-[var(--color-primary)] text-white flex flex-col p-12 top-8 left-8">
      {/* Logo */}
      <div className="mb-8">
        <div className="bg-white rounded-3xl w-20 shadow-md">
          <Image 
            className='object-contain w-full h-full' 
            src="/childsol.png" 
            alt="ChildSol Logo" 
            width={85} 
            height={85} 
          />
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-8 text-white">Get started</h2>

      {/* Steps */}
      <ol className="flex flex-col gap-6 w-full text-left">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          
          return (
            <li
              key={step.id}
              className={`flex items-center gap-3 ${
                isCompleted || isCurrent ? 'text-white' : 'text-[var(--color-gray-200)]'
              }`}
            >
              <span className={`
                w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                ${isCompleted ? 'bg-white' : 'border-2'}
                ${isCurrent ? 'border-white bg-white' : 'border-white'}
              `}>
                {isCompleted ? (
                  <Check className="w-4 h-4 text-[var(--color-primary)]" />
                ) : isCurrent ? (
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                ) : null}
              </span>
              <span className={`leading-tight text-lg py-2 ${
                isCurrent ? 'font-medium' : ''
              }`}>
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}