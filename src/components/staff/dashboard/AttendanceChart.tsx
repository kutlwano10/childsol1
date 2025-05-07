
import React, { useState } from 'react';

interface AttendanceData {
  month: string;
  count: number;
}

const AttendanceChart: React.FC = () => {
  const [timeframe, setTimeframe] = useState<string>("Week");
  
  // Dummy data that matches the chart in the image
  const attendanceData: AttendanceData[] = [
    { month: "Monday", count: 50 },
    { month: "Tuesday", count: 60 },
    { month: "Wednesday", count: 65 },
    { month: "Thursday", count: 75 },
    { month: "Friday", count: 95 },
    
  ];

  // Max value for y-axis scale (140 based on the image)
  const maxYValue = 140;
  const chartHeight = 200;
  
  return (
    <div className="bg-white w-full h-full p-6 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Attendance Chart</h2>
        <div className="relative">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="block appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500"
          >
            <option>Week</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-gray-800">Class A</span>
      </div>

      <div className="relative" style={{ height: `${chartHeight}px` }}>
        {/* Y-axis labels */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <div>140</div>
          <div>120</div>
          <div>100</div>
          <div>80</div>
          <div>60</div>
          <div>40</div>
          <div>20</div>
          <div>0</div>
        </div>
        
        {/* Chart area with grid lines */}
        <div className="ml-8 border-l border-t border-gray-200 h-full relative">
          {/* Horizontal grid lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i} 
                className="border-b border-gray-200 w-full" 
                style={{ height: `${100/7}%` }}
              ></div>
            ))}
          </div>
          
          {/* Vertical grid lines */}
          <div className="absolute top-0 left-0 w-full h-full flex">
            {attendanceData.map((_, i) => (
              <div 
                key={i} 
                className="border-r border-gray-200 h-full" 
                style={{ width: `${100/attendanceData.length}%` }}
              ></div>
            ))}
          </div>
          
          {/* Bar chart */}
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
            {attendanceData.map((data, index) => {
              const barHeight = (data.count / maxYValue) * 100; // Scale height as percentage
              return (
                <div 
                  key={index} 
                  className="flex justify-center items-end" 
                  style={{ width: `${100 / attendanceData.length}%`, height: '100%' }}
                >
                  <div 
                    className="w-4/5 bg-green-500 rounded-t"
                    style={{ height: `${barHeight}%` }}
                  ></div>
                </div>
              );
            })}
          </div>
          
          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 w-full translate-y-6 flex">
            {attendanceData.map((data, index) => (
              <div 
                key={index} 
                className="text-center text-xs text-gray-500" 
                style={{ width: `${100 / attendanceData.length}%` }}
              >
                {data.month}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10 text-sm text-gray-500">Time</div>
    </div>
  );
};

export default AttendanceChart;