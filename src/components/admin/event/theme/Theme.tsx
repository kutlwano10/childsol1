'use client'
import BackButton from "@/components/ui/BackButton";
import ButtonUi from "@/components/ui/ButtonUi";
import Title from "@/components/ui/Title";
import React, { useState } from "react";
import CreateThemeModal from "./CreateThemeModal";
import EventsCard from "../EventsCard";
export default function Theme() {
    const [showModal, setShowModal] = useState(false)

    
const childrenThemes = [
  {
    id: "1",
    title: "Story Time",
    date: "September 16, 2025",
    time: "10:00 AM",
    timeRemaining: "3 days left",
    accentColor: "bg-yellow-400",
  },
  {
    id: "2",
    title: "Color Fun Day",
    date: "September 17, 2025",
    time: "1:00 PM",
    timeRemaining: "4 days left",
    accentColor: "bg-pink-400",
  },
  {
    id: "3",
    title: "Animal Costume Party",
    date: "September 18, 2025",
    time: "3:30 PM",
    timeRemaining: "5 days left",
    accentColor: "bg-green-500",
  },
];
  return (
    <div className="space-y-8">
        <CreateThemeModal showModal={showModal} setShowModal={()=>setShowModal(false)} />
      <div className="flex items-center justify-between ">
        <Title level={2}>Theme</Title>
        <div className="flex items-center gap-4">
          <BackButton />
          <ButtonUi onClick={()=> setShowModal(true)}>Create Theme</ButtonUi>
        </div>
      </div>

       <div className="space-y-4 grid grid-cols-2 gap-8">
      
      {childrenThemes.map((theme) => (
        <EventsCard
          key={theme.id}
          {...theme}
          onEdit={()=>setShowModal(true)}
          
        />
      ))}
    </div>
    </div>
  );
}
