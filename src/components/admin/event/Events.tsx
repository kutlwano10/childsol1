"use client";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import React from "react";
import EventsCard from "./EventsCard";

export default function Events() {
  const handleEdit = (id: string) => {
    console.log(`Editing event with id: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting event with id: ${id}`);
  };

  return (
    <div className="py-4">
      <div className="flex pb-12 justify-between">
        <Title level={2}>Upcoming Events</Title>
        <div className="flex gap-4">
          <Button fullWidth type="button">
            View Calender
          </Button>
          <Button fullWidth type="button">
            + Add Event
          </Button>
        </div>
      </div>
      <div className="flex w-full space-x-4">
        <EventsCard
          id="1"
          title="Upcoming Parents evening"
          date="Today"
          time="6:00 PM"
          timeRemaining="4h"
          accentColor="bg-blue-500"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <EventsCard
          id="2"
          title="Anna's Birthday"
          date="Today"
          time="5:00 PM"
          timeRemaining="2h"
          accentColor="bg-purple-500"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
