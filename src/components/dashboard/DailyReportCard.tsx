'use client';

import { FC } from 'react';

export const DailyReportCard: FC = () => {
  return (
    <div className=" p-4 w-full   ">
      {/* Top Bar */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>Created Apr 12, 2025</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Child Info */}
        <div className="flex items-center gap-4 w-full md:w-1/3">
          <div className="bg-pink-400 text-white w-12 h-12 rounded-md flex items-center justify-center font-bold text-lg">
            AY
          </div>
          <div>
            <p className="text-xs text-gray-500">3728893</p>
            <p className="font-semibold text-gray-800">Ayanda Ndlovu</p>
          </div>
        </div>

        {/* Behaviour */}
        <div className="flex items-center gap-2 w-full md:w-1/3 justify-center">
          <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-xl">
            😊
          </div>
          <p className="font-medium text-gray-700">Well behaved</p>
        </div>

        {/* Attendance */}
        <div className="flex flex-col  gap-2 w-full md:w-1/3 justify-end items-center">
          <div className="flex items-center gap-2">
            <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">Check in</button>
            <span className="text-sm border border-yellow-400 text-yellow-600 px-2 py-0.5 rounded-md">8:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-green-700 text-white text-xs px-3 py-1 rounded-full">Check out</button>
            <span className="text-sm border border-yellow-400 text-yellow-600 px-2 py-0.5 rounded-md">8:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
