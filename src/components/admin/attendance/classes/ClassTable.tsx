// components/admin/attendance/ClassTable.tsx
'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Table, Column } from '@/components/ui/table/Table';

type ClassItem = {
  id: string;
  staffName: string;
  className: string;
  school: string;
  numberOfStudents: number;
};

export default function ClassTable() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const grade = searchParams.get('grade');

  const classData: ClassItem[] = [
    { id: '1', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35 },
    { id: '2', staffName: 'Mrs Leea', className: 'CB', school: 'Blue Hills', numberOfStudents: 20 },
  ];

  const handleClassSelect = (classId: string) => {
    router.push(`${pathname}?view=attendance&grade=${grade}&class=${classId}`);
  };

  const columns: Column<ClassItem>[] = [
    {
      key: 'staffName',
      header: 'Name of Staff',
    },
    {
      key: 'className',
      header: 'Class',
    },
    {
      key: 'school',
      header: 'School',
    },
    {
      key: 'numberOfStudents',
      header: 'Number of students',
    },
    {
      key: 'action',
      header: '',
      render: (item) => (
        <button 
          onClick={() => handleClassSelect(item.className)}
          className="bg-yellow-400 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90"
        >
          Select
        </button>
      ),
      align: 'right',
    },
  ];

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 px-2">
        Classes for {grade?.replace('-', ' ').toUpperCase()}
      </h2>
      <Table data={classData} columns={columns} />
    </div>
  );
}