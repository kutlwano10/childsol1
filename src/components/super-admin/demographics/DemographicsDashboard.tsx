"use client";
import Title from "@/components/ui/Title";
import React from "react";
import Filter from "./Filter";
import { useSearchParams } from "next/navigation";
import RegistrationsPage from "./registrations/RegistrationsPage";
import GenderPage from "./gender/GenderPage";
import ClassGradePage from "./class-allocation/ClassGradePage";
import LocationPage from "./location/LocationPage";
import MaritalStatusPage from "./marital/MaritalStatusPage";


export default function DemographicsDashboard() {
  const searchParams = useSearchParams();

  const currentTopic = searchParams.get("topic") || "registration";

  const renderComponent = () => {
    switch (currentTopic) {
      case "registration":
        return <RegistrationsPage />;
      case "gender":
        return <GenderPage />;
      case "class":
        return <ClassGradePage />;
        case "location":
        return <LocationPage />;
        case "marital":
        return <MaritalStatusPage />;
      default:
        <RegistrationsPage />;
    }
  };
  return (
    <div className="w-full">
      <div className="flex pb-12 items-center justify-between">
        <Title className="" level={2}>
          Demographics
        </Title>

        <Filter />
      </div>
      {renderComponent()}
    </div>
  );
}
