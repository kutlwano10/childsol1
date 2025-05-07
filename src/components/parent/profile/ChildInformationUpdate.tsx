import React, { useState, useEffect } from "react";

import Title from "@/components/ui/Title";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import RadioGroup from "@/components/ui/RadioGroup";
import Checkbox from "@/components/ui/Checkbox";

import { ChildInfo } from "@/interfaces/registration/registration";
import Button from "@/components/ui/Button";

export default function ChildInformationUpdate() {
  // Initialize with empty data
  const [childInfo, setChildInfo] = useState<Partial<ChildInfo>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "success" | "error"
  >("idle");

  // Load initial data (simulating API call)
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate API call - replace with your actual data fetching
        const dummyData: Partial<ChildInfo> = {
          fullName: "John Doe",
          dateOfBirth: "2018-05-15",
          homeLanguage: "English",
          campus: "blue-hills",
          diagnoses: [],
          enrolledServices: ["Aftercare"],
        };
        setChildInfo(dummyData);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChildInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setChildInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setChildInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    name: keyof ChildInfo,
    value: string,
    isChecked: boolean
  ) => {
    setChildInfo((prev) => {
      const currentValues = prev[name]
        ? (prev[name] as string[]).filter((v) => v !== value)
        : [];
      const updatedValues = isChecked
        ? [...currentValues, value]
        : currentValues;
      return { ...prev, [name]: updatedValues };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus("saving");

    try {
      // Simulate API save - replace with your actual save logic
      console.log("Saving data:", childInfo);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (error) {
      console.error("Save failed", error);
      setSaveStatus("error");
    }
  };

  // Options data
  const campusOptions = [
    { value: "blue-hills", label: "Blue Hills Campus" },
    { value: "country-view", label: "Country View Campus" },
    { value: "rhodesfield", label: "Rhodesfield Campus" },
    { value: "vorna-valley", label: "Vorna Valley Campus" },
  ];

  const conditionsList = [
    "ADHD",
    "Chicken Pox",
    "Autism",
    "Measles",
    "Speech Impaired",
    "Mumps",
    "None of the above",
  ];

  const staysWithOptions = [
    "Both Parents",
    "Mother Only",
    "Father Only",
    "Guardian",
  ];

  const servicesOptions = [
    "Aftercare",
    "Transportation",
    "Extra Lessons",
    "Sports Program",
  ];

  if (isLoading) {
    return <div className="p-8 text-center">Loading child information...</div>;
  }

  return (
    <div className="w-full">
      <Title level={5} className="pb-8 font-semibold">
        Child Information
      </Title>
      <Form onSubmit={handleSubmit}>
        <div className="flex w-full py-8 gap-20">
          {/* Left Column */}
          <div className="flex-1 flex flex-col space-y-4">
            <FormField label="Full Name" required>
              <Input
                name="fullName"
                value={childInfo.fullName || ""}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
            </FormField>

            <FormField label="Date of Birth" required>
              <Input
                type="date"
                name="dateOfBirth"
                value={childInfo.dateOfBirth || ""}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField label="ID/Passport Number">
              <Input
                name="passportNumber"
                value={childInfo.passportNumber || ""}
                onChange={handleInputChange}
                placeholder="Enter ID/Passport number"
              />
            </FormField>

            <FormField label="Home Language">
              <Input
                name="homeLanguage"
                value={childInfo.homeLanguage || ""}
                onChange={handleInputChange}
                placeholder="Enter home language"
              />
            </FormField>

            <FormField label="Campus" required>
              <RadioGroup
                name="campus"
                options={campusOptions}
                selectedValue={childInfo.campus || ""}
                onChange={(value) => handleRadioChange("campus", value)}
                className="grid grid-cols-2 gap-4"
              />
            </FormField>

            <FormField label="Medical Conditions">
              <Input
                name="medicalConditions"
                value={childInfo.medicalConditions || ""}
                onChange={() => handleTextAreaChange}
                className="w-full"
                placeholder="List any medical conditions"
              />
            </FormField>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4">
            <FormField label="Allergies">
              <Input
                name="allergies"
                value={childInfo.allergies || ""}
                onChange={() => handleTextAreaChange}
                className="w-full rounded-lg"
                placeholder="List any allergies"
              />
            </FormField>

            <FormField label="Chronic Conditions">
              <Input
                name="chronicConditions"
                value={childInfo.chronicCondition || ""}
                onChange={() => handleTextAreaChange}
                className="w-full "
                placeholder="List any chronic conditions"
              />
            </FormField>

            <FormField label="Diagnoses">
              <div className="grid grid-cols-2 gap-4">
                {conditionsList.map((condition) => (
                  <Checkbox
                    key={condition}
                    label={condition}
                    checked={childInfo.diagnoses?.includes(condition) || false}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "diagnoses",
                        condition,
                        e.target.checked
                      )
                    }
                  />
                ))}
              </div>
            </FormField>

            <FormField label="Child Stays With">
              <div className="grid grid-cols-2 gap-3">
                {staysWithOptions.map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="staysWith"
                      value={option}
                      checked={childInfo.staysWith === option}
                      onChange={() => handleRadioChange("staysWith", option)}
                      className="h-4 w-4"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </FormField>

            <FormField label="Services Enrolled">
              <div className="grid grid-cols-2 gap-3">
                {servicesOptions.map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={
                        childInfo.enrolledServices?.includes(service) || false
                      }
                      onChange={(e) =>
                        handleCheckboxChange(
                          "enrolledServices",
                          service,
                          e.target.checked
                        )
                      }
                      className="h-4 w-4"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </FormField>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          {saveStatus === "success" && (
            <span className="text-green-600">Changes saved successfully!</span>
          )}
          {saveStatus === "error" && (
            <span className="text-red-600">Failed to save changes</span>
          )}
          <Button
            type="submit"
            disabled={saveStatus === "saving"}
            className="px-6 py-2  text-white rounded  disabled:bg-gray-400"
          >
            {saveStatus === "saving" ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
