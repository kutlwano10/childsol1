import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RegistrationStatsProps {
  data: {
    month: string;
    registrations: number;
    deregistrations: number;
  }[];
}

const RegistrationStats: React.FC<RegistrationStatsProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-4xl shadow ">
      <h2 className="text-lg font-semibold mb-4">
        Total number of registrations and Deregistrations
      </h2>

      <div className="flex justify-between mb-6">
        <div>
          <p className="text-sm text-gray-600">Number of registrations</p>
          <p className="text-sm text-gray-600">Deregistrations</p>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar
              dataKey="registrations"
              fill="#00D097"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="deregistrations"
              fill="#F65160"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-6">
        <div>
          <p className="text-sm font-semibold">
            Registrations and Registrations
          </p>
          <p className="text-sm text-gray-600">Total number:1500</p>
        </div>
        {/* <div className="text-right">
          <p className="text-sm font-semibold">Currency Registered</p>
          <p className="text-sm text-gray-600">Currently Deregistered</p>
          <div className="flex gap-4 justify-end mt-1">
            <span className="font-bold text-indigo-700">775</span>
            <span className="font-bold text-indigo-300">725</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RegistrationStats;
