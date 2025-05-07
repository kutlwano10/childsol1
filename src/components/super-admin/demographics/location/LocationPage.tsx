"use client";

import React from "react";
import GenderPieChart from "./LocationPieChart";
import LocationChart from "./LocationChart";

export default function LocationPage() {
  const locationData = [
    { distanceRange: "0-5km", people: 250 },
    { distanceRange: "6-10km", people: 180 },
    { distanceRange: "11-15km", people: 120 },
    { distanceRange: "16-20km", people: 80 },
    { distanceRange: "20+ km", people: 45 }
  ];
  return (
    <div className="">
      <div className=" flex h-full gap-12 flex-col md:flex-row">
        {/* LEFT */}

        <div className="w-full  lg:w-2/2">
          <LocationChart data={locationData} />
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3">
          <GenderPieChart />
        </div>
      </div>
    </div>
  );
}
