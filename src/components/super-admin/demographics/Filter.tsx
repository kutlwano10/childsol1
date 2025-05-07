'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


export default function Filter() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const currentSchool = searchParams.get('school') || 'Blue Hills Campus'
    const currentTopic = searchParams.get('topic') || "Registration and Deregistrations"

    const schools = [
        "Blue Hills Campus",
        "Green Valley Campus",
        "Redwood Academy Campus"
    ]

    const topics = [
        {value: "registration", label: "Registration and Deregistrations"},
        {value: "gender", label: "Gender and Age"},
        {value: "class", label: "Class allocation"},
        {value: "location", label: "Residential location"},
        {value: "marital", label: "Marital Status"},

    ]

    const handleFilterChange = (type: 'school' | 'topic', value: string)=> {
        const params = new URLSearchParams(searchParams.toString())
        params.set(type, value)
        router.push(`?${params.toString()}`)

    

    }


  return (
    <div className='flex gap-6'>
        {/* SCHOOLS */}
        <div className="p-1 bg-white shadow-md rounded-4xl max-w-md">
          <select
            value={currentSchool}
            onChange={(e)=> handleFilterChange('school', e.target.value)}
            className="p-2  w-full"
          >
            {schools.map((school) => (
                <option key={school} value={school}>{school}</option>
            ))}
        
          </select>
        </div>

        {/* TOPIC */}

        <div className="p-1 bg-white shadow-md rounded-4xl max-w-md">
          <select
            value={currentTopic}
            onChange={(e)=>handleFilterChange('topic', e.target.value)}
            className="p-2  w-full"
          >
            {topics.map((topic) => (
                <option key={topic.value} value={topic.value}>{topic.label}</option>
            ))}
        
          </select>
        </div>
    </div>
  )
}
