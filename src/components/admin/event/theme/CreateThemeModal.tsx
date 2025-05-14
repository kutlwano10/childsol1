import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/Input";

import { Calendar } from "@/components/ui/calendar";

type ThemeProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export default function CreateThemeModal({
  showModal,
  setShowModal,
}: ThemeProps) {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [name, setName] = React.useState("");

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

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

  return (
    <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
      <DialogContent className="sm:max-w-[400px] rounded-2xl px-6 py-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Create a theme
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Theme Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Name of theme
            </label>
            <Input
              placeholder="Enter the name of theme"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Calendar */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Select dates
            </label>
            <Calendar
              mode="multiple"
              selected={selectedDates}
              onSelect={() => handleDateSelect}
              className="rounded-md border"
              fromMonth={new Date(2025, 8)} // September is month 8 (0-based)
              defaultMonth={new Date(2025, 8)}
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button className="w-full bg-[#F7A400] text-white hover:bg-[#e69500]">
            Create Theme
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
