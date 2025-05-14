export function AlertsCard() {
    const alerts = [
      { id: 1, message: 'Payment successful', time: '1h ago', type: 'success' },
      { id: 2, message: 'Payment overdue. Please pay outstanding fee', time: '2h ago', type: 'error' },
      { id: 3, message: "You didn't check in child today", time: '3h ago', type: 'warning' },
    ];
  
    return (
      <div className="bg-white h-full rounded-3xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Alerts</h3>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex space-y-12 h-full">
              <div className={`h-2 w-2 mt-2 rounded-full mr-3 ${
                alert.type === 'success' ? 'bg-green-500' : 
                alert.type === 'error' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
              <div>
                <p className="text-sm font-medium">{alert.message}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    );
  }