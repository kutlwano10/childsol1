import React from 'react'

export default function Assessments() {
  return (
    <div className='p-6'>
        <h2 className="text-xl font-medium text-gray-700 mb-4">Assessments</h2>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center">
            <div className="w-1/3">
              <h3 className="text-sm text-gray-500">Task Name</h3>
              <p className="mt-1 text-gray-700">Math - Addition and Subtraction</p>
            </div>
            <div className="w-1/3">
              <h3 className="text-sm text-gray-500">Test Duration</h3>
              <p className="mt-1 text-gray-700">15 min</p>
            </div>
            <div className="w-1/6 flex justify-center">
              <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full">Pass</span>
            </div>
            <div className="w-1/6 flex justify-center">
              <div className="relative w-12 h-12">
                {/* Circle background */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                {/* Progress circle */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E6E6E6"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                      strokeDashoffset="0"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700">
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
