'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import  Input  from '@/components/ui/Input';
import  Label  from '@/components/ui/FormField';
import  Button  from '@/components/ui/Button';
import { UploadCloud } from 'lucide-react';

type ProfileFormProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export default function CreateProfileForm({ showModal, setShowModal }: ProfileFormProps) {
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="max-w-md rounded-2xl p-6 space-y-4">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Create Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Parent Name */}
          <div className="grid gap-1.5">
            <Label label="Parent Name">
            <Input id="parentName" placeholder="Enter the Parent name" /></Label>
          </div>

          {/* Email */}
          <div className="grid gap-1.5">
            <Label label="Email">
            <Input id="email" placeholder="Enter the Email" /></Label>
          </div>

          {/* File Upload */}
          <div className="grid gap-1.5">
            <Label label="Upload Registration Document">
            <div className="border-dashed border-2 border-gray-300 rounded-xl flex items-center justify-between px-4 py-3 bg-gray-50">
              <span className="text-sm text-gray-500">Upload file</span>
              <UploadCloud className="w-5 h-5 text-yellow-500" />
            </div>
            </Label>
          </div>

          {/* Add Button */}
          <div className="flex justify-end">
            <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Add</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

