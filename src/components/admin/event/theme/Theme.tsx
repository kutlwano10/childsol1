'use client'

import React from "react";
import { Calendar, Theme } from "./Calendar";
import ThemeModal from "./CreateThemeModal";
import { PlusCircle } from "lucide-react";
import BackButton from "@/components/ui/BackButton";
import Title from "@/components/ui/Title";

export default function ThemeCalendar() {
  const [themes, setThemes] = React.useState<Theme[] >([
    {
      id: "1",
      name: "Holidays",
      dates: [
        new Date(2024, 3, 1),
        new Date(2024, 3, 2),
        new Date(2024, 3, 3),
        new Date(2024, 3, 4),
        new Date(2024, 3, 7),
      ],
      color: "#F7A400",
    },
    {
      id: "2",
      name: "Autumn",
      dates: [
        new Date(2024, 3, 8),
        new Date(2024, 3, 9),
        new Date(2024, 3, 10),
        new Date(2024, 3, 11),
      ],
      color: "#E67C00",
    },
    {
      id: "3",
      name: "Easter",
      dates: [
        new Date(2024, 3, 14),
        new Date(2024, 3, 15),
        new Date(2024, 3, 16),
        new Date(2024, 3, 17),
        new Date(2024, 3, 18),
      ],
      color: "#FF9F1C",
    },
    {
      id: "4",
      name: "Planet Earth",
      dates: [
        new Date(2024, 3, 21),
        new Date(2024, 3, 22),
        new Date(2024, 3, 23),
        new Date(2024, 3, 24),
        new Date(2024, 3, 25),
      ],
      color: "#2F9E44",
    },
    {
      id: "5",
      name: "Revision",
      dates: [
        new Date(2024, 3, 28),
        new Date(2024, 3, 29),
        new Date(2024, 3, 30),
        new Date(2024, 4, 1),
        new Date(2024, 4, 2),
      ],
      color: "#4263EB",
    },
  ]);
  
  const [showModal, setShowModal] = React.useState(false);
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [editingTheme, setEditingTheme] = React.useState<Theme | null>(null);

  const handleDateSelect = (date: Date) => {
    const exists = selectedDates.find(
      (d) => d.toDateString() === date.toDateString()
    );

    if (exists) {
      setSelectedDates(
        selectedDates.filter((d) => d.toDateString() !== date.toDateString())
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const handleCreateTheme = (theme: { name: string; dates: Date[]; color: string }) => {
    if (editingTheme) {
      // Update existing theme
      setThemes(
        themes.map((t) =>
          t.id === editingTheme.id
            ? { ...t, name: theme.name, dates: theme.dates, color: theme.color }
            : t
        )
      );
      setEditingTheme(null);
    } else {
      // Create new theme
      const newTheme: Theme = {
        id: `theme-${Date.now()}`,
        name: theme.name,
        dates: theme.dates,
        color: theme.color,
      };
      setThemes([...themes, newTheme]);
    }
    setSelectedDates([]);
  };

  const handleEditTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      setEditingTheme(theme);
      setShowModal(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <Title level={2} className="text-2xl font-bold">Theme Calendar</Title>
        <div className="flex items-center">
          <BackButton />
          <button
            className="flex items-center gap-2 bg-[#F7A400] text-white px-4 py-2 rounded-lg hover:bg-[#e69500] transition-colors"
            onClick={() => {
              setEditingTheme(null);
              setShowModal(true);
            }}
          >
            <PlusCircle size={20} />
            <span>Add Theme</span>
          </button>
        </div>
      </div>

      <Calendar
        themes={themes}
        onDateSelect={handleDateSelect}
        selectedDates={selectedDates}
        onEditTheme={handleEditTheme}
      />

      <ThemeModal
        showModal={showModal}
        setShowModal={setShowModal}
        onCreateTheme={handleCreateTheme}
        // editTheme={editingTheme}
      />
    </div>
  );
}
