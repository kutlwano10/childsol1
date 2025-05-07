import React from 'react';
import { Table, Column } from '@/components/ui/table/Table'; // adjust path as needed

type ClassItem = {
  id: string;
  staffName: string;
  className: string;
  school: string;
  numberOfStudents: number;
  actionLabel: string;
};

const classData: ClassItem[] = [
  { id: '1', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35, actionLabel: 'Select' },
  { id: '2', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35, actionLabel: 'View' },
  { id: '3', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35, actionLabel: 'View' },
  { id: '4', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35, actionLabel: 'View' },
  { id: '5', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35, actionLabel: 'View' },
  { id: '6', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35, actionLabel: 'View' },
  { id: '7', staffName: 'Mrs Leea', className: 'CA', school: 'Blue Hills', numberOfStudents: 35, actionLabel: 'View' },
];

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
      <button className="bg-yellow-400 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90">
        {item.actionLabel}
      </button>
    ),
    align: 'right',
  },
];

const ClassTable: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 px-2">Class</h2>
      <Table data={classData} columns={columns} />
    </div>
  );
};

export default ClassTable;
