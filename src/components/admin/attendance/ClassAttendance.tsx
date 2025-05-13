'use client';
import { useRouter } from 'next/navigation';
import Title from '@/components/ui/Title';
import { Table, Column } from '@/components/ui/table/Table';
import { DateFilter } from '@/components/ui/DateFilter';
import Button from '@/components/ui/ButtonUi';
import { useState } from 'react';

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
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<'present' | 'absent'>('present');
 
  const isAllActiveTab = activeTab === 'present';

  // Sample data including both present and absent records
  const attendanceData: AttendanceRecord[] = [
    {
      id: '1',
      guardianName: 'Evan Ndlovu',
      studentName: 'Ayanda Ndlovu',
      date: 'June 25, 2025',
      checkIn: '08:15',
      checkOut: '05:15',
      contactNumber: '079 647 3746',
    },
    {
      id: '2',
      guardianName: 'Sarah Johnson',
      studentName: 'Michael Johnson',
      date: 'June 25, 2025',
      checkIn: '', // Absent
      checkOut: '',
      contactNumber: '079 123 4567',
    },
    {
      id: '3',
      guardianName: 'David Smith',
      studentName: 'Emma Smith',
      date: 'June 25, 2025',
      checkIn: '08:20',
      checkOut: '05:00',
      contactNumber: '079 765 4321',
    },
    {
      id: '4',
      guardianName: 'Lisa Brown',
      studentName: 'James Brown',
      date: 'June 25, 2025',
      checkIn: '', // Absent
      checkOut: '',
      contactNumber: '079 987 6543',
    },
    {
      id: '5',
      guardianName: 'Robert Wilson',
      studentName: 'Olivia Wilson',
      date: 'June 25, 2025',
      checkIn: '08:25',
      checkOut: '05:10',
      contactNumber: '079 456 7890',
    },
  ];

  // Filter data based on active tab
  const filteredData = activeTab === 'present'
    ? attendanceData.filter(record => record.checkIn !== '')
    : attendanceData.filter(record => record.checkIn === '');

  const columns: Column<AttendanceRecord>[] = [
    {
      key: 'guardianName',
      header: 'Name of Guardian',
    },
    {
      key: 'studentName',
      header: 'Name of Students',
    },
    {
      key: 'date',
      header: 'Date',
    },
    {
      key: 'checkIn',
      header: 'Check-in',
      render: (item) => item.checkIn || (activeTab === 'absent' ? 'Absent' : '---'),
    },
    {
      key: 'checkOut',
      header: 'Check-out',
      render: (item) => item.checkOut || '---',
    },
    {
      key: 'contactNumber',
      header: 'Contact number',
    },
    {
      key: 'dailyReport',
      header: 'Daily Report',
      render: () => (
        <Button 
          onClick={() => router.push('/admin/attendance/id')} 
          className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-3 py-1 rounded-full"
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div className='space-y-10'>
      <div className="p-4 bg-white rounded-2xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <Title level={5} className="">
            Attendance History
          </Title>
      
          <div className="bg-[#E6EDF5] gap-2 items-center justify-center flex p-1 rounded-4xl">
            <Button
              size='md'
              type="button"
              variant={isAllActiveTab ? "primary" : "text"}
              onClick={() => setActiveTab("present")}
            >
              Present
            </Button>
          
            <Button
              size='md'
              type="button"
              variant={!isAllActiveTab ? "primary" : "text"}
              onClick={() => setActiveTab("absent")}
            >
              Absent
            </Button>
          </div>

          <DateFilter />
        </div>
      
        <Table
          data={filteredData}
          columns={columns}
          className="w-full"
        />
      
        {/* Pagination controls */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <button className="px-3 py-1 hover:bg-gray-50 flex items-center gap-1">
            <span>Previous</span>
          </button>
          {[1, 2, 3, 4].map(page => (
            <button
              key={page}
              className={`px-3 py-1 ${page === 1 ? 'text-secondary' : 'hover:bg-gray-50'}`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 hover:bg-gray-50 flex items-center gap-1">
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}