import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';



interface Report {
  id: string;
  studentId: string;
  studentName: string;
  studentInitials: string;
  date: string;
  behavior: string;
  checkIn: string;
  checkOut: string;
}

interface ReportsHistoryProps {
  reports: Report[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ReportsHistory: React.FC<ReportsHistoryProps> = ({
  reports,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full bg-white rounded-3xl shadow">
      <div className="p-4 font-medium text-lg">Reports History</div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-y border-gray-200">
            <tr className="text-left">
              <th className="px-4 py-2 font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 font-medium text-gray-700">Date</th>
              <th className="px-4 py-2 font-medium text-gray-700">Child&apos;s behaviour</th>
              <th className="px-4 py-2 font-medium text-gray-700">Check in</th>
              <th className="px-4 py-2 font-medium text-gray-700">Check Out</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b border-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-pink-400 flex items-center justify-center text-white text-sm">
                      {report.studentInitials}
                    </div>
                    <div>
                      <div className="text-gray-800 text-sm">{report.studentId}</div>
                      <div className="font-medium">{report.studentName}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{report.date}</td>
                <td className="px-4 py-3 text-gray-600">{report.behavior}</td>
                <td className="px-4 py-3 text-gray-600">{report.checkIn}</td>
                <td className="px-4 py-3 text-gray-600">{report.checkOut}</td>
                <td className="px-4 py-3">
                  <button className="bg-orange-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-1 p-4 border-t border-gray-200">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-2 py-1 text-gray-600 disabled:text-gray-300"
        >
          <ArrowLeftIcon className="w-8 h-8" />
          Previous
        </button>
        
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-6 h-6 flex items-center justify-center rounded-full ${
              currentPage === page ? 'bg-gray-200' : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-2 py-1 text-gray-600 disabled:text-gray-300"
        >
          Next
          <ArrowRightIcon className='w-8 h-8' />
        </button>
      </div>
    </div>
  );
};

export default ReportsHistory;