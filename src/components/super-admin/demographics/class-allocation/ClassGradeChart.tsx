'use client'

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface GradeData {
  grade : string
  students: number
}
interface GradeChartProps {
  data: GradeData[]
}

const ClassGradeChart: React.FC<GradeChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-4  h-full rounded-lg shadow border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Class Allocation by Grade</h2>


      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="grade" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false}  label={{ value: 'Students', angle: -90, position: 'insideLeft' }}/>
            <Tooltip/>
            <Legend/>
            <Bar
              dataKey="students"
              name='Number of sudents'
              fill="#F651EB"
              radius={[4, 4, 0, 0]}
            />
            
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center mt-1">
        <span className="text-sm text-gray-600">Grades</span>
      </div>
    </div>
  );
};

export default ClassGradeChart;