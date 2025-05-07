"use client";

import React, { useState, FormEvent } from "react";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import RadioGroup from "@/components/ui/RadioGroup";
import FileUpload from "@/components/ui/FileUpload";

import { ParentInfo } from "@/interfaces/registration/registration";

interface ParentInfoFormProps {
    initialData? : Partial<ParentInfo> ;
    onChange : (data: Partial<ParentInfo>) => void;
    onPrevious: () => void;
    onNext: () => void;
}

export default function ParentInfoForm({initialData = {}, onChange, onPrevious, onNext} : ParentInfoFormProps) {

  const [parentInfo, setParentInfo] = useState<Partial<ParentInfo>>(initialData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(parentInfo)
    onNext()
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInfo = {...parentInfo, [name]: value}
    setParentInfo(updatedInfo)
    onChange(updatedInfo)
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedInfo = {...parentInfo, [name]: value}
    setParentInfo(updatedInfo)
    onChange(updatedInfo)
  };

 
  const handleFileChange = (name: string) => (file: File | null) => {
    const updatedInfo = {...parentInfo, [name]: file}
    setParentInfo(updatedInfo)
    onChange(updatedInfo)
  };


  return (
    <div className="overflow-y-auto">
      <Form
        className=""
        onSubmit={handleSubmit}
        title="Parent's Information"
        step={2}
        totalSteps={5}
        showStepIndicator={true}
        showNavigation={true}
        nextButtonText="Next Step"
        onPrevious={onPrevious}
      >
        <div className="max-w-md  mx-auto">
          <FormField label="Mother's Name" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Mother's Name"
            />
          </FormField>
          <FormField label="Mother's Surname" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Mother's Surname"
            />
          </FormField>
          <FormField label="Mother's Date of Birth" required>
            <Input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={parentInfo.dateOfBirth}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField label="Please upload the Mothers ID/Passport">
            <FileUpload
              id="Passport"
              name="Passport"
              onChange={handleFileChange("Passport")}
              accept="image/*,application/pdf"
            />
          </FormField>
          <FormField label="Home Language">
            <Input
              type="text"
              id="homeLanguage"
              name="homeLanguage"
              value={parentInfo.homeLanguage}
              onChange={handleInputChange}
              placeholder="Enter home language"
            />
          </FormField>
          <FormField label="Mother's Cell Number">
            <Input
              type="text"
              id="cellNumber"
              name="cellNumber"
              value={parentInfo.cellNumber}
              onChange={handleInputChange}
              placeholder="Mother's Cell Number"
            />
          </FormField>
          
          
          
        </div>
      </Form>
    </div>
  );
}
