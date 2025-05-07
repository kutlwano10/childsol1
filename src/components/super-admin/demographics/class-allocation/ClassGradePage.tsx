"use client";

import React from "react";
import ClassGradeChart from "./ClassGradeChart";
import Title from "@/components/ui/Title";
import GenderPieChart from "./GenderPieChart";

export default function ClassGradePage() {
  const gradeData = [
    { grade: "Grade r", students: 150 },
    { grade: "Grade 1", students: 180 },
    { grade: "Grade 2", students: 200 },
    { grade: "Grade 3", students: 120 },
    { grade: "Grade 4", students: 75 },
  ];
  return (
    <div className="">
      <div className=" flex h-full gap-12 flex-col md:flex-row">
        {/* LEFT */}

        <div className="w-full  lg:w-2/2">
          <ClassGradeChart data={gradeData} />
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3">
          <GenderPieChart />
        </div>
      </div>
    </div>
  );
}
