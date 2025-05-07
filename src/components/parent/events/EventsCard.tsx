import { ClockIcon } from '@heroicons/react/24/solid';
import React from 'react';



interface EventCardProps {
  title: string;
  date: string;
  time: string;
  remainingTime: string;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'red';
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  remainingTime,
  color = 'blue',
}) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 flex items-start">
      <div className={`w-1 flex-shrink-0 self-stretch rounded-full ${colorClasses[color]} mr-3`} />
      <div className="flex-1">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {date} | {time}
        </p>
      </div>
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-600">
        <ClockIcon className='w-6 h-6' />
        <span>{remainingTime}</span>
      </div>
    </div>
  );
};

export default EventCard;