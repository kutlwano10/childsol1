// src/app/billing/page.tsx
'use client';

import { useState } from 'react';
import { Table } from '@/components/ui/table/Table';
import { StatusBadge } from '@/components/ui/table/StatusBadge';
import { Pagination } from '@/components/ui/table/Pagination';
import { DownloadButton } from '@/components/ui/table/DownloadButton';
import Title from '@/components/ui/Title';

// Define our data type
interface Invoice {
  id: string;
  number: string;
  period: string;
  date: string;
  status: 'paid' | 'failed';
  amount: string;
  plan: string;
  downloadUrl: string;
}

// Sample data
const billingData: Invoice[] = [
  {
    id: '1',
    number: '#009',
    period: 'Apr 2025',
    date: 'June 25, 2026',
    status: 'failed',
    amount: 'R2700',
    plan: '2 - 6 Years',
    downloadUrl: '/invoices/009.pdf',
  },
  {
    id: '2',
    number: '#008',
    period: 'Mar 2025',
    date: 'June 25, 2026',
    status: 'paid',
    amount: 'R2700',
    plan: '2 - 6 Years',
    downloadUrl: '/invoices/008.pdf',
  },
  {
    id: '3',
    number: '#008',
    period: 'Feb 2025',
    date: 'June 25, 2026',
    status: 'paid',
    amount: 'R2700',
    plan: '2 - 6 Years',
    downloadUrl: '/invoices/007.pdf',
  },
  // Add more data as needed
];

export default function HistoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = billingData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(billingData.length / itemsPerPage);
  
  // Define columns
  const columns = [
    {
      key: 'invoice',
      header: 'Invoice',
      render: (item: Invoice) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <span>{`Invoice ${item.number} - ${item.period}`}</span>
        </div>
      ),
    },
    {
      key: 'date',
      header: 'Billing Date',
      width: '20%',
    },
    {
      key: 'status',
      header: 'Status',
      width: '15%',
      render: (item: Invoice) => (
        <StatusBadge
          status={item.status === 'paid' ? 'success' : 'error'}
          label={item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        />
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      width: '15%',
    },
    {
      key: 'plan',
      header: 'Plan',
      width: '15%',
    },
    {
      key: 'download',
      header: '',
      width: '8%',
      render: (item: Invoice) => (
        <DownloadButton href={item.downloadUrl} />
      ),
      align: 'right',
    },
  ];

  return (
    <div className=" w-full bg-white rounded-3xl  py-8">
      <div className='pl-2' >
          <Title level={6} className=" ">Billing History</Title>
          <p className="text-gray-600 mb-6">Here you will see your billing history.</p>
      </div>
      
      <Table
        data={currentItems}
        columns={columns}
        rowKey={(item) => item.id}
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