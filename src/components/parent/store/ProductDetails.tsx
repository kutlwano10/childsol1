"use client";

import Button from "@/components/ui/ButtonUi";
import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

export default function ProductDetails() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <Title level={2}>Store</Title>
        <Button variant="text">Back</Button>
      </div>
      <div className="flex w-full min-h-[80vh] gap-12 justify-center mx-auto items-center  rounded-3xl flex-row p-4 bg-white ">
        {/* Product Image */}

        <div className="max-w-4xl ">
          <Image
            src="/t-shirt.png"
            alt="Green Golf T-Shirt"
            width={400}
            height={400}
            priority
            className="max-w-full h-auto object-contain"
          />
        </div>
        {/* Product Information */}
        <div className="min-w-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Green Golf T-Shirt
          </h1>
          <p className="text-lg font-semibold mt-2">R200</p>
          <p className="text-gray-700 mt-2">Green Golf Tshirt - Unisex</p>
          <div className="mt-6">
            <p className="text-sm text-gray-600">size(sqp)</p>
            <div className="mt-1 relative">
              <button className="w-full flex justify-between items-center bg-white border border-gray-300 rounded px-4 py-2 text-sm text-gray-500">
                Choose an option
                <span className="ml-2">›</span>
              </button>
            </div>
          </div>
          <div className="flex mt-6 items-center">
            <div className="border border-gray-300 rounded w-10 h-8 flex items-center justify-center mr-4 text-sm">
              <span>1</span>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded w-full">
              Add to cart
            </button>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600">SKU: GQT</p>
            <p className="text-sm text-gray-600 mt-1">Category: Uniform</p>
          </div>
        </div>
      </div>
    </div>
  );
}
