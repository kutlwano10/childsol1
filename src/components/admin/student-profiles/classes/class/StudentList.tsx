import React from 'react'
import StudentCard from '../../StudentCard'

export default function StudentList() {
    const students = [
        {
          id: "1",
          name: "Nkosi Mag",
          gender: "Female",
          age: 5,
          school: "Blue Hills",
          parentNumber: "057 557 4848",
          isApproved: false,
          class: 'A3',
        },
        {
          id: "7",
          name: "Mila Ngobese",
          gender: "Female",
          age: 5,
          school: "Blue Hills",
          parentNumber: "057 557 4848",
          isApproved: false,
          class: 'A3',
        },
        {
          id: "10",
          name: "Karabo Masilo",
          gender: "Female",
          age: 5,
          school: "Blue Hills",
          parentNumber: "057 557 4848",
          isApproved: false,
          class: 'A3',
        },
        {
          id: "4",
          name: "Mila Ngobese",
          gender: "Female",
          age: 5,
          class: 'A3',
          isApproved: false,
        },
      ];
    
      const teacherName = "Ms. Dlamini";
    return (
      <div className="space-y-4">
        {students.map((student) => (
          <StudentCard
          key={student.id}
          student={student}
          teacherName={teacherName}
          classRoomNumber={student.class}        
          showSchool={false}
          showParentNumber={false}
          
          
          />
        ))}
      </div>
    );
}
