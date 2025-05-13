"use client";

import React from "react";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";
import PaymentHistoryTable from "./PaymentsHistoryTable";
import PaymentChart from "./PaymentChart";
import PayrollSummaryChart from "./PayrollSummaryChart";
import { useRouter } from "next/navigation";
import BackButton from "@/components/ui/BackButton";


export default function Payments() {
  const router = useRouter();

  return (
    <div className="">
      <div className="flex items-center justify-between pb-12">
        <Title level={2}>Payments</Title>
        <div className="flex items-center gap-4">
          <BackButton />
          <Button
            onClick={() => router.push("/admin/payments/invoice")}
            fullWidth
            type="button"
          >
            Create Invoice
          </Button>
          
        </div>
      </div>
      <div className="flex  gap-12 pb-12">
        <div className="flex-2/2 shadow-sm bg-white rounded-3xl">
          <PaymentChart />
        </div>
        <div className="flex-2/4 bg-white  rounded-4xl">
          <PayrollSummaryChart />
        </div>
      </div>
      <PaymentHistoryTable />
    </div>
  );
}
