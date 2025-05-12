import { useState } from 'react';

interface Campus {
  name: string;
  male: number;
  female: number;
  total: number;
}

export default function CampusGenderStatsTable() {
  const [campuses] = useState<Campus[]>([
    {
      name: "Blue Hills Campus",
      male: 234,
      female: 234,
      total: 234 + 234
    },
    {
      name: "Country View Campus",
      male: 234,
      female: 234,
      total: 234 + 234
    },
    {
      name: "Rhodesfield Campus",
      male: 234,
      female: 234,
      total: 234 + 234
    },
    {
      name: "Vorna Valley Campus",
      male: 234,
      female: 234,
      total: 234 + 234
    }
  ]);

  return (
    <div className="bg-white rounded-4xl h-full shadow-md p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-1">Total number of Males and Females</h2>
      <p className="text-sm text-gray-500 mb-4">Total number of parents: 1500</p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left border-b">Name of Campus</th>
              <th className="py-3 px-4 text-left border-b">Male</th>
              <th className="py-3 px-4 text-left border-b">Female</th>
              <th className="py-3 px-4 text-left border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {campuses.map((campus, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{campus.name}</td>
                <td className="py-3 px-4 border-b">{campus.male}</td>
                <td className="py-3 px-4 border-b">{campus.female}</td>
                <td className="py-3 px-4 border-b">{campus.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}