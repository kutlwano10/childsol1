'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Payments Made', value: 130000 },
  { name: 'Outstanding Payment', value: 120000 },
];

const COLORS = ['#00C49F', '#FF4D67']; // green and red as per the image

const PayrollSummaryChart = () => {
  const totalAmount = 150000;

  return (
    <div className=" p-6 rounded-2xl h-full shadow-sm w-full ">
      <h3 className="text-lg font-semibold mb-1">Payroll Summary</h3>
      <p className="text-sm text-gray-500 mb-4">Total amount requited: {totalAmount.toLocaleString()}</p>

      <div className="flex items-center justify-between">
        <div className="w-1/2 ">
          <ResponsiveContainer  width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4 w-1/2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FF4D67] rounded-full" />
            <div>
              <p className="text-xs text-gray-500">Outstanding Payment</p>
              <p className="text-sm font-semibold">R120000</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#00C49F] rounded-full" />
            <div>
              <p className="text-xs text-gray-500">Payments Made</p>
              <p className="text-sm font-semibold">R130000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollSummaryChart;

