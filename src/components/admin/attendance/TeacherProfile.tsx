import React from 'react';

interface TeacherProfileProps {
  name: string;
  role: string;
  initial: string;
  learnerCount: number;
}

const TeacherProfile: React.FC<TeacherProfileProps> = ({ 
  name, 
  role, 
  initial, 
  learnerCount 
}) => {
  return (
    <div className="bg-white h-full rounded-lg p-6 flex flex-col items-center shadow-sm">
      <div className="bg-emerald-400 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-white text-2xl font-bold">{initial}</span>
      </div>
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="text-gray-500 text-sm">{role}</p>
      <div className="mt-4 text-center">
        <span className="text-3xl  font-bold">{learnerCount}</span>
        <p className="text-gray-500 text-sm">Number of learners</p>
      </div>
    </div>
  );
};

export default TeacherProfile