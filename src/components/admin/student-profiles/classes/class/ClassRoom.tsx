"use client";

import React from "react";
import StudentList from "./StudentList";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";


export default function ClassRoom() {
  return (
    <div>
      <div className="flex justify-between pb-12">
        <Title>Class A3 Profiles</Title>
        <div className="flex gap-2">
          <Button className="" type="button" variant="primary">
            <ShoppingBag />
          </Button>
          <Button type="button" variant="primary">
            Create Profile
          </Button>
        </div>
      </div>
      <StudentList />
    </div>
  );
}
