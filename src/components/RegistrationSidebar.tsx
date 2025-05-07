
'use client';

import Image from 'next/image';

const steps = [
  "1. Child’s Information",
  "2. Parent’s Information",
  "3. Other Information",
  "(i) Declaration and Inder",
  "Accept Conditions of Registration",
];

export default function RegistrationSidebar() {
  return (
    <aside className="fixed rounded-2xl h-[calc(100vh-64px)] w-[346px] bg-[var(--color-primary)] text-white flex flex-col p-12 top-8 left-8">
  {/* Logo */}
  <div className="mb-8">
    <div className="bg-white rounded-3xl w-20  shadow-md">
      <Image className='object-contain w-full h-full' src="/childsol.png" alt="ChildSol Logo" width={85} height={85} />
    </div>
  </div>

  {/* Heading */}
  <h2 className="text-3xl font-semibold mb-8 text-white">Get started</h2>

  {/* Steps */}
  <ol className="flex flex-col gap-6 w-full text-left">
    {steps.map((step, index) => (
      <li
        key={index}
        className={`flex items-center gap-3 ${
          index === 0 ? 'text-white ' : 'text-[var(--color-gray-200)]'
        }`}
      >
        <span className="w-5 h-5 border-2 rounded-full flex-shrink-0" />
        <span className="leading-tight  text-lg py-2">{step}</span>
      </li>
    ))}
  </ol>
</aside>
  );
}
