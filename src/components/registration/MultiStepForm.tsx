// components/MultiStepForm.tsx
'use client';
import ChildInformationForm from "./ChildInfoForm";
import ParentInfoForm from "./ParentInfoForm";
import Declaration from "./Declaration";
import NextOfKinInfo from "./NextOfKinInfo";
import Conditions from "./Conditions";
import RegistrationCompletePage from "./RegistrationCompletePage";
import { useRegistration } from "@/app/context/RegistrationContext";

export default function MultiStepForm() {
  const { currentStep, setCurrentStep, formData, updateFormData } = useRegistration();

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ChildInformationForm
            initialData={formData.childInfo}
            onChange={(data) => updateFormData('childInfo', data)}
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <ParentInfoForm
            initialData={formData.parentInfo}
            onChange={(data) => updateFormData( 'parentInfo', data )}
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );
      case 3:
        return (
          <NextOfKinInfo
            initialData={formData.nextOfKinInfo}
            onChange={(data) => updateFormData('nextOfKinInfo', data )}
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );
      case 4:
        return (
          <Declaration
            initialData={formData.parentInfo}
            onChange={(data) => updateFormData('parentInfo', data )}
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );
      case 5:
        return (
          <Conditions
            initialData={formData.parentInfo}
            onChange={(data) => updateFormData( 'parentInfo', data )}
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );
      default:
        return <RegistrationCompletePage />;
    }
  };

  return <div>{renderStep()}</div>;
}
