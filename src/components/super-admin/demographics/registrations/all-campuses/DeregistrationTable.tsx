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
  { key: 'name', header: 'Name of Campus' },
  { key: 'education', header: 'Education' },
  { key: 'service', header: 'Service' },
  { key: 'food', header: 'Food' },
  { key: 'graduates', header: 'Graduates' },
  { key: 'communication', header: 'Communication' },
  { key: 'safety', header: 'Safety' },
  { key: 'other', header: 'Other' },
  { key: 'total', header: 'Total' },
];

const DeregistrationTable = () => {
  return (
    <div className="bg-white h-full p-6 rounded-4xl shadow-md">
      <h2 className="text-xl font-semibold mb-1">Deregistration</h2>
      <p className="text-sm text-gray-500 mb-4">Total number of registration: 1500</p>
      <Table data={campuses} columns={columns} />
    </div>
  );
};

export default DeregistrationTable;
