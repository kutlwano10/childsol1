// components/CardComponents.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

// Shared types
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

// Base Card Component
export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white h-full rounded-3xl shadow-sm p-8 ${className}`}>
      {children}
    </div>
  );
};


export interface EventItem {
  id: number;
  title: string;
  description?: string;
  date: string;
  time: string;
  colorCode?: string;
}

interface UpcomingEventsProps {
  events: EventItem[];
  title?: string;
  showViewAll?: boolean;
  onViewAllClick?: () => void;
  className?: string;
}

export const UpcomingEventsCard: React.FC<UpcomingEventsProps> = ({
  events,
  title = "Upcoming Events",
  showViewAll = true,
  onViewAllClick,
  className = '',
}) => {
  return (
    <Card className={className}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {showViewAll && (
          <button 
            onClick={onViewAllClick} 
            className="text-amber-500 flex items-center text-sm font-medium"
          >
            View all <ChevronRight size={16} />
          </button>
        )}
      </div>
      
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="flex">
            <div 
              className={`w-1 rounded-full mr-4 ${event.colorCode || 'bg-green-500'}`}
            ></div>
            <div>
              <h4 className="font-medium text-sm">{event.title}</h4>
              {event.description && <p className="text-sm text-gray-600">{event.description}</p>}
              <p className="text-xs text-gray-500 mt-1">{event.date} | {event.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Alert Component
export interface AlertItem {
  id: number;
  message: string;
  time: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  name?: string;
}

interface AlertsCardProps {
  alerts: AlertItem[];
  title?: string;
  className?: string;
}

export const AlertsCard: React.FC<AlertsCardProps> = ({
  alerts,
  title = "Alerts",
  className = '',
}) => {
  const getAlertColor = (type?: string) => {
    switch (type) {
      case 'success': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      case 'info': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="pb-4 border-b border-gray-100 last:border-b-0">
            <div className="flex">
              <div 
                className={`h-2 w-2 mt-2 rounded-full mr-3 ${getAlertColor(alert.type)}`}
              ></div>
              <div>
                <p className="text-sm font-medium">
                  {alert.name && <span className="font-semibold">{alert.name} </span>}
                  {alert.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};