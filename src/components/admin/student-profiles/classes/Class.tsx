"use client";

import React, { useState } from "react";
import ClassTable from "./ClassTable";
import WaitingListTable from "./WaitingListTable";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { ArchiveIcon } from "lucide-react";
import CreateProfileForm from "./CreateProfileForm";

export default function Class() {
  const [activeTab, setActiveTab] = useState<"classes" | "waitingList">(
    "classes"
  );
  const [showModal, setShowModal] = useState(false)

  const isClassesTab = activeTab === "classes";

  return (
    <div>
      <CreateProfileForm showModal={showModal} setShowModal={setShowModal} />
      <div className="flex py-8 justify-between items-center">
        {/* Dynamic Title */}
        <Title level={1}>{isClassesTab ? "2-6 Years Class" : "Waiting List"}</Title>

        {/* Toggle Buttons */}
        <div className="bg-[#E6EDF5] gap-2 justify-center flex p-1 rounded-4xl">
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
            onClick={() => setActiveTab("waitingList")}
          >
            Waiting List
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
                    <ArchiveIcon />
                  </Button>
                  <Button onClick={()=> setShowModal(true)} type="button" variant="primary">
                    Create Profile
                  </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Render based on active tab */}
      {isClassesTab ? <ClassTable /> : <WaitingListTable />}
    </div>
  );
}
