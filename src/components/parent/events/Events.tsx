"use client";
import React from "react";
import EventCard from "./EventsCard";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";
import { useRouter, useSearchParams } from "next/navigation";
import EventCalender from "./EventCalender";

export default function Events() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  const handleViewCalendar = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "calendar");
    router.push(`?${params.toString()}`);
  };

  const handleBack = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("view");
    router.push(`?${params.toString()}`);
  };

  if (view === "calendar") {
    return (
      <div>
        <div className="flex justify-between pb-8">
          <Title level={2}>Calendar View</Title>
          <Button variant="text" onClick={handleBack} size="md" type="button">
            Back to Events
          </Button>
        </div>
        <EventCalender />
      </div>
    );
  }

  return (
    <div>
      <div className="w-full flex justify-between pb-8">
        <Title level={2}>Upcoming Events</Title>
        <Button onClick={handleViewCalendar} size="md" type="button">
          View Calendar
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <EventCard
          title="Upcoming Parents evening"
          date="Today"
          time="6:00 PM"
          remainingTime="4h"
          color="blue"
        />
        <EventCard
          title="Anna's Birthday"
          date="Today"
          time="5:00 PM"
          remainingTime="2h"
          color="purple"
        />
      </div>
    </div>
  );
}
