"use client";

import React from "react";
import StudentCard from "../../StudentCard";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";

export default function Archive() {
  const students = [
    {
      id: "1",
      name: "Nkosi Mag",
      gender: "Female",
      age: 5,
      school: "Blue Hills",
      parentNumber: "057 557 4848",
      isApproved: false,
      class: "A3",
    },
    {
      id: "7",
      name: "Mila Ngobese",
      gender: "Female",
      age: 5,
      school: "Blue Hills",
      parentNumber: "057 557 4848",
      isApproved: false,
      class: "A3",
    },
    {
      id: "10",
      name: "Karabo Masilo",
      gender: "Female",
      age: 5,
      school: "Blue Hills",
      parentNumber: "057 557 4848",
      isApproved: false,
      class: "A3",
    },
    {
      id: "4",
      name: "Mila Ngobese",
      gender: "Female",
      age: 5,
      class: "A3",
      isApproved: false,
    },
  ];
  return (
    <div className="space-y-8">
        <div className="flex items-center justify-between"> 
            <Title level={2}>Archived</Title>
            <Button variant="text">Back</Button>
        </div>
      <div className="space-y-4">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            classRoomNumber={student.class}
            showClassRoom={true}
            showTeacherName={true}
            showSchool={false}
            showParentNumber={false}
          />
        ))}
      </div>
    </div>
  );
}
