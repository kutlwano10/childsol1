import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";

export default function page() {
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
        Your Child has been successfully registered. You will receive further
        information regarding the next steps .
      </Title>
      <Button variant="primary" fullWidth size="lg" className="mb-6 shadow-md">
        Sign In
      </Button>
    </div>
  );
}
