import React, { useState, FormEvent } from "react";
import Form from "../ui/Form";
import { ParentInfo } from "@/interfaces/registration/registration";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import { useRegistration } from "@/app/context/RegistrationContext";

interface ParentInfoProps {
  initialData?: Partial<ParentInfo>;
  onChange: (data: Partial<ParentInfo>) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Declaration({
  initialData = {},
  onChange,
  onPrevious,
  onNext,
}: ParentInfoProps) {
  const [parentInfo, setParentInfo] =
    useState<Partial<ParentInfo>>(initialData);

   const { setIsLoading } = useRegistration(); // Get setIsLoading from context
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      try {
        // Show loading state
        setIsLoading(true);
        
        // Simulate API call or validation (remove in production)
        await new Promise(resolve => setTimeout(resolve, 800));
        
        onChange(parentInfo);
        onNext();
      } catch (error) {
        console.error('Form submission error:', error);
        // Handle error if needed
      } finally {
        // Hide loading state
        setIsLoading(false);
      }
    };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInfo = { ...parentInfo, [name]: value };
    setParentInfo(updatedInfo);
    onChange(updatedInfo);
  };

  return (
    <Form
      className="px-8 "
      onSubmit={handleSubmit}
      title="(i) Declaration and Indemnity"
      step={4}
      totalSteps={5}
      showStepIndicator={true}
      showNavigation={true}
      nextButtonText="Next Step"
      onPrevious={onPrevious}
    >
      <div className="legal-agreement text-sm space-y-4 p-4">
        <ol className="list-decimal pl-5 space-y-4 [&>li]:mt-3">
          <li>
            I Grant permission for my child to participate in all the Pre-school
            activities, which form part of the daily routine.
          </li>

          <li>
            Agree to pay the school fees on or before the 1st day of every
            month. Even if I do not take my child to school for any reason
            whatsoever, I acknowledge that I should still make payment of school
            fees on or before the 1st day of every month. I further acknowledge
            that school fees are payable every month, including school holidays
            and the month of December. I understand that should I wish to take
            my child to another preschool after paying fees, I shall not be
            refunded.
          </li>

          <li>
            Declare that I shall not hold ChildSol or any representative/staff
            member liable or responsible for any injury to my child/children or
            any damage, loss, or theft of his/hers/their belongings, or for any
            other unfortunate event that may occur while in the care of, or on
            the property where ChildSol operates, including while participating
            in sporting or extra-mural activities and tours.
          </li>

          <li>
            Acknowledge that the Pre-school reserves the right to seek medical
            assistance for an injured child, although every effort will be made
            to contact the parent. As the parent/guardian, I will be liable for
            any costs resulting from any medical assistance sought.
          </li>

          <li>
            Agree to abide by and be contractually bound by the rules of
            ChildSol as per the prospectus, herein attached as Annexure A. I
            also accept that this declaration and general indemnity shall remain
            in force for the full duration of my child&apos;s enrollment at ChildSol.
          </li>

          <li>
            Understand that all information supplied to ChildSol will be kept in
            confidence and that all the information supplied on this form is
            true and correct.
          </li>

          <li>
            Confirm that the information provided herein is true and that no
            falsehood or misrepresentation has been made willingly or otherwise.
            ChildSol reserves its rights to rescind or set aside this Contract
            should any falsehood or misrepresentation come to light and take
            whatever necessary legal steps to recover any loss incurred.
          </li>

          <li>
            Understand that ChildSol owns any information, know-how, data,
            results, inventions, photos, images, soundtracks, and any associated
            intellectual property that is made, discovered, created or invented
            by ChildSol during its activities. I further acknowledge that
            ChildSol has the exclusive right (and I hold no reservations
            whatsoever) to publish or advertise such intellectual property on
            any media platform. ChildSol shall at all times preserve the
            confidentiality of information as stipulated in [vii] above.
          </li>
        </ol>
      </div>


      

      <div className="max-w-md  mx-auto pt-22" >
      <h1 className=" text-center pb-10 font-semibold max-w-lg">To accept the Declaration and Indemnity . Enter your Full Name, Surname and ID/Password Number</h1>
          <FormField className="" label="Full Name" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
          </FormField>
          <FormField label="Surname" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Surname"
            />
          </FormField>
          <FormField label="ID/Passport Number" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="ID/Passport Number"
            />
          </FormField>
      </div>
    </Form>
  );
}
