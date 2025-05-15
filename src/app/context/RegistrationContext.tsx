"use client";

import { FormData } from "@/interfaces/registration/registration";
import React, { createContext, useContext, useState } from "react";


interface RegistrationContextType {
  currentStep: number;
  formData: FormData;
  isLoading: boolean; // Add this
  setCurrentStep: (step: number) => void;
  updateFormData:  <K extends keyof FormData>(key: K, data: Partial<FormData[K]>) => void;
  setIsLoading: (loading: boolean) => void; // Add this
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export function RegistrationProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(false); // Add this

  const updateFormData = <K extends keyof FormData>(key: K, data: Partial<FormData[K]>) => {
  setFormData(prev => ({ 
    ...prev, 
    [key]: { ...prev[key], ...data } 
  }));
};

  return (
    <RegistrationContext.Provider value={{ 
      currentStep, 
      formData, 
      isLoading,
      setCurrentStep, 
      updateFormData,
      setIsLoading
    }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error(
      "useRegistration must be used within a RegistrationProvider"
    );
  }
  return context;
}
