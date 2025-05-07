'use client'

import { Pagination } from "@/components/ui/table/Pagination";
import { Table } from "@/components/ui/table/Table";
import Title from "@/components/ui/Title";
import { AttendanceRecord } from "@/interfaces/attendance/attendance";
import React, {useState} from "react";



const mockData: AttendanceRecord[] = [
  {
    id: '1',
    guardianName: 'Evan Ndlovu',
    date: new Date('2025-06-25'),
    checkIn: '08:15',
    checkOut: '05:15',
    className: 'CA',
    contactNumber: '079 647 3746'
  },
  {
    id: '2',
    guardianName: 'Evan Ndlovu',
    date: new Date('2025-06-24'),
    checkIn: '08:17',
    checkOut: null,
    className: 'CA',
    contactNumber: '079 647 3746'
  },
  {
    id: '3',
    guardianName: 'Evan Ndlovu',
    date: new Date('2025-06-23'),
    checkIn: '08:20',
    checkOut: '05:00',
    className: 'CA',
    contactNumber: '079 647 3746'
  },
  // Add more records as needed
];

export default function AttandanceHistoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Define columns
  const columns = [
    {
      key: 'guardianName',
      header: 'Name of Guardian',
      width: '20%',
      render: (item: AttendanceRecord) => item.guardianName
    },
    {
      key: 'date',
      header: 'Date',
      width: '20%',
      render: (item: AttendanceRecord) => formatDate(item.date)
    },
    {
      key: 'checkIn',
      header: 'Check-in',
      width: '15%',
      render: (item: AttendanceRecord) => item.checkIn
    },
    {
      key: 'checkOut',
      header: 'Check-out',
      width: '15%',
      render: (item: AttendanceRecord) => item.checkOut || '---'
    },
    {
      key: 'className',
      header: 'Class',
      width: '15%',
      render: (item: AttendanceRecord) => item.className
    },
    {
      key: 'contactNumber',
      header: 'Contact Number',
      width: '15%',
      render: (item: AttendanceRecord) => item.contactNumber
    }
  ];

  return (
    <div className=" w-full bg-white rounded-3xl  py-8">
          <div className='pl-4' >
              <Title level={6} className=" ">Attendance History</Title>
              <p className="text-gray-600 mb-6">Here you will see your attendance History.</p>
          </div>
          
          <Table
          data={currentItems}
          columns={columns}
          rowKey={(item) => item.id}
          className="min-w-full"
        />
          
          {totalPages > 1 && (
            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
  );
}
