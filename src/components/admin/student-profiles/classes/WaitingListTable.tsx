import React from "react";
import StudentCard from "../StudentCard";

export default function WaitingListTable() {
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
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          //   onApprove={handleApprove}
          //   onView={handleView}
          //   onArchive={handleArchive}
        />
      ))}
    </div>
  );
}
