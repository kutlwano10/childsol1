import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderPieChart: React.FC = () => {
  const total = 1500;
  const females = 775;
  const males = 725;

  const ageGroups = [
    { label: '3–12 months', value: 546 },
    { label: '12–23 months', value: 546 },
    { label: '2–4 Years', value: 546 },
    { label: '4–6 Years', value: 546 },
  ];

  const data = {
    labels: ['Females', 'Males'],
    datasets: [
      {
        data: [females, males],
        backgroundColor: ['#EC38BC', '#00CFE8'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full h-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Class Summary</h2>
      <p className="text-gray-500 mb-4">Total number: {total}</p>

      <div className="flex items-center justify-between">
        <div className="w-28 h-28">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col items-center space-y-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="w-1 h-12 bg-pink-400"></span>
            <div>
              <p className="text-gray-500">Grade r</p>
              <p className="text-lg font-semibold text-gray-700">{females}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1 h-12 bg-cyan-400"></span>
            <div>
              <p className="text-gray-500">Grade 1</p>
              <p className="text-lg font-semibold text-gray-700">{males}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm text-gray-600 mb-2">Ages:</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {ageGroups.map((group, index) => (
            <div key={index} className="flex justify-between items-center bg-white rounded-md px-3 py-2 shadow-sm">
              <span className="text-gray-600">{group.label}</span>
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
                {group.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenderPieChart;
