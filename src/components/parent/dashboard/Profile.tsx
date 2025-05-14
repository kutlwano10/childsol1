"use client";

import React from "react";
import FormField from "../../ui/FormField";
import Input from "../../ui/Input";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/solid";

export default function Profile() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-md overflow-hidden">
      {/* Header with Background and Profile Info */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-48 relative">
          <Image
            src="/bg-profile.png"
            alt="Classroom"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center md:flex-row md:items-end gap-4 absolute bottom-[-80px] left-0 right-0 px-12">
          {/* Profile Picture */}
          <div className="relative h-45 w-45 rounded-full border-6 border-[var(--color-primary)] ">
            <Image
              src="/Profile.png"
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
            <button className="absolute  z-40 bottom-0 right-0 bg-[var(--color-primary)]  rounded-full p-1 shadow">
              <CameraIcon className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Name and tagline */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-semibold">Ayanda Ndlovu</h1>
            <p className="text-sm text-blue-900 font-medium">
              Learning, growing and glowing
            </p>
          </div>
        </div>
      </div>

      {/* Spacer under profile */}
      <div className="h-20" />

      {/* Profile Info Fields */}
      <div className=" p-6 gap-10  flex justify-between whitespace-nowrap">
        <div>
          <div className="flex gap-4">
            <FormField label="First Name">
              <Input value="Ayanda" disabled />
            </FormField>
            <FormField label="Surname">
              <Input value="Ndlovu" disabled />
            </FormField>
          </div>
          <div className="flex gap-4">
            <FormField label="Race">
              <Input value="African" disabled />
            </FormField>
            <FormField label="Gender">
              <Input value="Female" disabled />
            </FormField>
          </div>
        </div>

        <div className="flex flex-col ">
          <FormField label="Date of birth">
            <Input value="20-09-2022" disabled />
          </FormField>

          <div className="flex gap-4">
            <FormField label="Education level">
              <Input value="Little Legends" disabled />
            </FormField>
            <FormField label="Teacher">
              <Input value="Mrs Lee" disabled />
            </FormField>
          </div>
        </div>
      </div>
    </div>
  );
}
