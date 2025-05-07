'use client'

import React from 'react'
import { Table, Column } from '@/components/ui/table/Table' // adjust path if needed
import { BadgeCheck, Clock } from 'lucide-react'

// Example data structure
interface WaitingListItem {
  id: string
  guardianName: string
  age: number
  dateApplied: string
  timeApplied: string
  numberOfApplicants: number
  classTime: string
  status: 'approved' | 'in_review'
}

const data: WaitingListItem[] = [
  {
    id: '1',
    guardianName: 'Amina Dube',
    age: 4,
    dateApplied: '04 Apr 2025',
    timeApplied: '08:15',
    numberOfApplicants: 1,
    classTime: '08:15',
    status: 'approved',
  },
  {
    id: '2',
    guardianName: 'Noah Van Wyk',
    age: 5,
    dateApplied: '03 Apr 2025',
    timeApplied: '08:17',
    numberOfApplicants: 1,
    classTime: '08:17',
    status: 'in_review',
  },
]

const columns: Column<WaitingListItem>[] = [
  { key: 'guardianName', header: 'Name of Guardian' },
  { key: 'age', header: 'Age', align: 'center' },
  { key: 'dateApplied', header: 'Date Applied' },
  { key: 'numberOfApplicants', header: 'Number of Applicants', align: 'center' },
  { key: 'classTime', header: 'Class' },
  {
    key: 'status',
    header: 'Status',
    render: (item) => (
      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center ${
          item.status === 'approved'
            ? 'bg-green-100 text-green-600'
            : 'bg-yellow-100 text-yellow-700'
        }`}
      >
        {item.status === 'approved' ? (
          <>
            <BadgeCheck className="w-4 h-4 mr-1" /> Approved
          </>
        ) : (
          <>
            <Clock className="w-4 h-4 mr-1" /> In Review
          </>
        )}
      </span>
    ),
  },
]

export default function WaitingListTable() {
  return (
    <div className="bg-white rounded-3xl p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Waiting list</h2>
        <p className="text-sm text-gray-500">
          Please review the waiting list applications.
        </p>
      </div>
      <Table data={data} columns={columns} />
    </div>
  )
}

