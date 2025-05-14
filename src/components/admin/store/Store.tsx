"use client";

import React, { useState } from "react";
import ProductList from "./ProductList";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";
import AddProductModal from "./AddProductModal";
import { useRouter } from "next/navigation";
import BackButton from "@/components/ui/BackButton";

export default function Store() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <div className="space-y-8 ">
      <AddProductModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex items-center justify-between">
        <Title level={2}>Store</Title>
        <div className="flex gap-4">
          <BackButton />
          <Button onClick={() => router.push("/admin/store/inventory")}>
            Inventory
          </Button>
          <Button onClick={() => setShowModal(true)}>Add Product</Button>
        </div>
      </div>
      <div className="bg-white min-h-screen rounded-4xl">
        <ProductList />
      </div>
    </div>
  );
}
