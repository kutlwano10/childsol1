import React from "react";
import { ChevronLeft, ChevronRight, Edit3Icon } from "lucide-react";
import { cn } from "@/lib/utils";

type CalendarProps = {
  themes?: Theme[];
  onDateSelect?: (date: Date) => void;
  selectedDates?: Date[];
  onEditTheme?: (themeId: string) => void;
};

export type Theme = {
  id: string;
  name: string;
  dates: Date[];
  color?: string;
};

export const Calendar = ({
  themes = [],
  onDateSelect,
  selectedDates = [],
  onEditTheme,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  // Navigation functions
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Helper function to format month and year
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Get first day of month and last day
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // Get day of week of first day (0 is Sunday)
    const firstDayOfWeek = firstDayOfMonth.getDay();
    
    // Get previous month's last few days to fill the first row
    const daysFromPrevMonth = firstDayOfWeek;
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Add days from previous month
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
      });
    }
    
    // Add days from current month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }
    
    // Add days from next month to complete the grid
    const totalDaysNeeded = 42; // 6 rows * 7 days
    const remainingDays = totalDaysNeeded - days.length;
    
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }
    
    return days;
  };

  // Get all days for the current calendar view
  const calendarDays = generateCalendarDays();

  // Helper to format date as YYYY-MM-DD for comparison
  const formatDateForComparison = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  // Check if a date is selected
  const isDateSelected = (date: Date) => {
    return selectedDates.some(
      selectedDate => formatDateForComparison(selectedDate) === formatDateForComparison(date)
    );
  };

  // Find theme for a date
  const findThemeForDate = (date: Date) => {
    const formattedDate = formatDateForComparison(date);
    return themes.find(theme => 
      theme.dates.some(themeDate => 
        formatDateForComparison(themeDate) === formattedDate
      )
    );
  };

  // Check if date is start of theme
  const isStartOfTheme = (date: Date, theme: Theme) => {
    if (!theme) return false;
    
    const formattedDate = formatDateForComparison(date);
    const sortedDates = [...theme.dates].sort((a, b) => a.getTime() - b.getTime());
    
    return formatDateForComparison(sortedDates[0]) === formattedDate;
  };

  // Check if date is end of theme
  const isEndOfTheme = (date: Date, theme: Theme) => {
    if (!theme) return false;
    
    const formattedDate = formatDateForComparison(date);
    const sortedDates = [...theme.dates].sort((a, b) => a.getTime() - b.getTime());
    
    return formatDateForComparison(sortedDates[sortedDates.length - 1]) === formattedDate;
  };

  // Check if date is middle of theme
  const isMiddleOfTheme = (date: Date, theme: Theme) => {
    if (!theme) return false;
    
    return !isStartOfTheme(date, theme) && !isEndOfTheme(date, theme);
  };

  // Get day number as string (or empty string for other month's days)
  const getDayNumber = (day: { date: Date; isCurrentMonth: boolean }) => {
    return day.isCurrentMonth ? day.date.getDate().toString() : "";
  };

  // Days of the week
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button 
          onClick={prevMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold">{formatMonthYear(currentMonth)}</h2>
        <button 
          onClick={nextMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {/* Week Days Header */}
        {weekDays.map((day) => (
          <div key={day} className="py-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarDays.map((day, index) => {
          const theme = findThemeForDate(day.date);
          const isStart = theme && isStartOfTheme(day.date, theme);
          const isEnd = theme && isEndOfTheme(day.date, theme);
          const isMiddle = theme && isMiddleOfTheme(day.date, theme);
          const themeColor = theme?.color || "#F7A400";

          return (
            <div
              key={index}
              className={cn(
                "relative h-24 border-t border-r p-1",
                index % 7 === 0 && "border-l",
                index >= 35 && "border-b",
                !day.isCurrentMonth && "bg-gray-50"
              )}
              onClick={() => onDateSelect && onDateSelect(day.date)}
            >
              {/* Day Number */}
              <div className={cn(
                "text-sm font-medium",
                !day.isCurrentMonth && "text-gray-400",
                isDateSelected(day.date) && "text-orange-600"
              )}>
                {getDayNumber(day)}
              </div>

              {/* Theme Display */}
              {theme && (
                <div 
                  className={cn(
                    "absolute bottom-1 h-8 flex items-center",
                    isStart && "rounded-l-md pl-2 ml-1",
                    isEnd && "rounded-r-md pr-2 mr-1",
                    isMiddle && "",
                    isStart && isEnd && "rounded-md px-2 mx-1 w-[calc(100%-0.5rem)]",
                    isStart && !isEnd && "left-0 w-[calc(100%)]",
                    !isStart && isEnd && "right-0 w-[calc(100%)]",
                    !isStart && !isEnd && "w-full"
                  )}
                  style={{ backgroundColor: themeColor }}
                >
                  {isStart && (
                    <span className="text-xs text-white truncate">{theme.name}</span>
                  )}
                  
                  {isStart && onEditTheme && (
                    <button
                      className="ml-auto flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditTheme(theme.id);
                      }}
                    >
                      <Edit3Icon className="text-white hover:w-8 hover:h-8 hover:animate-pulse" />
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};