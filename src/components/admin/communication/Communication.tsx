"use client";

import Button from "@/components/ui/ButtonUi";
import Title from "@/components/ui/Title";
import React, { useState } from "react";
import CommunicationMessages from "./CommunicationMessages";
import CreateAnnouncement from "./CreateCommunicationModal";

export default function Communication() {
  const [activeTab, setActiveTab] = useState<"parent" | "staff">("parent");
  const [showModal, setShowModal] = useState(false);

  const isParentTab = activeTab === "parent";
  return (
    <div className="space-y-8">
      <CreateAnnouncement showModal={showModal} setShowModal={setShowModal} />
      <div className="flex justify-between items-center">
        <Title level={2}>Communication</Title>
        <div className="bg-[#E6EDF5] gap-2 justify-center flex p-1  rounded-4xl">
          <Button
            fullWidth
            type="button"
            variant={isParentTab ? "primary" : "text"}
            onClick={() => setActiveTab("parent")}
          >
            Parent
          </Button>

          <Button
            fullWidth
            type="button"
            variant={!isParentTab ? "primary" : "text"}
            onClick={() => setActiveTab("staff")}
          >
            Staff
          </Button>
        </div>

        <Button onClick={() => setShowModal(true)}>Create Announcement</Button>
      </div>

      <CommunicationMessages />
    </div>
  );
}
