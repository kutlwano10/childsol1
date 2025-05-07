'use client'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

interface LocationData {
  distanceRange: string;
  people: number;
}

interface LocationChartProps {
  data: LocationData[];
}

const LocationChart: React.FC<LocationChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 h-full rounded-4xl shadow ">
      <h2 className="text-lg font-semibold mb-4">Student Distribution by Distance</h2>
      <div className=" h-120">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="distanceRange" 
              axisLine={false} 
              tickLine={false}
              label={{ value: 'Distance from School (km)', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              label={{ value: 'Number of Students', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value) => [`${value} students`, 'Number of students']}
              labelFormatter={(label) => `Distance: ${label}`}
            />
            {/* <Legend /> */}
            <Bar
              dataKey="people"
              name="Students"
              fill="#10b981" // Emerald green color
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LocationChart;