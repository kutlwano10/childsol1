'use client'

import React from "react";
import GenderStats from "./GenderChart";
import Title from "@/components/ui/Title";
import GenderPieChart from "./GenderPieChart";


export default function GenderPage() {
  return (
    <div className="">
      
      <div className=" flex h-full gap-12 flex-col md:flex-row">
        {/* LEFT */}

        <div className="w-full  lg:w-2/2">
        <GenderStats
        data={[
          { age: "20-30", male: 150, female: 200 },
          { age: "30-40", male: 180, female: 220 },
          { age: "40-60", male: 200, female: 250 },
          { age: "60-70", male: 120, female: 80 },
          { age: "70-80", male: 75, female: 25 },
        ]}
        total={1500}
        femaleCount={775}
        maleCount={725}
        ageGroups={["26-30", "40-60", "60-70"]}
      />
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3">
          <GenderPieChart />
        </div>
      </div>
    </div>
  );
}
