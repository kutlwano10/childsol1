"use client";
import React, { useState } from "react";
import ChildInformationForm from "./ChildInfoForm";
import ParentInfoForm from "./ParentInfoForm";
import Declaration from "./Declaration";
import NextOfKinInfo from "./NextOfKinInfo";
import Conditions from "./Conditions";


export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {};

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ChildInformationForm
            initialData={formData}
            onChange={(data) =>
              setFormData((prev) => ({ ...prev, childInfo: data }))
            }
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <ParentInfoForm
            initialData={formData}
            onChange={(data) =>
              setFormData((prev) => ({ ...prev, parentInfo: data }))
            }
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );

        case 3:
        return (
          <NextOfKinInfo
            initialData={formData}
            onChange={(data) =>
              setFormData((prev) => ({ ...prev, ParentInfo: data }))
            }
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );

      case 4:
        return (
          <Declaration
            initialData={formData}
            onChange={(data) =>
              setFormData((prev) => ({ ...prev, ParentInfo: data }))
            }
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );

        case 5:
        return (
          <Conditions
            initialData={formData}
            onChange={(data) =>
              setFormData((prev) => ({ ...prev, ParentInfo: data }))
            }
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );

        

      default:
        return (
          <ChildInformationForm
            initialData={formData}
            onChange={(data) =>
              setFormData((prev) => ({ ...prev, childInfo: data }))
            }
            onPrevious={prevStep}
            onNext={nextStep}
          />
        );
    }
  };
  return <div>{renderStep()}</div>;
}
