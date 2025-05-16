"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Input from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import ButtonUi from "@/components/ui/ButtonUi";
import { Calendar } from "@/components/ui/calendar"; // Assuming this is your new calendar
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { today, CalendarDate } from "@internationalized/date";

type AddEventProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export default function AddEventModal({
  showModal,
  setShowModal,
}: AddEventProps) {
  const [date, setDate] = React.useState<CalendarDate | undefined>(today("en-US"));

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium">Add Event</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-2">
          {/* Event Name */}
          <div className="space-y-2">
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              id="eventName"
              placeholder="Enter the event name"
              className="w-full"
            />
          </div>

          {/* Duration and Deadline */}
          <div className="grid grid-cols-2 gap-4">
            {/* Estimate Duration */}
            <div className="space-y-2">
              <Label>Estimate</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">1 hour</SelectItem>
                  <SelectItem value="2h">2 hours</SelectItem>
                  <SelectItem value="4h">4 hours</SelectItem>
                  <SelectItem value="1d">1 day</SelectItem>
                  <SelectItem value="2d">2 days</SelectItem>
                  <SelectItem value="1w">1 week</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Deadline Date using new Calendar */}
            <div className="space-y-2">
              <Label>Deadline</Label>
              <Calendar value={date} onChange={setDate} />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <ButtonUi className="px-6">Add</ButtonUi>
        </div>
      </DialogContent>
    </Dialog>
  );
}
