import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import  Input  from "@/components/ui/Input";
import  Button  from "@/components/ui/Button";
// import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, PlusIcon } from "lucide-react";

import React from "react";

type ReportFormProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export default function ReportForm({ showModal, setShowModal }: ReportFormProps) {
  return (
    <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
      <DialogContent className="max-w-4xl max-h-screen overflow-y-auto bg-[#F9FAFB] p-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-4">Create Report</DialogTitle>
        </DialogHeader>

        {/* Grid Layout for Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Input placeholder="Enter Child's name" className="bg-white text-sm" />
          <Select>
            <SelectTrigger className="bg-white text-sm">
              <SelectValue placeholder="Select Behaviour" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="happy">Happy</SelectItem>
              <SelectItem value="sad">Sad</SelectItem>
              <SelectItem value="playful">Playful</SelectItem>
            </SelectContent>
          </Select>

          <div className="col-span-1 md:col-span-2 flex gap-4 items-center">
            <Button variant="outline" className="bg-white hover:text-white text-sm w-full justify-between">
              Select Date
              <CalendarIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 col-span-1 md:col-span-2">
            <Input placeholder="Checkin" className="bg-white text-sm" />
            <Input placeholder="Checkout" className="bg-white text-sm" />
          </div>
        </div>

        {/* Daily Meals */}
        <div className="space-y-2 mb-4">
          <h2 className="font-semibold text-md">Daily Meals</h2>
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-3">
              <Input placeholder="Break Fast" className="bg-white text-sm" />
              <Input placeholder="08:00" className="bg-white text-sm" />
              <Input placeholder="Macaroni & Cheese with Steamed Carrots" className="bg-white text-sm" />
              <Select>
                <SelectTrigger className="bg-white text-sm">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="finished">Finished</SelectItem>
                  <SelectItem value="not-finished">Not Finished</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
          <Button variant="text" className="text-[#FFA726] hover:bg-transparent text-sm">
            <PlusIcon className="w-4 h-4 mr-1" /> Add Item
          </Button>
        </div>

        {/* Daily Activities */}
        <div className="space-y-2 mb-4">
          <h2 className="font-semibold text-md">Daily Activities</h2>
          {["Role-Playing & Dress-Up", "Arts and Crafts", "Role-Playing & Dress-Up"].map((activity, idx) => (
            <div key={idx} className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Input value={activity} className="bg-white text-sm col-span-2" readOnly />
              <Select>
                <SelectTrigger className="bg-white text-sm">
                  <SelectValue placeholder="Did not Participate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="participated">Participated</SelectItem>
                  <SelectItem value="not-participated">Did not Participate</SelectItem>
                  <SelectItem value="distracted">Distracted</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
          <Button variant="text" className="text-[#FFA726] hover:bg-transparent text-sm">
            <PlusIcon className="w-4 h-4 mr-1" /> Add Item
          </Button>
        </div>

        {/* Assessments */}
        <div className="space-y-2 mb-4">
          <h2 className="font-semibold text-md">Assessments</h2>
          <div className="grid grid-cols-4 gap-3">
            <Input value="Math - Addition and Subtraction" className="bg-white text-sm col-span-1" readOnly />
            <Input value="15 min" className="bg-white text-sm" readOnly />
            <Input value="pass" className="bg-white text-sm" readOnly />
            <Input value="75%" className="bg-white text-sm" readOnly />
          </div>
          <Button variant="text" className="text-[#FFA726] hover:bg-transparent text-sm">
            <PlusIcon className="w-4 h-4 mr-1" /> Add Item
          </Button>
        </div>

        {/* Comment Box */}
        <div className="mt-4">
          {/* <Textarea placeholder="Type your message here..." className="bg-white text-sm" /> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}

