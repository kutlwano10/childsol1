"use client";

import React, { useState } from "react";
import StudentList from "./StudentList";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";
import { Archive } from "lucide-react";
import CreateProfileForm from "../CreateProfileForm";
import { useRouter } from "next/navigation";

export default function ClassRoom() {
  const [activeTab, setActiveTab] = useState<"students" | "waitingList">(
    "students"
  );
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const isClassTab = activeTab === "students";
  return (
    <div>
      <CreateProfileForm showModal={showModal} setShowModal={setShowModal} />
      <div className="flex justify-between pb-12">
        <Title>Class A3 </Title>
        {/* Toggle Buttons */}
        <div className="bg-[#E6EDF5] gap-2 justify-center flex p-1 rounded-4xl">
          <Button
            fullWidth
            type="button"
            variant={isClassTab ? "primary" : "text"}
            onClick={() => setActiveTab("students")}
          >
            Students
          </Button>

          <Button
            fullWidth
            type="button"
            variant={!isClassTab ? "primary" : "text"}
            onClick={() => setActiveTab("waitingList")}
          >
            Waiting List
          </Button>
        </div>
        <div className="flex justify-between gap-4">
          <Button
            onClick={() =>
              router.push("/admin/student-profiles/classes/archived")
            }
            size="md"
            className=""
            type="button"
            variant="primary"
          >
            <Archive />
          </Button>

          <Button
            onClick={() => setShowModal(true)}
            type="button"
            variant="primary"
          >
            Create Profile
          </Button>
        </div>
      </div>
      <StudentList />
    </div>
  );
}
