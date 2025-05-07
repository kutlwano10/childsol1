'use client'
import StudentCard from "./StudentCard";
import Title from "@/components/ui/Title";
import { useRouter } from "next/navigation";
import React from "react";


export default function StudentClass() {

  const router = useRouter()
  const students = [
    {
      id: "1",
      name: "Mila Ngobese",
      gender: "Female",
      age: 5,
      school: "Blue Hills",
      parentNumber: "057 557 4848",
      isApproved: false,
    },
    {
        id: "7",
        name: "Mila Ngobese",
        gender: "Female",
        age: 5,
        school: "Blue Hills",
        parentNumber: "057 557 4848",
        isApproved: false,
      },
      {
        id: "10",
        name: "Mila Ngobese",
        gender: "Female",
        age: 5,
        school: "Blue Hills",
        parentNumber: "057 557 4848",
        isApproved: false,
      },
    
      {
        id: "4",
        name: "Mila Ngobese",
        gender: "Female",
        age: 5,
        school: "Blue Hills",
        parentNumber: "057 557 4848",
        isApproved: false,
      },
  ];
  return (
    <div className="space-y-4">
      <Title level={2}>Class</Title>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          //   onApprove={handleApprove}
            onView={()=> router.push('/staff/reports/id')}
          //   onArchive={handleArchive}
        />
      ))}
    </div>
  );
}
