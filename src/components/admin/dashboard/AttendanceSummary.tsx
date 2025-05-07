
import React from 'react';

interface AttendanceSummaryProps {
  date: string;
  checkInData: {
    children: string;
    staff: string;
    payments: number;
  };
  checkOutData: {
    children: string;
    staff: string;
    payments: number;
  };
}

const AttendanceSummary: React.FC<AttendanceSummaryProps> = ({
  date,
  checkInData,
  checkOutData
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Attendance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Check In Section */}
        <div>
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-500">{date}</span>
            <h3 className="text-base font-medium ml-auto">Check In total</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Children</p>
              <p className="font-semibold">{checkInData.children}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Staff</p>
              <p className="font-semibold">{checkInData.staff}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Payments Made</p>
              <p className="font-semibold">{checkInData.payments}</p>
            </div>
          </div>
        </div>
        
        {/* Check Out Section */}
        <div>
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-500">{date}</span>
            <h3 className="text-base font-medium ml-auto">Check In out</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">Children</p>
              <p className="font-semibold">{checkOutData.children}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Staff</p>
              <p className="font-semibold">{checkOutData.staff}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Payments Made</p>
              <p className="font-semibold">{checkOutData.payments}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;