'use client'

import React from "react";
import GenderStats from "./GenderChart";
import GenderPieChart from "./GenderPieChart";
import AgeGroupTable from "./all-campus/AgeGroupTable";
import CampusGenderStatsTable from "./all-campus/CampusGenderStatsTable";


export default function GenderPage() {

  return (
    <div className="space-y-8">
      
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
       
      />
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3">
          <GenderPieChart />
        </div>
      </div>
      <div className=" flex h-full gap-12 flex-col md:flex-row">
        {/* LEFT */}

        <div className="w-full  lg:w-2/2">
        <AgeGroupTable />
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3">
          <CampusGenderStatsTable />
        </div>
      </div>
    </div>
  );
}
