import { Doughnut } from 'react-chartjs-2';

const LocationPieChart: React.FC = () => {
  const total = 1500;
  const locationData = [
    { label: '1-3km', value: 100 },
    { label: '3-6km', value: 120 },
    { label: '6-9km', value: 120 },
    { label: '9-12km', value: 100 },
    { label: '12km+', value: 100 },
  ];

  const chartData = {
    labels: locationData.map(item => item.label),
    datasets: [
      {
        data: locationData.map(item => item.value),
        backgroundColor: [
          '#F651EB', // Pink
          '#00BFD0', // Cyan
          '#4f46e5', // Indigo
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
    <div className="bg-white shadow-md rounded-4xl p-6 w-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-800">Location</h2>
      <p className="text-gray-500 mb-4">Total number: {total}</p>

      <div className="flex flex-col  items-center justify-between">
        {/* Doughnut Chart */}
        <div className="w-40 h-40 mx-auto md:mx-0">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
        
        {/* Legend */}
        <div className="flex items-center gap-2 text-sm mt-4">
          {locationData.map((item, index) => (
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
        <h3 className="text-sm text-gray-600 mb-2">Distance Ranges:</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {locationData.map((group, index) => (
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

export default LocationPieChart;
