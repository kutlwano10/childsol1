"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Title from "@/components/ui/Title";
import BackButton from "@/components/ui/BackButton";
import Image from "next/image";

export default function Store() {
  const router = useRouter();

  const items = [
    { id: 'books', title: 'BOOKS', label: 'Books(1)', image: '/books.png' },
    { id: 'uniform', title: 'UNIFORM', label: 'Uniform(5)', image: '/uniform.png' }
  ];

  const handleNavigate = (view: string) => {
    router.push(`/parent/store/${view}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Title level={2}>Store</Title>
        <BackButton />
      </div>
      <div className="bg-white min-h-screen p-6 rounded-4xl">
        <div className="p-6">
          {/* Cards Section */}
          <div className="grid grid-cols-2 gap-6 mb-8 max-w-lg">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="relative cursor-pointer transform transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

