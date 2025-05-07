import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface RegistrationPieChartProps {
  registered: number;
  deregistered: number;
}

const RegistrationPieChart: React.FC<RegistrationPieChartProps> = ({
  registered = 775,
  deregistered = 725,
}) => {
  const data = [
    { name: "Registered", value: registered, color: "#00D097" },
    { name: "Deregistered", value: deregistered, color: "#F65160" },
  ];

  return (
    <div className="bg-white h-full p-4 rounded-4xl shadow">
      <h2 className="text-lg font-semibold mb-2">
        Registrations and Registrations
      </h2>
      <p className="text-sm text-gray-600 mb-4">Total number: 1500</p>

      <div className="flex items-center">
        {/* Pie Chart */}
        <div className="w-full h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Labels and Values */}
        <div className="w-2/3 pl-6">
          <div className=" ">
            <div>
              <p className="text-sm font-medium text-gray-600">Registered</p>
              <p
                className="text-2xl font-bold text-[#00D097]"
              >
                {registered}
              </p>
            </div>
            <div className="">
              <p className="text-sm font-medium text-gray-600">Deregistered</p>
              <p className="text-2xl font-bold text-[#F65160]">
                {deregistered}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPieChart;
