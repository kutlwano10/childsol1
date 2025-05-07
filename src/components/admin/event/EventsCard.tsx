import React from "react";
import { Clock, X, Edit } from "lucide-react";

// TypeScript interface for the EventCard props
interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  timeRemaining?: string;
  accentColor?: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

// Reusable EventCard component with TypeScript
const EventsCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  timeRemaining,
  accentColor = "bg-blue-500",
  onEdit,
  onDelete,
}) => {
  const handleEdit = () => {
    if (onEdit) onEdit(id);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 w-full">
      {/* Delete Button */}
      {onDelete && (
        <button
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
          onClick={handleDelete}
          aria-label="Delete event"
        >
          <X size={16} />
        </button>
      )}

      <div className="flex">
        {/* Accent Color Bar */}
        <div className={`w-1 ${accentColor} rounded mr-3`}></div>

        <div className="flex-1">
          {/* Event Title */}
          <h3 className="font-medium text-lg">{title}</h3>
          <div className="flex w-full flex-col items-end justify-end mt-2">
            {/* Edit Button */}
            {onEdit && (
              <button
                className="bg-amber-400 text-white px-3 py-1 rounded-md flex items-center"
                onClick={handleEdit}
                aria-label="Edit event"
              >
                <span>Edit</span>
                <Edit size={16} className="ml-1" />
              </button>
            )}

            {/* Time Remaining */}
            {timeRemaining && (
              <div className="flex pt-2 items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-1" />
                <span>{timeRemaining}</span>
              </div>
            )}
          </div>

          {/* Event Date and Time */}
          <p className="text-gray-500 text-sm mt-2">
            {date} | {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
