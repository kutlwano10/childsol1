"use client";

import React, { useState } from "react";

import { AttendanceMealsCard } from "@/components/parent/dashboard/AttendanceMealsCard";
import { DailyReportCard } from "@/components/parent/dashboard/DailyReportCard";
import Title from "@/components/ui/Title";
import ReportsHistory from "./ReportHistory";
import Activities from "@/components/parent/dashboard/Activities";
import Image from "next/image";


export default function Reports() {
 

  const reports = [
    {
      id: "1",
      studentId: "3728903",
      studentName: "Ayanda Ndlovu",
      studentInitials: "AY",
      date: "June 25, 2026",
      behavior: "Well behaved",
      checkIn: "08:00 AM",
      checkOut: "05:00 PM",
    },
    {
      id: "2",
      studentId: "3728893",
      studentName: "Ayanda Ndlovu",
      studentInitials: "AY",
      date: "June 25, 2026",
      behavior: "Well behaved",
      checkIn: "08:00 AM",
      checkOut: "05:00 PM",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Match the pagination shown in the image

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-6">
      <Title className="" level={2}>
        Daily Report
      </Title>
      <div className="flex gap-8">
        <div className="bg-white w-full rounded-3xl">
          <DailyReportCard />
          <AttendanceMealsCard />
          <Activities />
        </div>
        <Image
          src={"/Focus Star.svg"}
          alt="report"
          width={400}
          height={600}
          sizes=""
        />
      </div>
      <ReportsHistory
        reports={reports}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
