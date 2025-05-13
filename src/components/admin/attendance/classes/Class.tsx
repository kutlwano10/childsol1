"use client";

import React, { useState } from "react";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";
import ClassAttendance from "../ClassAttendance";
import TeacherProfile from "../TeacherProfile";
import AttendanceChart from "../AttendanceChart";
import AttendanceStats from "../AttendanceStats";
import StaffAttendance from "@/components/staff/attendance/StaffAttendance";
import BackButton from "@/components/ui/BackButton";


export default function Class() {
  const [activeTab, setActiveTab] = useState<"students" | "staff">("students");

  const isClassesTab = activeTab === "students";

  const attendanceData = [
  { day: 'Monday', present: 20, absent: 5 },
  { day: 'Tuesday', present: 19, absent: 6 },
  { day: 'Wednesday', present: 22, absent: 3 },
  { day: 'Thursday', present: 18, absent: 7 },
  { day: 'Friday', present: 15, absent: 10 },
];

const trendData = [
  { date: 'Mon', value: 80 },
  { date: 'Tue', value: 76 },
  { date: 'Wed', value: 88 },
  { date: 'Thu', value: 72 },
  { date: 'Fri', value: 60 },
  { date: 'Sat', value: 65 },
  { date: 'Sun', value: 70 },
];

  return (
    <div className="space-y-8">
      <div className="flex  justify-between items-center">
        {/* Dynamic Title */}
        <Title level={1}>{isClassesTab ? "2-6 Years" : "Staff"}</Title>

        {/* Toggle Buttons */}
        <div className="bg-[#E6EDF5] gap-2 justify-center flex p-1  rounded-4xl">
          <Button
            fullWidth
            type="button"
            variant={isClassesTab ? "primary" : "text"}
            onClick={() => setActiveTab("students")}
          >
            Students
          </Button>

          <Button
            fullWidth
            type="button"
            variant={!isClassesTab ? "primary" : "text"}
            onClick={() => setActiveTab("staff")}
          >
            Staff
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {isClassesTab ? (
            <BackButton/>
             
          ) : (
            <>
              <div className="flex gap-2">
                
                <Button type="button" variant="primary">
                  Create Profile
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <TeacherProfile 
            name="Mrs Lee Jane" 
            role="Class Teacher" 
            initial="LJ" 
            learnerCount={40} 
          />
        </div>
        <div>
          <AttendanceStats 
            present={23} 
            absent={2} 
            weeklyChange="+12%" 
            trendData={trendData}
          />
        </div>
        <div>
          <AttendanceChart attendanceData={attendanceData} />
        </div>
      </div>
    </div>

      {/* Render based on active tab */}
      {isClassesTab ? <ClassAttendance /> : <StaffAttendance />}
    </div>
  );
}
