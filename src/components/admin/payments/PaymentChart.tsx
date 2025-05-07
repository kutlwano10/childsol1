import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const data = [
  { month: "Jan", paid: 70000, outstanding: 20000 },
  { month: "Feb", paid: 80000, outstanding: 15000 },
  { month: "Mar", paid: 85000, outstanding: 12000 },
  { month: "Apr", paid: 87000, outstanding: 14000 },
  { month: "May", paid: 95000, outstanding: 13000 },
  { month: "Jun", paid: 110000, outstanding: 18000 },
  { month: "Jul", paid: 120000, outstanding: 20000 },
  { month: "Aug", paid: 115000, outstanding: 17000 },
  { month: "Sep", paid: 90000, outstanding: 12000 },
  { month: "Oct", paid: 75000, outstanding: 10000 },
  { month: "Nov", paid: 60000, outstanding: 9000 },
  { month: "Dec", paid: 65000, outstanding: 8000 },
];

const PaymentChart = () => {
  return (
    <div className="bg-white rounded-3xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Payment Chart</h2>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Month</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" label={{ value: "Time", position: "insideBottom", offset: -5 }} />
          <YAxis label={{ value: "Currency in Rands", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="paid" name="Payments Made" fill="#00d49f" barSize={30} />
          <Bar dataKey="outstanding" name="Outstanding Payments" fill="#f23c3c" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentChart;
