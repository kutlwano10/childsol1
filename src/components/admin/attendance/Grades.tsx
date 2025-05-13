'use client'
import React from "react";
import GradeCard from "@/components/admin/student-profiles/SchoolCard";
import Title from "@/components/ui/Title";
import { useRouter, usePathname } from 'next/navigation';

export default function Grades() {

  const router = useRouter();
  const pathname = usePathname();

  const handleGradeSelect = (gradeId: string) => {
    // Navigate to classes view for this grade
    router.push(`${pathname}?view=classes&grade=${gradeId}`);
  };
  return (
    <>
      <Title className="pb-8" level={2}>
        Classes
      </Title>
      <div className="flex p-8 rounded-2xl flex-wrap h-[100vh] bg-white  mx-auto  gap-12">
        <div onClick={() => handleGradeSelect("blue-hills-2-6")}>
          <GradeCard
            imageSrc="/school.png"
            title="Blue Hills Campus"
            subtitle="2–6 Years"
          />
        </div>
        <div onClick={() => handleGradeSelect("blue-hills-3-23")}>
          <GradeCard
            imageSrc="/school.png"
            title="Blue Hills Campus"
            subtitle="3–23 Months"
          />
        </div>
      </div>
    </>
  );
}
