"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import Button from "@/components/ui/ButtonUi";
import { Textarea } from "@/components/ui/textarea";
import Input from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

type AnnouncementProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export default function CreateAnnouncement({
  showModal,
  setShowModal,
}: AnnouncementProps) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("all");

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[480px] rounded-xl px-6 py-5">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Create Announcement
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {/* Title */}
          <div>
            <label className="text-sm text-gray-700">
              Title of Announcement
            </label>
            <Input
              placeholder="Announcement Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Recipient Group */}
          <div>
            <label className="text-sm text-gray-700 mb-2 block">
              Recipient Group
            </label>
            <RadioGroup
              defaultValue={recipient}
              className="grid grid-cols-2 gap-2"
              onValueChange={(val) => setRecipient(val)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2-6" id="two-six" />
                <label htmlFor="two-six">2–6 Years</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3-23" id="three-twenty-three" />
                <label htmlFor="three-twenty-three">3–23 Months</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="parents" id="parents" />
                <label htmlFor="parents">All Parents</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="staff" id="staff" />
                <label htmlFor="staff">Staff</label>
              </div>
              <div className="flex items-center space-x-2 col-span-2">
                <RadioGroupItem value="all" id="all" />
                <label htmlFor="all">All Recipients</label>
              </div>
            </RadioGroup>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Message</label>
            <Textarea
              placeholder="Type your message here..."
              className="resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
        </div>

        {/* Send Button */}
        <div className="flex justify-end mt-4">
          <Button className="bg-[#FDB022] hover:bg-[#fcb022]/90 text-white rounded-xl px-6 py-2">
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
