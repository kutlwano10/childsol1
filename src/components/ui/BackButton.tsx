'use client'

import { useRouter } from "next/navigation";
import React from "react";
import ButtonUi from "./ButtonUi";
import { ArrowLeft } from "lucide-react";


export default function BackButton() {
  const router = useRouter();
  return (
    <div>
      <ButtonUi icon={<ArrowLeft size={16}/>} onClick={() => router.back()} variant="text">
        Back
      </ButtonUi>
    </div>
  );
}
