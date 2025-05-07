import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full  mb-6">
      <div className="flex w-md items-center bg-white rounded-xl px-3 py-2">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full outline-none px-2 py-1 text-sm text-gray-600"
        />
      </div>
      
      <div className="flex items-center">
        <div className="mr-4">
          <button className="rounded-xl bg-white p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center bg-white rounded-xl p-3">
          <span className="font-medium text-sm">Evan Ndlovu</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-500 ml-1" />
        </div>
      </div>
    </div>
  )
}