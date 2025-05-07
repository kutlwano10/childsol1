'use client'

import React from 'react'
import Title from '@/components/ui/Title'
import Button from '@/components/ui/Button'
import PaymentHistoryTable from './PaymentsHistoryTable'
import PaymentChart from './PaymentChart'
import PayrollSummaryChart from './PayrollSummaryChart'
import { useRouter } from 'next/navigation'




export default function Payments() {
    const route = useRouter()
  return (
    <div>
        <div className='flex items-center justify-between pb-12'>
            <Title level={2}>Payments</Title>
            <Button fullWidth type='button'>Create Invoice</Button>
        </div>
        <div className='flex h-full gap-12 pb-12'>
            <div className='flex-2/2 shadow-sm bg-white rounded-3xl'>
                <PaymentChart />
            </div>
            <div className='flex-2/4 bg-white h-full rounded-3xl'><PayrollSummaryChart /></div>

        </div>
        <PaymentHistoryTable />
    </div>
  )
}
