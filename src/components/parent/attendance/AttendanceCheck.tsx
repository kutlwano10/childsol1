import React from 'react';
import { BellAlertIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';

interface AttendanceCheckProps {
  // Type of check: 'in' for check-in, 'out' for check-out
  type: 'in' | 'out';
  // Current date string
  date: string;
  // Current time string
  time: string;
  // Status: 'pending' or 'completed'
  status: 'pending' | 'completed';
  // Message to display
  message?: string;
  // Custom action label, defaults to "Check-in" or "Check-out" based on type
  actionLabel?: string;
  // Handler for check button click
  onCheckAction?: () => void;
}

export default function AttendanceCheck({
  type,
  date,
  time,
  status,
  message,
  actionLabel,
  onCheckAction,
}: AttendanceCheckProps) {
  const isPending = status === 'pending';
  
  // Define colors and text based on type and status
  const getColors = () => {
    if (status === 'completed') {
      return {
        bg: 'bg-green-50',
        border: 'border-green-100',
        icon: 'text-green-500',
        button: 'bg-green-500'
      };
    }
    
    return type === 'in' 
      ? {
          bg: 'bg-amber-50',
          border: 'border-amber-100',
          icon: 'text-amber-500',
          button: 'bg-amber-500'
        }
      : {
          bg: 'bg-blue-50',
          border: 'border-blue-100',
          icon: 'text-blue-500',
          button: 'bg-blue-500'
        };
  };
  
  const colors = getColors();
  
  // Default messages if none provided
  const defaultMessage = type === 'in' 
    ? "Please don't forget to check your child-in." 
    : "Please don't forget to check your child-out.";
  
  // Default action labels if none provided
  const defaultActionLabel = type === 'in' ? 'Check-in' : 'Check-out';
  
  return (
    <div className="rounded-lg  ">
      <div className="flex items-start justify-between mb-2">
        <div>
          <Title level={6} className="text-gray-800 font-medium">Date: {date}</Title>
          <p className="text-gray-600 text-sm mt-1">Current time: {time}</p>
        </div>
        <Button  variant='text' size='sm' type='button'>Check-in Guardian</Button>
      </div>

      <div className={`${colors.bg} border ${colors.border} rounded-2xl p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isPending ? (
              <BellAlertIcon className={`${colors.icon} w-6 h-6`} />
            ) : (
              <CheckCircleIcon className={`${colors.icon} w-6 h-6`} />
            )}
            <span className="text-gray-800 font-medium">
              {isPending ? `${type === 'in' ? 'Morning' : 'Afternoon'} Check-${type}` : 'Checked'}
            </span>
          </div>
          <div className="flex-1 mx-4">
            <p className="text-gray-600 text-sm">
              {message || defaultMessage}
            </p>
          </div>
          {isPending ? (
            <button
              onClick={onCheckAction}
              className={`${colors.button} text-white rounded-full px-4 py-1 text-sm font-medium`}
            >
              {actionLabel || defaultActionLabel}
            </button>
          ) : (
            <span className="text-green-500 font-medium text-sm">
              {type === 'in' ? 'Checked in' : 'Checked out'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
