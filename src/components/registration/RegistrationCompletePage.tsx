'use client'

import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";
import { useRouter } from "next/navigation";

export default function RegistrationCompletePage() {
    const router = useRouter()
  return (
    <div className="w-full h-full gap-4 flex flex-col justify-center items-center">
      <div className="">
        <Image
          className="object-cover"
          src={"/Registered.svg"}
          alt=""
          width={600}
          height={400}
        />
      </div>
      <Title className="max-w-xl text-center" level={5}>
        Your child&apos;s application has been successfully submitted. You will
        receive updates on the next steps shortly. You can now track the status
        of the application by clicking <strong>&quot;Track Application&quot;</strong>.
      </Title>
      <Button onClick={()=> router.push('/registration/tracker')} variant="primary" fullWidth size="lg" className="mb-6 shadow-md">
        Track Application
      </Button>
    </div>
  );
}
