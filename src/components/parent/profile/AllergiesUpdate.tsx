import React, { useState, useEffect } from "react";

import Title from "@/components/ui/Title";
import Form from "@/components/ui/Form";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import { ChildInfo } from "@/interfaces/registration/registration";
import Button from "@/components/ui/ButtonUi";


export default function AllergiesUpdate() {
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

  if (isLoading) {
    return <div className="p-8 text-center">Loading child information...</div>;
  }

  return (
    <div className="w-full">
      <Title level={4} className="pb-8 font-semibold">
        Allergies
      </Title>
      <Form onSubmit={handleSubmit}>
        <div className="flex mx-auto justify-center w-full py-8 gap-20">
          {/* Left Column */}
          <div className="flex-1 max-w-md flex flex-col space-y-4">
            <FormField label="">
              <Input
                name="passportNumber"
                value={childInfo.passportNumber || ""}
                onChange={handleInputChange}
                placeholder="Peanuts"
              />
            </FormField>

            <FormField label="">
              <Input
                name="passportNumber"
                value={childInfo.passportNumber || ""}
                onChange={handleInputChange}
                placeholder="Milk"
              />
            </FormField>

            <FormField label="">
              <Input
                name="passportNumber"
                value={childInfo.passportNumber || ""}
                onChange={handleInputChange}
                placeholder="Fish"
              />
            </FormField>

            <Button variant="text"> + Add Item</Button>
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
            {saveStatus === "saving" ? "Updating..." : "Update"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
