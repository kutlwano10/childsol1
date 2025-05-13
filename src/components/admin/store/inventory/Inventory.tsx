'use client'
import Title from '@/components/ui/Title'
import React from 'react'
import SalesChart from './SalesChart'
import SalesSummary from './SalesSummary'
import BackButton from '@/components/ui/BackButton'
import { CurrentInventory } from './CurrentInventory'

export default function Inventory() {
  return (
    <div className='space-y-8'>
        <div className='flex items-center justify-between'>
            <Title level={2}>Inventory</Title>
            <BackButton/>
        </div>
        <div className=" flex h-full gap-12 flex-col md:flex-row">
          {/* LEFT */}
          <div className="w-full  lg:w-2/2">
            <div className="h-full">
              <SalesChart/>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-1/3">
            <SalesSummary/>
            
          </div>
        </div>
        <CurrentInventory />
    </div>
  )
}
