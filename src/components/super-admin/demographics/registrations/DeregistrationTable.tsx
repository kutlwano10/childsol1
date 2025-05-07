import React from 'react';

interface DeregistrationsTableProps {
  totalRegistrations: number;
  deregistrationData: {
    education: number;
    service: number;
    food: number;
    graduates: number;
    communication: number;
    safety: number;
    other: number;
  };
}

const DeregistrationsTable: React.FC<DeregistrationsTableProps> = ({
  totalRegistrations = 9700,
  deregistrationData = {
    education: 40,
    service: 40,
    food: 40,
    graduates: 40,
    communication: 40,
    safety: 40,
    other: 40
  }
}) => {
  return (
    <div className="bg-white h-full p-4 rounded-4xl shadow ">
      <h1 className="text-lg font-semibold mb-2">Degistrations</h1>
      <p className="text-sm text-gray-600 mb-4">Total number of registration: {totalRegistrations}</p>

      <div className="space-y-20 ">
        <p className="text-sm font-semibold">Degistrations</p>
      </div>

      <table className="w-full pt-8">
        <tbody>
          {/* Row 1 */}
          <tr className="border-b border-gray-200">
            <td className="py-2 text-sm">Education</td>
            <td className="py-2 text-sm text-right ">{deregistrationData.education}</td>
            <td className="py-2 pl-4 text-sm">Service</td>
            <td className="py-2 text-sm text-right ">{deregistrationData.service}</td>
          </tr>
          {/* Row 2 */}
          <tr className="border-b border-gray-200">
            <td className="py-2 text-sm">Food</td>
            <td className="py-2 text-sm text-right ">{deregistrationData.food}</td>
            <td className="py-2 pl-4 text-sm">Graduates</td>
            <td className="py-2 text-sm text-right ">{deregistrationData.graduates}</td>
          </tr>
          {/* Row 3 */}
          <tr className="border-b border-gray-200">
            <td className="py-2 text-sm">Communication</td>
            <td className="py-2 text-sm text-right ">{deregistrationData.communication}</td>
            <td className="py-2 pl-4 text-sm">Safety</td>
            <td className="py-2 text-sm text-right ">{deregistrationData.safety}</td>
          </tr>
          {/* Row 4 */}
          <tr>
            <td className="py-2 text-sm">Other</td>
            <td className="py-2 text-sm text-right ">{deregistrationData.other}</td>
            <td className="py-2"></td>
            <td className="py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeregistrationsTable;