"use client";

import React, { useState } from "react";

import { AttendanceMealsCard } from "@/components/parent/dashboard/AttendanceMealsCard";
import { DailyReportCard } from "@/components/parent/dashboard/DailyReportCard";
import Title from "@/components/ui/Title";
import CommentsCard from "./CommentsCard";
import ReportsHistory from "./ReportHistory";
import Activities from "@/components/parent/dashboard/Activities";

const initialComments = [
  {
    id: "1",
    author: {
      name: "Mrs Lee",
      avatar: "/Profile.png", // Replace with actual image path
    },
    content:
      "Today, Ayanda had a wonderful day! They were full of energy and participated enthusiastically in all activities. They especially enjoyed [activity e.g., storytime or painting] and showed great focus. During playtime, they interacted well with their friends, sharing and taking turns. Overall, a happy and productive day!",
    timestamp: "30m ago",
  },
  {
    id: "2",
    author: {
      name: "Mrs Lee",
      avatar: "/Profile.png", // Replace with actual image path
    },
    content:
      "Today, Ayanda had a wonderful day! They were full of energy and participated enthusiastically in all activities. They especially enjoyed [activity e.g., storytime or painting] and showed great focus. During playtime, they interacted well with their friends, sharing and taking turns. Overall, a happy and productive day!",
    timestamp: "30m ago",
  },
  {
    id: "3",
    author: {
      name: "Evan",
      avatar: "",
    },
    content:
      "Thank you for the update! I'm so happy to hear that Ayanda had a great day and enjoyed the activities. We appreciate all the care and support from the teachers. Looking forward to another wonderful day tomorrow!",
    timestamp: "2m ago",
  },
];

export default function Reports() {
  const [comments, setComments] = useState(initialComments);

  const handleSendComment = (message: string) => {
    const newComment = {
      id: Date.now().toString(),
      author: {
        name: "You", // Replace with actual user name
        avatar: "", // Replace with actual avatar URL or leave empty for initial
      },
      content: message,
      timestamp: "Just now",
    };

    setComments([...comments, newComment]);
  };

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
        {/* <UpcomingEventsCard /> */}
        <CommentsCard comments={comments} onSendComment={handleSendComment} />
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
