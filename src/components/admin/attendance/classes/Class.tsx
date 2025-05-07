"use client";

import React, { useState } from "react";
import ClassTable from "./ClassTable";
import StaffTable from "./StaffTable";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";

export default function Class() {
  const [activeTab, setActiveTab] = useState<"classes" | "staff">(
    "classes"
  );

  const isClassesTab = activeTab === "classes";

  return (
    <div>
      <div className="flex py-8 justify-between items-center">
        {/* Dynamic Title */}
        <Title level={1}>{isClassesTab ? "2-6 Years" : "Staff"}</Title>

        {/* Toggle Buttons */}
        <div className="bg-[#E6EDF5] gap-2 justify-center flex p-1  rounded-4xl">
          <Button
            fullWidth
            type="button"
            variant={isClassesTab ? "primary" : "text"}
            onClick={() => setActiveTab("classes")}
          >
            Classes
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

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isClassesTab ? (
            <Button type="button" variant="text">
              Back
            </Button>
          ) : (
            <>
              <div className="flex gap-2">
                  <Button className="" type="button" variant="primary">
                    <ShoppingBag />
                  </Button>
                  <Button type="button" variant="primary">
                    Create Profile
                  </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Render based on active tab */}
      {isClassesTab ? <ClassTable /> : <StaffTable />}
    </div>
  );
}
