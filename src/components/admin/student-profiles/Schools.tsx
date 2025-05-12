import React from 'react'
import SchoolCard from './SchoolCard'
import Title from '@/components/ui/Title'
import Link from 'next/link'


export default function Schools() {
  return (
    <>
    <Title className='pb-8' level={2}>Grade Levels </Title>
        <div className="flex p-8 rounded-2xl flex-wrap h-[100vh] bg-white  mx-auto  gap-12">
          <Link href={'/admin/student-profiles/classes'}>
            <SchoolCard
              imageSrc="/school.png"
              title="Blue Hills Campus"
              subtitle="2–6 Years"
            />
          </Link>
          <Link href={'/admin/student-profiles/classes'}>
            <SchoolCard
              imageSrc="/school.png"
              title="Blue Hills Campus"
              subtitle="3–23 Months"
            />
          </Link>
        </div>
    </>
  )
}
