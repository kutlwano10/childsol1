"use client";
import Button from "@/components/ui/ButtonUi";
import Title from "@/components/ui/Title";
import React, { useState } from "react";
import EventsCard from "./EventsCard";
import { useRouter, useSearchParams } from "next/navigation";
import EventCalender from "@/components/parent/events/EventCalender";
import AddEventModal from "./AddEventModal";
import BackButton from "@/components/ui/BackButton";

export default function Events() {

  const handleDelete = (id: string) => {
    console.log(`Deleting event with id: ${id}`);
  };

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  const handleViewCalendar = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", "calendar");
    router.push(`?${params.toString()}`);
  };

  if (view === "calendar") {
    return (
      <div>
        <div className="flex justify-between pb-8">
          <Title level={2}>Calendar View</Title>
          <BackButton />
        </div>
        <EventCalender />
      </div>
    );
  }

  return (
    <div className="py-4">
      <AddEventModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex pb-12 justify-between">
        <Title level={2}>Upcoming Events</Title>
        <div className="flex gap-4">
          <BackButton />
          <Button onClick={()=> router.push('/admin/events/theme')} type="button">
            Theme
          </Button>
          <Button onClick={handleViewCalendar} fullWidth type="button">
            View Calender
          </Button>
          <Button onClick={() => setShowModal(true)} fullWidth type="button">
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
          onEdit={ () => setShowModal(true)}
          onDelete={handleDelete}
        />
        <EventsCard
          id="2"
          title="Anna's Birthday"
          date="Today"
          time="5:00 PM"
          timeRemaining="2h"
          accentColor="bg-purple-500"
          onEdit={()=> setShowModal(true)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
