"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import React from "react";

type ReasonData = {
  reason: string;
  count: number;
};

interface Props {
  data: ReasonData[];
}

export default function DeregistrationReasonsChart({ data }: Props) {
  return (
    <div className="bg-white h-full p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Reason for Parent Deregistrations <br /> for all schools
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="reason" />
          <YAxis label={{ value: "Current in rands", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="count" name="Deregistrations" fill="#EF4444" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center mt-4 text-gray-600">Time</p>
    </div>
  );
}
