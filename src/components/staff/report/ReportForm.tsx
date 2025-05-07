import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Form from "@/components/ui/Form";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";

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
