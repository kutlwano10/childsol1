import { Doughnut } from 'react-chartjs-2';

const MaritalStatusPieChart: React.FC = () => {
  const total = 1500; // Total number of parents/guardians
  const maritalData = [
    { label: 'Married', value: 800 },
    { label: 'Single', value: 400 },
    { label: 'Divorced', value: 150 },
    { label: 'Widowed', value: 100 },
    { label: 'Other', value: 50 },
  ];

  const chartData = {
    labels: maritalData.map(item => item.label),
    datasets: [
      {
        data: maritalData.map(item => item.value),
        backgroundColor: [
          '#4f46e5', // Indigo
          '#F651EB', // Pink
          '#00BFD0', // Cyan
          '#10b981', // Emerald
          '#f59e0b', // Amber
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full h-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Marital Status</h2>
      <p className="text-gray-500 mb-4">Total number: {total}</p>

      <div className="flex flex-col  items-center justify-between">
        {/* Doughnut Chart */}
        <div className="w-40 h-40 mx-auto md:mx-0">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
        
        {/* Legend */}
        <div className="flex  text-sm mt-4 ">
          {maritalData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
              ></span>
              <div>
                <p className="text-gray-500 text-xs">{item.label}</p>
                <p className="text-lg font-semibold text-gray-700">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm text-gray-600 mb-2">Status Breakdown:</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {maritalData.map((group, index) => (
            <div key={index} className="flex justify-between items-center bg-white rounded-md px-3 py-2 shadow-sm">
              <span className="text-gray-600">{group.label}</span>
              <span 
                className="px-2 py-1 rounded text-xs font-medium"
                style={{ 
                  backgroundColor: `${chartData.datasets[0].backgroundColor[index]}20`,
                  color: chartData.datasets[0].backgroundColor[index]
                }}
              >
                {group.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaritalStatusPieChart;