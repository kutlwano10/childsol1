import React, { useState } from 'react';
import { Table, Column } from '@/components/ui/table/Table';
import { Pagination } from '@/components/ui/table/Pagination';
import { DownloadButton } from '@/components/ui/table/DownloadButton';

// Define the Payment interface
interface Payment {
  id: string;
  invoiceNumber: string;
  invoiceDate: string;
  billingDate: string;
  status: 'Paid' | 'Failed';
  amount: string;
  plan: string;
}

const PaymentHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentsPerPage] = useState(7);

  // Sample data based on the image
  const allPayments: Payment[] = [
    {
      id: '1',
      invoiceNumber: 'Invoice #009',
      invoiceDate: 'Apr 2025',
      billingDate: 'June 25, 2026',
      status: 'Failed',
      amount: 'R 400.00',
      plan: '2 - 6 Years'
    },
    {
      id: '2',
      invoiceNumber: 'Invoice #009',
      invoiceDate: 'Apr 2025',
      billingDate: 'June 25, 2026',
      status: 'Failed',
      amount: 'R 400.00',
      plan: '2 - 6 Years'
    },
    {
      id: '3',
      invoiceNumber: 'Invoice #009',
      invoiceDate: 'Apr 2025',
      billingDate: 'June 25, 2026',
      status: 'Failed',
      amount: 'R 400.00',
      plan: '2 - 6 Years'
    },
    {
      id: '4',
      invoiceNumber: 'Invoice #008',
      invoiceDate: 'Mar 2025',
      billingDate: 'June 25, 2026',
      status: 'Paid',
      amount: 'R 105.00',
      plan: '2 - 6 Years'
    },
    {
      id: '5',
      invoiceNumber: 'Invoice #008',
      invoiceDate: 'Mar 2025',
      billingDate: 'June 25, 2026',
      status: 'Paid',
      amount: 'R 105.00',
      plan: '2 - 6 Years'
    },
    {
      id: '6',
      invoiceNumber: 'Invoice #008',
      invoiceDate: 'Mar 2025',
      billingDate: 'June 25, 2026',
      status: 'Paid',
      amount: 'R 105.00',
      plan: '2 - 6 Years'
    },
    {
      id: '7',
      invoiceNumber: 'Invoice #008',
      invoiceDate: 'Mar 2025',
      billingDate: 'June 25, 2026',
      status: 'Paid',
      amount: 'R 105.00',
      plan: '2 - 6 Years'
    },
  ];

  // Get current payments
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = allPayments.slice(indexOfFirstPayment, indexOfLastPayment);
  const totalPages = Math.ceil(allPayments.length / paymentsPerPage);

  const columns: Column<Payment>[] = [
    {
      key: 'invoice',
      header: 'Invoice',
      render: (payment) => (
        <div className="flex items-center">
          <div className="bg-green-50 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div>
            <div className="font-medium text-gray-700">{payment.invoiceNumber}</div>
            <div className="text-sm text-gray-500">{payment.invoiceDate}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'billingDate',
      header: 'Billing Date',
      render: (payment) => <span className="text-gray-600">{payment.billingDate}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (payment) => (
        <span 
          className={`px-3 py-1 rounded-full text-sm ${
            payment.status === 'Paid' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}
        >
          {payment.status}
        </span>
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (payment) => <span className="text-gray-700">{payment.amount}</span>,
    },
    {
      key: 'class',
      header: 'class',
      render: (payment) => <span className="text-gray-700">{payment.plan}</span>,
    },
    {
      key: 'actions',
      header: '',
      render: () => (
        <div className="flex justify-end">
          <DownloadButton href="#" />
        </div>
      ),
      align: 'right',
      width: '40px',
    },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Payslip History</h2>
        <p className="text-gray-600">Here you will see your Payslip history.</p>
      </div>

      <Table 
        data={currentPayments} 
        columns={columns} 
        className="mb-6"
      />

      <div className="flex justify-center mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PaymentHistory;