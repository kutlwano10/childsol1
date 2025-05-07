"use client";

import React, { useState } from "react";
import AttendanceCheck from "./AttendanceCheck";
import Title from "../../ui/Title";
import AttandanceHistoryTable from "./AttendanceHistoryTable";

export default function Attendance() {
  const [checkInStatus, setCheckInStatus] = useState<"pending" | "completed">(
    "pending"
  );
  const [checkOutStatus, setCheckOutStatus] = useState<"pending" | "completed">(
    "pending"
  );

  // Get current date and time
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const handleCheckIn = () => {
    setCheckInStatus("completed");
  };

  const handleCheckOut = () => {
    setCheckOutStatus("completed");
  };
  return (
    <div className="space-y-8">
      <Title className="" level={2}>
        Attendance
      </Title>
      <div className="bg-white p-6 pb-4 rounded-3xl">
        <AttendanceCheck
          type="in"
          date={formattedDate}
          time={currentTime}
          status={checkInStatus}
          message="Please don't forget to check your child-in."
          onCheckAction={handleCheckIn}
        />
        {/* Only show checkout option after check-in is completed */}
        {checkInStatus === "completed" && (
          <AttendanceCheck
            type="out"
            date={formattedDate}
            time={currentTime}
            status={checkOutStatus}
            message="Don't forget to check your child-out before leaving."
            onCheckAction={handleCheckOut}
          />
        )}
      </div>

      <AttandanceHistoryTable />
    </div>
  );
}
