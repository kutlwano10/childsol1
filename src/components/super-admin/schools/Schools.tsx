import SchoolCard from "@/components/admin/student-profiles/SchoolCard";
import Title from "@/components/ui/Title";
import React from "react";

export default function Schools() {
  const schools = [
    {
      id: "1",
      title: "Blue Hills Campus",
      image: "/school.png",
    },
    {
      id: "2",
      title: "Country View Campus",
      image: "/school.png",
    },
    {
      id: "3",
      title: "Rhodesfield Campus",
      image: "/school.png",
    },
    {
      id: "4",
      title: "Vorna Valley Campus",
      image: "/school.png",
    },
  ];
  return (
    <>
      <Title className="pb-8" level={2}>
        Schools
      </Title>
      <div className="flex p-8 rounded-2xl flex-wrap h-[100vh] bg-white  mx-auto  gap-12">
        {schools.map((school) => (
          <div key={school.id}>
            <SchoolCard imageSrc={school.image} title={school.title} />
          </div>
        ))}
      </div>
    </>
  );
}
