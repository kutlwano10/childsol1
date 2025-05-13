// components/admin/attendance/ClassAttendance.tsx
"use client";

import Title from "@/components/ui/Title";
import { Table, Column } from "@/components/ui/table/Table";
import { DateFilter } from "@/components/ui/DateFilter";

type AttendanceRecord = {
  id: string;
  guardianName: string;
  studentName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  contactNumber: string;
};

export default function ClassAttendance() {

 
  // Sample data matching your image - 7 entries
  const attendanceData: AttendanceRecord[] = [
    {
      id: "1",
      guardianName: "Evan Ndlovu",
      studentName: "Ayanda Ndlovu",
      date: "June 25, 2025",
      checkIn: "08:15",
      checkOut: "05:15",
      contactNumber: "079 647 3746",
    },
    {
      id: "2",
      guardianName: "Evan Ndlovu",
      studentName: "Ayanda Ndlovu",
      date: "June 24, 2025",
      checkIn: "08:17",
      checkOut: "---",
      contactNumber: "079 647 3746",
    },
    {
      id: "3",
      guardianName: "Evan Ndlovu",
      studentName: "Ayanda Ndlovu",
      date: "June 23, 2025",
      checkIn: "08:20",
      checkOut: "05:00",
      contactNumber: "079 647 3746",
    },
    {
      id: "4",
      guardianName: "Evan Ndlovu",
      studentName: "Ayanda Ndlovu",
      date: "June 23, 2025",
      checkIn: "08:20",
      checkOut: "05:00",
      contactNumber: "079 647 3746",
    },
    {
      id: "5",
      guardianName: "Evan Ndlovu",
      studentName: "Ayanda Ndlovu",
      date: "June 23, 2025",
      checkIn: "08:20",
      checkOut: "05:00",
      contactNumber: "079 647 3746",
    },
    {
      id: "6",
      guardianName: "Evan Ndlovu",
      studentName: "Ayanda Ndlovu",
      date: "June 23, 2025",
      checkIn: "08:20",
      checkOut: "05:00",
      contactNumber: "079 647 3746",
    },
    {
      id: "7",
      guardianName: "Evan Ndlovu",
      studentName: "Ayanda Ndlovu",
      date: "June 23, 2025",
      checkIn: "08:20",
      checkOut: "05:00",
      contactNumber: "079 647 3746",
    },
  ];

  const columns: Column<AttendanceRecord>[] = [
    {
      key: "guardianName",
      header: "Name of Tearcher",
    },
    {
      key: "date",
      header: "Date",
    },
    {
      key: "checkIn",
      header: "Check-in",
    },
    {
      key: "checkOut",
      header: "Check-out",
    },
    {
      key: "contactNumber",
      header: "Contact number",
    },
    
  ];

  return (
    <div className="space-y-10">
      <div className="p-4 bg-white rounded-2xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <Title level={5} className="">
            Attendance History
          </Title>

          

          <div className="flex space-x-2">
            <button className="bg-orange-100 text-orange-500 px-4 py-1 font-medium rounded-full">
              Present
            </button>
            <button className="bg-orange-400 text-white px-4 py-1 font-medium rounded-full">
              Absent
            </button>
          </div>

          <DateFilter />
        </div>

        <Table data={attendanceData} columns={columns} className="w-full" />

        {/* Pagination controls */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <button className="px-3 py-1   hover:bg-gray-50 flex items-center gap-1">
            <span>Previous</span>
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`px-3 py-1   ${
                page === 1 ? "text-secondary" : "hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1   hover:bg-gray-50 flex items-center gap-1">
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
