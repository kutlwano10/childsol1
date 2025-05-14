export function UpcomingEventsCard() {
    const events = [
      { id: 1, title: 'Upcoming Parents evening', time: 'Today | 5:00 PM' },
      { id: 2, title: 'Market day', time: 'Today | 6:00 PM' },
      { id: 3, title: "Ray's Birthday", time: 'Tomorrow | 2:00 PM' },
    ];
  
    return (
      <div className="bg-white h-full rounded-3xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Upcoming Events</h3>
          <button className="text-sm text-primary font-medium">View all</button>
        </div>
        
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-center ">
              <div className="h-15 w-2 mt-2 rounded-4xl bg-primary mr-3"></div>
              <div className="space-y-4">
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-gray-500">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }