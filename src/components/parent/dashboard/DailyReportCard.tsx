'use client';
import { FC } from 'react';

export const DailyReportCard: FC = () => {
  return (
    <div className="w-full p-8">
      {/* Title */}
      <h2 className="text-gray-800 font-bold mb-4">Theme: Planet Earth (21-25 April)</h2>
      
      {/* Three Column Layout */}
      <div className="flex flex-col md:flex-row md:items-center border-t border-gray-200 pt-4">
        {/* Left Column */}
        <div className="md:w-1/3 flex flex-col">
          <div className="flex items-center mb-6">
            <div className="bg-gray-500 text-white w-8 h-8 rounded-md flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-500 font-semibold">Created Apr 12, 2025</span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-pink-400 text-white w-12 h-12 rounded-md flex items-center justify-center font-bold text-xl mr-3">
              AY
            </div>
            <div>
              <p className="text-gray-500 text-sm">3728893</p>
              <p className="font-semibold text-gray-800">Ayanda Ndlovu</p>
            </div>
          </div>
        </div>

        <div className='bg-gray-400 h-20 w-[1px]'></div>
        
        {/* Middle Column */}
        <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
          <div>
            <p className="text-gray-500 font-semibold mb-4">Daily Badge</p>
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-full w-10 h-10 flex items-center justify-center mr-2">
                <span className="text-lg">👧</span>
              </div>
              <span className="font-semibold text-gray-800">Kindness Champion</span>
            </div>
          </div>
        </div>
        <div className='bg-gray-400 h-20 w-[1px]'></div>
        {/* Right Column */}
        <div className="md:w-1/3 mt-6 md:mt-0">
          <div className="flex flex-col items-center">
            <p className="text-gray-500  font-semibold mb-4">Attendance Details</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="bg-green-500 text-white text-xs px-4 py-1 rounded-full mr-2">
                  Check in
                </div>
                <div className="text-sm border border-yellow-400 text-yellow-500 rounded-full px-3 py-0.5">
                  8:00 PM
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white text-xs px-4 py-1 rounded-full mr-2">
                  Check out
                </div>
                <div className="text-sm border border-yellow-400 text-yellow-500 rounded-full px-3 py-0.5">
                  8:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};