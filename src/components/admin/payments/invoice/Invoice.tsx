"use client";

import React from "react";
import InvoiceForm from "./InvoiceForm";
import Title from "@/components/ui/Title";

export default function Invoice() {
  return (
    <div className="space-y-8">
      <Title level={2}>Create Invoice</Title>
      <InvoiceForm />
    </div>
  );
}
