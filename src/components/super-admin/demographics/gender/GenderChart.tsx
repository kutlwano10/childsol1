'use client'

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface GenderChartProps {
  data: {
    age: string;
    male: number;
    female: number;
  }[];
}

const GenderChart: React.FC<GenderChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-4  h-full rounded-4xl shadow ">
      <h2 className="text-lg font-semibold mb-4">Total number of Males and Females</h2>

      <div className="flex gap-8 mb-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#00BFD0] mr-2"></div>
          <p className="text-sm text-gray-600">Male</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#F651EB] mr-2"></div>
          <p className="text-sm text-gray-600">Female</p>
        </div>
      </div>

      <div className="h-92">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="age" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Bar
              dataKey="male"
              fill="#F651EB"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="female"
              fill="#00BFD0"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-1">
        <span className="text-sm text-gray-600">Age</span>
      </div>
    </div>
  );
};

export default GenderChart;