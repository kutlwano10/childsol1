"use client";

import React, { useState } from "react";
import Title from "@/components/ui/Title";
import ChildInformationUpdate from "./ChildInformationUpdate";

interface Menu {
  title: string;
  id: string;
}

const ParentsInformation = () => (
  <div>
    <Title level={3}>Parent&apos;s Information</Title>
    {/* Add parent information form fields here */}
  </div>
);

const OtherInformation = () => (
  <div>
    <Title level={3}>Other Information</Title>
    {/* Add other information form fields here */}
  </div>
);

export default function Profile() {
  const [activeSection, setActiveSection] = useState("child");

  const sidebarMenu: Menu[] = [
    { title: "Child Information", id: "child" },
    { title: "Parent's Information", id: "parents" },
    { title: "Other Information", id: "other" },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "child":
        return <ChildInformationUpdate />;
      case "parents":
        return <ParentsInformation />;
      case "other":
        return <OtherInformation />;
      default:
        return <ChildInformationUpdate />;
    }
  };

  return (
    <>
      <Title className="pb-6" level={2}>
        My Profile
      </Title>
      <div className="flex h-[calc(100vh-160px)] gap-6 flex-col md:flex-row overflow-hidden">
        {/* LEFT SIDEBAR */}
        <div className="w-full space-y-2 py-6 px-4 bg-white rounded-2xl lg:w-1/5">
          {sidebarMenu.map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveSection(menu.id)}
              className={`w-full text-left items-center rounded-xl hover:bg-orange-50 justify-start gap-4 px-2 py-3 ${
                activeSection === menu.id
                  ? "text-secondary bg-orange-50 font-medium"
                  : "text-gray-500"
              }`}
            >
              {menu.title}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-4/5 p-6 bg-white rounded-2xl overflow-y-auto">
          {renderActiveSection()}
        </div>
      </div>
    </>
  );
}
