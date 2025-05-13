'use client';

import React from 'react';

const productSales = [
  { name: 'Green Golf T-Shirt', value: 100 },
  { name: 'Shorts for Boys', value: 100 },
  { name: 'Shorts for Girls', value: 120 },
  { name: 'Tracksuit set', value: 100 },
  { name: 'Yellow Golf T-Shirt', value: 100 },
];

export default function SalesSummary() {
  return (
    <div className="bg-white rounded-xl h-full shadow-sm p-4 w-full ">
      <h2 className="text-lg font-semibold mb-1">Product Sales</h2>
      <p className="text-sm text-gray-500 mb-4">Total number of sales: 1500</p>
      <div className="grid grid-cols-2 gap-4">
        {productSales.map((product, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-15 bg-lime-500 rounded-sm" />
            <div>
              <div className="text-sm font-medium">{product.name}</div>
              <div className="text-sm text-gray-700">{product.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
