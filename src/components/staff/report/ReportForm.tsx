import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";

type ReportFormProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

export default function ReportForm({
  showModal,
  setShowModal,
}: ReportFormProps) {
  return (
    <Dialog open={showModal} onOpenChange={() => setShowModal(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modal Open</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
