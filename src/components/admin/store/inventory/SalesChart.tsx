'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

type SalesData = {
  name: string;
  sales: number;
};

const data: SalesData[] = [
  { name: 'Green Golf T-Shirt', sales: 120 },
  { name: 'Shorts for Boys', sales: 30 },
  { name: 'Shorts for Girls', sales: 150 },
  { name: 'Tracksuit set', sales: 40 },
  { name: 'Yellow Golf T-Shirt', sales: 150 },
];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full ">
      <h2 className="text-lg font-semibold mb-4">Clothes</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
          
          <XAxis dataKey="name" angle={-10} textAnchor="end" interval={0} tickMargin={15} />
          <YAxis label={{ value: 'Number of products sold', angle: -90, position: 'insideMiddle' }} />
          <Tooltip />
          <Bar dataKey="sales" fill="#8BC34A" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
