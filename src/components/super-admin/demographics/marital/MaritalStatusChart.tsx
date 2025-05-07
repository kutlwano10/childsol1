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

const MaritalStatusChart = () => {
  const data = [
    { name: "Married", parents: 300, fill: "#4f46e5" },
    { name: "Unmarried", parents: 250, fill: "#F651EB" },
    { name: "Divorced", parents: 200, fill: "#00BFD0" },
    { name: "Widowed", parents: 150, fill: "#10b981" },
    { name: "Separated", parents: 100, fill: "#f59e0b" },
    { name: "Other", parents: 50, fill: "#6366f1" }
  ];

  return (
    <div className="bg-white h-full p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Marital Status Distribution</h2>
      <p className="text-gray-600 mb-6">Number of Parents by Marital Status</p>
      
      <div className="min-h-96 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={100}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value) => [`${value} parents`, 'Number of parents']}
              labelFormatter={(label) => `Status: ${label}`}
            />
            <Legend />
            <Bar
              dataKey="parents"
              name="Number of Parents"
              radius={[0, 4, 4, 0]}
            >
              {data.map((entry, index) => (
                <Bar 
                  key={`bar-${index}`} 
                  dataKey="parents" 
                  fill={entry.fill} 
                  name={entry.name}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Total Parents: {data.reduce((sum, item) => sum + item.parents, 0)}</p>
      </div>
    </div>
  );
};

export default MaritalStatusChart;