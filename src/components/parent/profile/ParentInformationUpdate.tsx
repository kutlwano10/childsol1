import React, { useState, useEffect } from "react";
import Title from "@/components/ui/Title";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import { ChildInfo } from "@/interfaces/registration/registration";
import Button from "@/components/ui/ButtonUi";
import FileUpload from "@/components/ui/FileUpload";

type FormType = 'mother' | 'father';

export default function ParentInformationUpdate() {
  const [childInfo, setChildInfo] = useState<Partial<ChildInfo>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [currentForm, setCurrentForm] = useState<FormType>('mother');

  useEffect(() => {
    const loadData = async () => {
      try {
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

  const handleFileChange = (name: string) => (file: File | null) => {
    const updatedInfo = { ...childInfo, [name]: file };
    setChildInfo(updatedInfo);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus("saving");

    try {
      console.log("Saving data:", childInfo);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSaveStatus("success");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (error) {
      console.error("Save failed", error);
      setSaveStatus("error");
    }
  };

  const handleNextClick = () => {
    setCurrentForm('father');
  };

  const handleBackClick = () => {
    setCurrentForm('mother');
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading Parent information...</div>;
  }

  const renderForm = () => {
    const isMotherForm = currentForm === 'mother';
    const title = isMotherForm ? "Mother's Information" : "Father's Information";
    const placeholderPrefix = isMotherForm ? "Mother's" : "Father's";

    return (
      <div className="w-full">
        <Title level={4} className="pb-8 font-semibold">
          {title}
        </Title>
        <Form onSubmit={handleSubmit}>
          <div className="flex w-full mx-auto justify-center py-8 gap-20">
            {/* Left Column */}
            <div className="flex-1 max-w-md flex flex-col space-y-4">
              <FormField label="">
                <Input
                  name="fullName"
                  value={childInfo.fullName || ""}
                  onChange={handleInputChange}
                  placeholder={`${placeholderPrefix} name`}
                />
              </FormField>

              <FormField label="">
                <Input
                  name="fullName"
                  value={childInfo.fullName || ""}
                  onChange={handleInputChange}
                  placeholder={`${placeholderPrefix} Surname`}
                />
              </FormField>

              <FormField label="">
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={childInfo.dateOfBirth || ""}
                  onChange={handleInputChange}
                  placeholder={`${placeholderPrefix} Date of Birth`}
                />
              </FormField>

              <FormField label="">
                <Input
                  name="passportNumber"
                  value={childInfo.passportNumber || ""}
                  onChange={handleInputChange}
                  placeholder="Enter ID/Passport number"
                />
              </FormField>

              <FormField label="">
                <Input
                  name="homeLanguage"
                  value={childInfo.homeLanguage || ""}
                  onChange={handleInputChange}
                  placeholder="Enter home language"
                />
              </FormField>

              <FormField label={`Please Upload the ${placeholderPrefix} Passport/ID`}>
                <FileUpload
                  id="medicalAidCard"
                  name="medicalAidCard"
                  onChange={handleFileChange("medicalAidCard")}
                  accept="image/*,application/pdf"
                />
              </FormField>

              <FormField label="">
                <Input
                  name="medicalConditions"
                  value={childInfo.medicalConditions || ""}
                  onChange={() => handleTextAreaChange}
                  className="w-full"
                  placeholder={`${placeholderPrefix} Cell Number`}
                />
              </FormField>

              <FormField label="">
                <Input
                  name="medicalConditions"
                  value={childInfo.medicalConditions || ""}
                  onChange={() => handleTextAreaChange}
                  className="w-full"
                  placeholder={`${placeholderPrefix} Email Address`}
                />
              </FormField>
            </div>

            {/* Right Column */}
            <div className="flex-1 max-w-md flex flex-col space-y-4">
              <FormField label="">
                <Input
                  name="allergies"
                  value={childInfo.allergies || ""}
                  onChange={() => handleTextAreaChange}
                  className="w-full rounded-lg"
                  placeholder={`${placeholderPrefix} Alternative email address`}
                />
              </FormField>

              <FormField label="">
                <Input
                  name="chronicConditions"
                  value={childInfo.chronicCondition || ""}
                  onChange={() => handleTextAreaChange}
                  className="w-full"
                  placeholder={`${placeholderPrefix} Company of employment`}
                />
              </FormField>

              <FormField label="">
                <Input
                  name="medicalConditions"
                  value={childInfo.medicalConditions || ""}
                  onChange={() => handleTextAreaChange}
                  className="w-full"
                  placeholder={`${placeholderPrefix} Position`}
                />
              </FormField>

              <FormField label="">
                <Input
                  name="medicalConditions"
                  value={childInfo.medicalConditions || ""}
                  onChange={() => handleTextAreaChange}
                  className="w-full"
                  placeholder={`${placeholderPrefix} Physical Address`}
                />
              </FormField>

              <FormField label="">
                <Input
                  name="medicalConditions"
                  value={childInfo.medicalConditions || ""}
                  onChange={() => handleTextAreaChange}
                  className="w-full"
                  placeholder={`${placeholderPrefix} Medical Aid`}
                />
              </FormField>

              {isMotherForm && (
                <FormField label="">
                  <Input
                    name="medicalConditions"
                    value={childInfo.medicalConditions || ""}
                    onChange={() => handleTextAreaChange}
                    className="w-full"
                    placeholder="Father's Name"
                  />
                </FormField>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            {saveStatus === "success" && (
              <span className="text-green-600">Changes saved successfully!</span>
            )}
            {saveStatus === "error" && (
              <span className="text-red-600">Failed to save changes</span>
            )}
            
            {!isMotherForm && (
              <Button 
                onClick={handleBackClick}
                className="text-orange-400 hover:text-white hover:bg-orange-400 border-orange-400" 
                variant="outline"
              >
                Back
              </Button>
            )}
            
            <Button
              type="submit"
              disabled={saveStatus === "saving"}
              className="px-6 py-2 text-white rounded disabled:bg-gray-400"
            >
              {saveStatus === "saving" ? "Updating..." : "Update"}
            </Button>
            
            {isMotherForm && (
              <Button 
                onClick={handleNextClick}
                className="text-orange-400 hover:text-white hover:bg-orange-400 border-orange-400" 
                variant="outline"
              >
                Next
              </Button>
            )}
          </div>
        </Form>
      </div>
    );
  };

  return renderForm();
}
