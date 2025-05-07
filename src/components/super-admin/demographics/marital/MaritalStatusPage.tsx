"use client";

import React from "react";


import MaritalStatusChart from "./MaritalStatusChart";
import MaritalStatusPieChart from "./MaritalStatusPieChart";

export default function MaritalStatusPage() {

  return (
    <div className="">
      <div className=" flex h-full gap-12 flex-col md:flex-row">
        {/* LEFT */}

        <div className="w-full h-full lg:w-2/2">
          <MaritalStatusChart />
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3">
          {/* <GenderPieChart /> */}
          <MaritalStatusPieChart />
        </div>
      </div>
    </div>
  );
}