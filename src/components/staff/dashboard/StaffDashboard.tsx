"use client";

import Title from "@/components/ui/Title";
import React from "react";
import AttendanceChart from "./AttendanceChart";

import {
  AlertsCard,
  AlertItem,
  UpcomingEventsCard,
  EventItem,
} from "@/components/CardComponents";

import ClassAttendance from "@/components/staff/attendance/ClassAttendance";
import Button from "@/components/ui/ButtonUi";

export default function StaffDashboard() {
  const upcomingEvents: EventItem[] = [
    {
      id: 1,
      title: "Upcoming Parents evening",
      date: "Today",
      time: "5:00 PM",
      colorCode: "bg-green-500",
    },
    {
      id: 2,
      title: "Market day",
      date: "Today",
      time: "6:00 PM",
      colorCode: "bg-purple-400",
    },
    {
      id: 3,
      title: "Ray's Birthday",
      date: "Tomorrow",
      time: "2:00 PM",
      colorCode: "bg-purple-400",
    },
  ];

  // Sample data for Alerts (matching Image 2)
  const alerts: AlertItem[] = [
    {
      id: 1,
      name: "Evan Ndlovu's",
      message: "payment was successful",
      time: "1h ago",
      type: "success",
    },
    {
      id: 2,
      message: "Payment overdue. Please pay outstanding fee.",
      time: "2h ago",
      type: "error",
    },
    {
      id: 3,
      name: "Ayanda Ndlovu",
      message: "didnt check in today",
      time: "3h ago",
      type: "warning",
    },
    {
      id: 4,
      name: "Ayanda Ndlovu",
      message: "didnt check in today",
      time: "3h ago",
      type: "warning",
    },
  ];

  // const attendanceData = {
  //   date: "May 28, 2025",
  //   checkInData: {
  //     children: "50/23",
  //     staff: "20/18",
  //     payments: 3500
  //   },
  //   checkOutData: {
  //     children: "50/23",
  //     staff: "20/18",
  //     payments: 15000
  //   }
  // };
  return (
    <>
      <p className="py-4 text-gray-500">Welcome back , Carol</p>
      <Title className="pb-8" level={2}>
        Dashboard
      </Title>
      <div className="space-y-12">
        <div className=" flex h-full gap-12 flex-col md:flex-row">
          {/* LEFT */}
          <div className="w-full  lg:w-2/2">
            <div className="h-full">
              <AttendanceChart />
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-1/3">
            <AlertsCard alerts={alerts} />
            {/* <UpcomingEventsCard events={upcomingEvents} /> */}
          </div>
        </div>

        <div className=" flex gap-12 flex-col md:flex-row">
          {/* LEFT */}
          <div className="w-full space-y-12 lg:w-2/2">
            {/* <AttendanceSummary
              date={attendanceData.date}
              checkInData={attendanceData.checkInData}
              checkOutData={attendanceData.checkOutData}
            /> */}
            {/* <WaitingListTable /> */}
            <ClassAttendance>
              <Button variant="text">View All</Button>
            </ClassAttendance>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-1/3">
            {/* <AlertsCard alerts={alerts}/> */}
            <UpcomingEventsCard events={upcomingEvents} />
          </div>
        </div>
      </div>
    </>
  );
}
