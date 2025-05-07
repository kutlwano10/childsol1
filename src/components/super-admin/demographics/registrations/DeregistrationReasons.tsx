import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DeregistrationReasonsProps {
  data: {
    reason: string;
    count: number;
  }[];
}

const DeregistrationReasons: React.FC<DeregistrationReasonsProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-4xl shadow ">
      <h2 className="text-lg font-semibold mb-4">Reason for Parent Deregistrations for all schools</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis 
              dataKey="reason" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              width={80}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#F65160" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600"></p>
        <div className="flex gap-2">
          {[300, 250, 200, 150, 100, 50].map((value) => (
            <span key={value} className="text-xs text-gray-500">{value}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeregistrationReasons;