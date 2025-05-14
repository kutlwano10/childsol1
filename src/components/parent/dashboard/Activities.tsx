import React from 'react'

export default function Activities() {
  return (
    <div className='p-6'>
        <h2 className="text-xl font-medium text-gray-700 mb-4">Activities</h2>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
              <span className="text-gray-600">Role-Playing & Dress-Up</span>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Partipated</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
              <span className="text-gray-600">Arts and Crafts</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">Did not Participate</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
              <span className="text-gray-600">Sensory Play</span>
              <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">Distracted</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
              <span className="text-gray-600">Music and Movement</span>
              <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">Distracted</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
              <span className="text-gray-600">Outdoor Play</span>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Partipated</span>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
              <span className="text-gray-600">Show and Tell</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">Did not Participate</span>
            </div>
          </div>
        </div>
      </div>
  )
}
