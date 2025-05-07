"use client";
import React from "react";
import PaymentHistory from "./PaymentHistory";
import Title from "@/components/ui/Title";

export default function Payment() {
  return (
    <div>
      <div className='pb-10'>
        <Title level={2}>Payments</Title>
      </div>
      <PaymentHistory />
    </div>
  );
}
