import React from "react";
import Profile from "./Profile";
import { AlertsCard } from "./AlertsCard";
import Title from "../ui/Title";
import { DailyReportCard } from "./DailyReportCard";
import { AttendanceMealsCard } from "./AttendanceMealsCard";
import { UpcomingEventsCard } from "./UpcomingEventsCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-[var(--color-primary)] pt-6 font-medium">
        Welcome Back , Evan
      </h1>
      <Title className="" level={2}>
        Dashboard
      </Title>
      <div className="flex h-full gap-8">
        <Profile />
        <AlertsCard />
      </div>
      <Title className="" level={4}>
        Daily Reports
      </Title>
      <div className="flex gap-8">
        <div className="bg-white w-full rounded-3xl">
          <DailyReportCard />
          <AttendanceMealsCard />
        </div>
        <UpcomingEventsCard />
      </div>
    </div>
  );
}
