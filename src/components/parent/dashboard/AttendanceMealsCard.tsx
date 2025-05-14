export function AttendanceMealsCard() {
    const meals = [
      {
        type: 'Breakfast',
        time: '08:00',
        menu: 'Macaroni & Cheese with Steamed Carrots',
        status: 'Partially Ate',
      },
      {
        type: 'Snack',
        time: '11:00',
        menu: 'Fresh Fruit Slices',
        status: 'Ate',
      },
      {
        type: 'Lunch',
        time: '01:00',
        menu: 'Grilled Chicken with Mashed Potatoes & Green Beans',
        status: 'Refused',
      },
      {
        type: 'Snack',
        time: '03:00',
        menu: 'Yogurt',
        status: 'Partially Ate',
      },
    ];
  
    const getStatusBadge = (status: string) => {
      const base = 'text-xs px-2 py-1 rounded-full font-medium';
      switch (status) {
        case 'Ate':
          return `${base} bg-green-100 text-green-700`;
        case 'Partially Ate':
          return `${base} bg-yellow-100 text-yellow-700`;
        case 'Refused':
          return `${base} bg-red-100 text-red-600`;
        default:
          return `${base} bg-gray-100 text-gray-500`;
      }
    };
  
    return (
      <div className=" p-6 w-full ">
        <div className="">
  
          {/* Meals Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Meals</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="text-gray-600 border-b whitespace-nowrap">
                    <th className="py-2 pr-4">Meal Type</th>
                    <th className="py-2 pr-4">Time</th>
                    <th className="py-2 pr-4">Menu</th>
                  </tr>
                </thead>
                <tbody>
                  {meals.map((meal, idx) => (
                    <tr key={idx} className=" ">
                      <td className="py-3 pr-4">{meal.type}</td>
                      <td className="py-3 pr-4">{meal.time}</td>
                      <td className="py-3 pr-4 text-gray-700">{meal.menu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  