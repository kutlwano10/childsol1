"use client";

import React from "react";
import PaymentInfo from "./PaymentInfo";
import Title from "@/components/ui/Title";
import HistoryTable from "./HistoryTable";

export default function Billing() {
  const handlePayNow = () => {
    console.log("clicked");
  };
  return (
    <div className="space-y-8">
      <Title level={2} className="pb-8">
        Billing
      </Title>
      <PaymentInfo
        feeAmount="R3900"
        nextPaymentDate="30 May 2025"
        hasOutstandingPayment={true}
        onPayNow={handlePayNow}
      />
      <HistoryTable />
    </div>
  );
}
