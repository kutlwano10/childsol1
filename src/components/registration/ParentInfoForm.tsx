"use client";

import React, { useState, FormEvent } from "react";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import FileUpload from "@/components/ui/FileUpload";
import { ParentInfo } from "@/interfaces/registration/registration";
import { useRegistration } from "@/app/context/RegistrationContext";

interface ParentInfoFormProps {
    initialData? : Partial<ParentInfo> ;
    onChange : (data: Partial<ParentInfo>) => void;
    onPrevious: () => void;
    onNext: () => void;
}

export default function ParentInfoForm({initialData = {}, onChange, onPrevious, onNext} : ParentInfoFormProps) {

  const [parentInfo, setParentInfo] = useState<Partial<ParentInfo>>(initialData);

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
    const updatedInfo = {...parentInfo, [name]: value}
    setParentInfo(updatedInfo)
    onChange(updatedInfo)
  };

  // const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   const updatedInfo = {...parentInfo, [name]: value}
  //   setParentInfo(updatedInfo)
  //   onChange(updatedInfo)
  // };

 
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

          {/* Fathers information */}

          <FormField label="Father's Name" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Father's Name"
            />
          </FormField>
          <FormField label="Father's Surname" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={parentInfo.motherFullName}
              onChange={handleInputChange}
              placeholder="Father's Surname"
            />
          </FormField>
          <FormField label="Father's Date of Birth" required>
            <Input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={parentInfo.dateOfBirth}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField label="Please upload the Fathers ID/Passport">
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

          
          <FormField label="Father's Cell Number">
            <Input
              type="text"
              id="cellNumber"
              name="cellNumber"
              value={parentInfo.cellNumber}
              onChange={handleInputChange}
              placeholder="Father's Cell Number"
            />
          </FormField>

          <FormField label="Father's Marital Status">
            <Input
              type="text"
              id="homeLanguage"
              name="homeLanguage"
              value={parentInfo.homeLanguage}
              onChange={handleInputChange}
              placeholder="Father's Marital Status"
            />
          </FormField>

          <FormField label="Father's Nationality">
            <Input
              type="text"
              id="homeLanguage"
              name="homeLanguage"
              value={parentInfo.homeLanguage}
              onChange={handleInputChange}
              placeholder="Father's Nationality"
            />
          </FormField>
          

          
          
          
          
        </div>
      </Form>
    </div>
  );
}
