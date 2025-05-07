"use client";

import React from "react";
import RegistrationStats from "./RegistrationStats";
import DeregistrationReasons from "./DeregistrationReasons";
import RegistrationPieChart from "./RegistractionPieChart";
import DeregistrationsTable from "./DeregistrationTable";
import { useSearchParams } from "next/navigation";


const SCHOOL_DATA = {
  "Blue Hills Campus": {
    registrationData: [
      { month: "Jan", registrations: 120, deregistrations: 80 },
      { month: "Feb", registrations: 150, deregistrations: 90 },

      // ... more data for Blue Hills
    ],
    deregistrationReasons: [
      { reason: "Education", count: 300 },
      { reason: "Service", count: 250 },
      { reason: "Food", count: 200 },
      { reason: "Graduates", count: 150 },
      { reason: "Communi...", count: 100 },
      { reason: "Saffey", count: 50 },
    ],
  },

  "Green Valley Campus": {
    registrationData: [
      { month: "Jan", registrations: 120, deregistrations: 80 },
      { month: "Feb", registrations: 150, deregistrations: 90 },
      { month: "Mar", registrations: 180, deregistrations: 70 },
      { month: "Apr", registrations: 200, deregistrations: 60 },
      { month: "May", registrations: 170, deregistrations: 50 },
      { month: "Jun", registrations: 190, deregistrations: 80 },
      { month: "Jul", registrations: 210, deregistrations: 90 },
      { month: "Aug", registrations: 230, deregistrations: 100 },
      { month: "Sep", registrations: 220, deregistrations: 110 },
      { month: "Oct", registrations: 240, deregistrations: 120 },
      { month: "Nov", registrations: 260, deregistrations: 130 },
      { month: "Dec", registrations: 280, deregistrations: 140 },
      // ... different data for Green Valley
    ],

    deregistrationReasons: [
      { reason: "Education", count: 300 },
      { reason: "Service", count: 250 },
      { reason: "Food", count: 200 },
      { reason: "Graduates", count: 150 },
      { reason: "Communi...", count: 100 },
      { reason: "Saffey", count: 50 },
    ],
  },
};

export default function RegistrationsPage() {

  const searchParams = useSearchParams()
  const currentSchool = searchParams.get("school") || "Blue Hills Campus"

  const schoolData = SCHOOL_DATA[currentSchool as keyof typeof SCHOOL_DATA] || SCHOOL_DATA["Blue Hills Campus"]
 

  return (
    <>
      <div className="space-y-12">
        <div className=" flex h-full gap-12 flex-col md:flex-row">
          {/* LEFT */}

          <div className="w-full  lg:w-2/2">
            <RegistrationStats data={schoolData.registrationData} />
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-1/3">
            <RegistrationPieChart registered={775} deregistered={725} />
          </div>
        </div>

        <div className=" flex gap-12 flex-col md:flex-row">
          {/* LEFT */}
          <div className="w-full space-y-12 lg:w-2/2">
            <DeregistrationReasons data={schoolData.deregistrationReasons} />
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-1/3">
            <DeregistrationsTable
              totalRegistrations={9700}
              deregistrationData={{
                education: 40,
                service: 40,
                food: 40,
                graduates: 40,
                communication: 40,
                safety: 40,
                other: 40,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
