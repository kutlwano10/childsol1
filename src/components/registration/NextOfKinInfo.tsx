import React, { useState, FormEvent } from "react";
import Form from "../ui/Form";
import { ParentInfo } from "@/interfaces/registration/registration";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";

interface ParentInfoProps {
  initialData?: Partial<ParentInfo>;
  onChange: (data: Partial<ParentInfo>) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function NextOfKinInfo({
  initialData = {},
  onChange,
  onPrevious,
  onNext,
}: ParentInfoProps) {
  const [parentInfo, setParentInfo] =
    useState<Partial<ParentInfo>>(initialData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(parentInfo);
    onNext();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInfo = { ...parentInfo, [name]: value };
    setParentInfo(updatedInfo);
    onChange(updatedInfo);
  };

  return (
    <Form
      className="px-8"
      onSubmit={handleSubmit}
      title="Other Information"
      step={3}
      totalSteps={5}
      showStepIndicator={true}
      showNavigation={true}
      nextButtonText="Next Step"
      onPrevious={onPrevious}
    >
      <div className="max-w-md  mx-auto pb-[20%]" >
          <FormField className="" label="Next Full Name" required>
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
          <FormField label="Contact Number" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.cellNumber}
              onChange={handleInputChange}
              placeholder="Next of Kin Contact Number"
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
          <FormField label="" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Persons authorized to collect the Child"
            />
          </FormField>
          <FormField label="" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Any Special Instructions"
            />
          </FormField>
          <FormField label="" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="How did You know about us?"
            />
          </FormField>
      </div>
    </Form>
  );
}