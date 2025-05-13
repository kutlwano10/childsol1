import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Tooltip
} from 'recharts';

interface DailyAttendance {
  day: string;
  present: number;
  absent: number;
}

interface AttendanceChartProps {
  attendanceData: DailyAttendance[];
}

const AttendanceChart: React.FC<AttendanceChartProps> = ({ attendanceData }) => {
  return (
    <div className="bg-white h-full rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Children&apos;s Attendance</h3>
        <div className="flex items-center space-x-2 bg-gray-50 rounded-md px-2 py-1 cursor-pointer">
          <span className="text-sm font-medium">Daily</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="flex mb-2 space-x-4">
        <div className="flex items-center">
          <span className="h-3 w-3 bg-emerald-400 rounded-full mr-1"></span>
          <span className="text-xs">Present</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 bg-red-400 rounded-full mr-1"></span>
          <span className="text-xs">Absent</span>
        </div>
      </div>
      <div className="h-52 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={attendanceData}
            margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
            barGap={0}
            barSize={16}
          >
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
            />
            <YAxis 
              hide={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
              domain={[0, 'dataMax + 5']}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              contentStyle={{ 
                borderRadius: '4px', 
                border: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
              }}
              formatter={(value: number, name: string) => [
                value, 
                name === 'present' ? 'Present' : 'Absent'
              ]}
            />
            <Bar 
              dataKey="present" 
              fill="#34D399" 
              radius={[4, 4, 0, 0]}
              name="Present"
            />
            <Bar 
              dataKey="absent" 
              fill="#F87171" 
              radius={[4, 4, 0, 0]}
              name="Absent"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart