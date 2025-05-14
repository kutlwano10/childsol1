'use client'
import React from "react";
import Profile from "./Profile";
import { AlertsCard } from "./AlertsCard";
import Title from "../../ui/Title";
import { DailyReportCard } from "./DailyReportCard";
import { AttendanceMealsCard } from "./AttendanceMealsCard";
import { UpcomingEventsCard } from "./UpcomingEventsCard";
import ButtonUi from "@/components/ui/ButtonUi";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter()
  return (
    <div className="space-y-6">
      <h1 className="text-[var(--color-primary)] pt-6 font-medium">
        Welcome Back , Evan
      </h1>
      <Title className="" level={2}>
        Dashboard
      </Title>

      <div className=" flex h-full gap-12 flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full  lg:w-2/2">
          <div className="h-full">
            <Profile />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full min-h-full lg:w-1/3">
          <AlertsCard />
          {/* <UpcomingEventsCard events={upcomingEvents} /> */}
        </div>
      </div>
      <div className="flex h-full gap-12 flex-col md:flex-row">
        <div className="w-full  lg:w-2/2">
          <div className="flex items-center justify-between">
            <Title className="" level={4}>
              Daily Reports
            </Title>
            <ButtonUi onClick={()=> router.push('/parent/reports')} variant="text" >View All Reports</ButtonUi>
          </div>
        </div>
        <div className="w-full bg-white h-full lg:w-1/3">
          
        </div>
      </div>

      <div className=" flex  gap-12 flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full  lg:w-2/2">
          <div className="bg-white w-full rounded-3xl">
            <DailyReportCard />
            <AttendanceMealsCard />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full  min-h-full lg:w-1/3">
          <UpcomingEventsCard />
        </div>
      </div>
    </div>
  );
}
