"use client";

import React from "react";
import ProductList from "./ProductList";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";


export default function Store() {
  return (
    <div className='space-y-8 '>
        <div className='flex items-center justify-between'>
            <Title level={2}>Store</Title>
            <Button>Add Product</Button>
        </div>
      <ProductList />
    </div>
  );
}
