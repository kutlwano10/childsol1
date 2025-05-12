import React from 'react';
import { Table, Column } from '@/components/ui/table/Table'; // adjust path as needed

interface CampusData {
  id: string;
  name: string;
  education: number;
  service: number;
  food: number;
  graduates: number;
  communication: number;
  safety: number;
  other: number;
  total: number;
}

const campuses: CampusData[] = [
  {
    id: '1',
    name: 'Blue Hills Campus',
    education: 234,
    service: 234,
    food: 234,
    graduates: 234,
    communication: 234,
    safety: 234,
    other: 234,
    total: 234,
  },
  {
    id: '2',
    name: 'Country View Campus',
    education: 234,
    service: 234,
    food: 234,
    graduates: 234,
    communication: 234,
    safety: 234,
    other: 234,
    total: 234,
  },
  {
    id: '3',
    name: 'Rhodesfield Campus',
    education: 234,
    service: 234,
    food: 234,
    graduates: 234,
    communication: 234,
    safety: 234,
    other: 234,
    total: 234,
  },
  {
    id: '4',
    name: 'Vorna Valley Campus',
    education: 234,
    service: 234,
    food: 234,
    graduates: 234,
    communication: 234,
    safety: 234,
    other: 234,
    total: 234,
  },
];

const columns: Column<CampusData>[] = [
  { key: 'name', header: 'Campus Name' },
  { key: 'education', header: 'Age 20-30' },
  { key: 'service', header: 'Age 30-40' },
  { key: 'food', header: 'Age 40-50' },
  { key: 'graduates', header: 'Age 50-60' },
  { key: 'communication', header: 'Age 60-70' },
  { key: 'safety', header: 'Age 70-80' },
  { key: 'other', header: 'Other' },
  { key: 'total', header: 'Total' },
];

const AgeGroupTable = () => {
  return (
    <div className="bg-white h-full p-6 rounded-4xl shadow-md">
      <h2 className="text-xl font-semibold mb-1">Age Group</h2>
      <p className="text-sm text-gray-500 mb-4">Total number of parents: 1500</p>
      <Table data={campuses} columns={columns} />
    </div>
  );
};

export default AgeGroupTable;