import { useState } from 'react';

// Define types for our calendar objects
type CalendarEvent = {
  date: Date;
  name: string;
  duration: string;
};

type CalendarDay = {
  day: number;
  currentMonth: boolean;
  date: Date;
};

type CalendarWeek = CalendarDay[];

const EventCalender: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 3, 1)); // April 2024
  
  // Calendar events for April 2024
  const events: CalendarEvent[] = [
    { date: new Date(2024, 3, 8), name: "Anna's Birthday", duration: '3h' },
    { date: new Date(2024, 3, 16), name: "Parents Evening", duration: '3h' },
    { date: new Date(2024, 3, 28), name: "Ray's Birthday", duration: '3h' }
  ];
  
  const daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  
  // Navigate to previous month
  const prevMonth = (): void => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() - 1);
    setCurrentDate(date);
  };
  
  // Navigate to next month
  const nextMonth = (): void => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() + 1);
    setCurrentDate(date);
  };
  
  // Get month and year for header
  const getMonthYear = (): string => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };
  
  // Generate calendar days for current month view
  const generateCalendarDays = (): CalendarWeek[] => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // Get day of week for first day (0 = Sunday, 1 = Monday, etc.)
    // Convert to Monday-based index (0 = Monday, 6 = Sunday)
    let firstWeekday = firstDayOfMonth.getDay() - 1;
    if (firstWeekday < 0) firstWeekday = 6;
    
    const totalDays = lastDayOfMonth.getDate();
    const previousMonthLastDay = new Date(year, month, 0).getDate();
    
    const days: CalendarDay[] = [];
    
    // Fill in days from previous month if needed
    for (let i = 0; i < firstWeekday; i++) {
      days.push({
        day: previousMonthLastDay - firstWeekday + i + 1,
        currentMonth: false,
        date: new Date(year, month - 1, previousMonthLastDay - firstWeekday + i + 1)
      });
    }
    
    // Fill in days for current month
    for (let i = 1; i <= totalDays; i++) {
      days.push({
        day: i,
        currentMonth: true,
        date: new Date(year, month, i)
      });
    }
    
    // Fill in days from next month if needed
    const remainingCells = 5 * 7 - days.length; // 5 rows, 7 days per week
    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        day: i,
        currentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }
    
    // Group days into weeks
    const weeks: CalendarWeek[] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    
    return weeks;
  };
  
  // Find events for a specific date
  const getEventsForDate = (date: Date): CalendarEvent[] => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };
  
  // Format date to display only weekdays (Mon-Fri)
  const formatWeeks = (weeks: CalendarWeek[]): CalendarWeek[] => {
    return weeks.map(week => week.filter((_, index) => index < 5));
  };
  
  const calendarWeeks = formatWeeks(generateCalendarDays());
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md  mx-auto">
      {/* Calendar header with month navigation */}
      <div className="flex items-center justify-between mb-8">
        <button 
          className="text-blue-500 hover:text-blue-700" 
          onClick={prevMonth}
        >
          ←
        </button>
        <h2 className="text-xl font-medium text-gray-700">{getMonthYear()}</h2>
        <button 
          className="text-blue-500 hover:text-blue-700" 
          onClick={nextMonth}
        >
          →
        </button>
      </div>

      {/* Calendar weekday headers */}
      <div className="grid grid-cols-5 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-sm font-medium text-gray-500 p-2 text-center">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      {calendarWeeks.map((week, weekIndex) => (
        <div key={`week-${weekIndex}`} className="grid grid-cols-5 gap-1 mb-1">
          {week.map((day, dayIndex) => (
            <div
              key={`day-${weekIndex}-${dayIndex}`}
              className={`border rounded-md p-2 min-h-24 ${
                day.currentMonth ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {(day.day || day.day === 0) && (
                <>
                  <div className="text-sm font-medium mb-1">{day.day}</div>
                  {getEventsForDate(day.date).map((event, eventIndex) => (
                    <div
                      key={`event-${weekIndex}-${dayIndex}-${eventIndex}`}
                      className="bg-purple-100 border-l-4 border-purple-500 p-1 rounded-sm mb-1"
                    >
                      <div className="text-xs text-purple-800">{event.name}</div>
                      <div className="text-xs text-purple-600">{event.duration}</div>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventCalender;