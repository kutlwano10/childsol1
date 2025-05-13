"use client";
import React, { useState } from "react";
import ClassAttendance from "./ClassAttendance";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";
import StaffAttendance from "./StaffAttendance";

export default function Attendance() {
  const [activeTab, setActiveTab] = useState<"class" | "staff">("class");
  const isClassesTab = activeTab === "class";
  return (
    <div>
      <div className="flex items-center pb-8 justify-between">
        <Title level={2}>Attendance</Title>
        <div className="bg-[#E6EDF5] gap-4 justify-center flex p-1  rounded-4xl">
          <Button
            fullWidth
            type="button"
            variant={isClassesTab ? "primary" : "text"}
            onClick={() => setActiveTab("class")}
          >
            Class
          </Button>

          <Button
            fullWidth
            type="button"
            variant={!isClassesTab ? "primary" : "text"}
            onClick={() => setActiveTab("staff")}
          >
            Staff
          </Button>
        </div>
        <Button fullWidth variant="text">
          Back
        </Button>
      </div>
      {isClassesTab ? <ClassAttendance /> : <StaffAttendance />}
    </div>
  );
}
