'use client'

import React, { useState, FormEvent } from 'react';
import Form from '@/components/ui/Form';
import FormField from '@/components/ui/FormField';
import Input from '@/components/ui/Input';
import RadioGroup from '@/components/ui/RadioGroup';
import FileUpload from '@/components/ui/FileUpload';
import { ChildInfo } from '@/interfaces/registration/registration';

interface ChildInfoProps {
  initialData? : Partial<ChildInfo> ;
    onChange : (data: Partial<ChildInfo>) => void;
    onPrevious: () => void;
    onNext: () => void;
}


export default function ChildInformationForm({initialData = {}, onChange, onPrevious, onNext} : ChildInfoProps) {
  const [childInfo, setChildInfo] = useState<Partial<ChildInfo>>(initialData);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onChange(childInfo)
      onNext()
    };

    const handleRadioChange = (name: string, value: string) => {
      const updatedInfo = { ...childInfo, [name]: value };
      setChildInfo(updatedInfo);
      onChange(updatedInfo);
    };

  const handleCampusChange = (name : string , value: string) => {
    const updatedInfo = { ...childInfo, [name]: value };
      setChildInfo(updatedInfo);
      onChange(updatedInfo);
  };

   
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const updatedInfo = {...childInfo, [name]: value}
      setChildInfo(updatedInfo)
      onChange(updatedInfo)
    };
  
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const updatedInfo = {...childInfo, [name]: value}
      setChildInfo(updatedInfo)
      onChange(updatedInfo)
    };
  
   
  
    const handleFileChange = (name: string) => (file: File | null) => {
      const updatedInfo = {...childInfo, [name]: file}
      setChildInfo(updatedInfo)
      onChange(updatedInfo)
    };

  const campusOptions = [
    { value: 'blue-hills', label: 'Blue Hills Campus' },
    { value: 'country-view', label: 'Country View Campus' },
    { value: 'rhodesfield', label: 'Rhodesfield Campus' },
    { value: 'vorna-valley', label: 'Vorna Valley Campus' }
  ];

  const diagnosesList = [
    { value: 'adhd', label: 'ADHD' },
    { value: 'autism', label: 'Autism' },
    { value: 'speech-impaired', label: 'Speech Impaired' },
    { value: 'chicken-pox', label: 'Chicken Pox' },
    { value: 'measles', label: 'Measles' },
    { value: 'mumps', label: 'Mumps' },
    { value: 'none', label: 'None of the above' }
  ];

  return (
    <div className='overflow-y-auto'>
      <Form
      className=' '
        onSubmit={handleSubmit}
        title="Child's Information"
        step={1}
        totalSteps={5}
        showStepIndicator={true}
        showNavigation={true}
        nextButtonText="Next Step"
      >
        <div className='max-w-md  mx-auto'>
          <FormField label="Full Name" required>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={childInfo.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
            />
          </FormField>
          <FormField label="Date of Birth" required>
            <Input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={childInfo.dateOfBirth}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField label="Passport Number">
            <Input
              type="text"
              id="passportNumber"
              name="passportNumber"
              value={childInfo.passportNumber}
              onChange={handleInputChange}
              placeholder="Enter passport number"
            />
          </FormField>
          <FormField label="Home Language">
            <Input
              type="text"
              id="homeLanguage"
              name="homeLanguage"
              value={childInfo.homeLanguage}
              onChange={handleInputChange}
              placeholder="Enter home language"
            />
          </FormField>
          <FormField className='' label="Campus you would like to enroll your child" required>
            <RadioGroup
              name="campus"
              options={campusOptions}
              selectedValue={childInfo.campus || ''}
              onChange={(value) => handleCampusChange("select Campus",value)}
              className='grid grid-cols-2'
            />
          </FormField>
          <FormField >
            <textarea
              id="medicalConditions"
              name="medicalConditions"
              value={childInfo.medicalConditions}
              onChange={handleTextAreaChange}
              placeholder="List any medical conditions the child might have?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
              rows={3}
            />
          </FormField>
          <FormField >
            <textarea
              id="allergies"
              name="allergies"
              value={childInfo.allergies}
              onChange={handleTextAreaChange}
              placeholder="List any allergies the child might have?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
              rows={3}
            />
          </FormField>
          <FormField label="Has your child had or been diagnosed with of any the following?">
            <RadioGroup
              name="diagnoses"
              options={diagnosesList}
              selectedValue={childInfo.diagnoses || ''}
              onChange={(value) => handleRadioChange("Diagnoses", value)}
              className='grid grid-cols-2'
            />
          </FormField>
          <FormField label="Attach medical aid card">
            <FileUpload
              id="medicalAidCard"
              name="medicalAidCard"
              onChange={handleFileChange('medicalAidCard')}
              accept="image/*,application/pdf"
            />
          </FormField>
          <div className='w-full'>
            <FormField label="Attach immunization card">
              <FileUpload
                id="immunizationCard"
                name="immunizationCard"
                onChange={handleFileChange('immunizationCard')}
                accept="image/*,application/pdf"
                className='w-full flex'
              />
            </FormField>
          </div>
        </div>
      </Form>
    </div>
  );
}