import React from 'react';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

interface AttendanceStatsProps {
  present: number;
  absent: number;
  weeklyChange: string;
  trendData: { date: string; value: number }[];
}

const AttendanceStats: React.FC<AttendanceStatsProps> = ({ 
  present, 
  absent, 
  weeklyChange,
  trendData
}) => {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex space-x-4">
        <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
          <p className="text-gray-500 text-sm mb-2">Total Present</p>
          <p className="text-2xl font-bold">{present}</p>
        </div>
        <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
          <p className="text-gray-500 text-sm mb-2">Total Absent</p>
          <p className="text-2xl font-bold">{absent}</p>
        </div>
      </div>
      <div className="bg-white h-full rounded-lg p-4 shadow-sm">
        <p className="text-gray-500 text-sm mb-2">Average Class Attendance This Week:</p>
        <div className="flex items-center">
          <p className="text-lg font-bold text-emerald-500">{weeklyChange}</p>
        </div>
        <div className="h-14 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
              <Tooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 text-xs border border-gray-100 shadow-sm rounded">
                        <p>{`${payload[0].payload.date}: ${payload[0].value}%`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ stroke: '#10b981', strokeWidth: 2, fill: '#ffffff', r: 3 }}
                activeDot={{ stroke: '#10b981', strokeWidth: 2, fill: '#10b981', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AttendanceStats