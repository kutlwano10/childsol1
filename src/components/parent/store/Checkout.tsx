"use client";

import React, { useState } from "react";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/ButtonUi";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Checkout() {
  const [cart, setCart] = useState<Product[]>([
    {
      id: "1",
      name: "Green Golf T-Shirt",
      price: 200,
      image: "/t-shirt.png",
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title level={2}>Store</Title>
        <Button variant="text">Back</Button>
      </div>
      <div className="flex bg-white rounded-3xl flex-col md:flex-row gap-8 max-w-7xl mx-auto p-4">
        {/* Left side - Cart items */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <hr className="mb-6" />

          <div className="grid grid-cols-4 gap-4 mb-4 font-semibold">
            <div>Product Details</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Price</div>
            <div className="text-center">Total</div>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 gap-4 mb-4 items-center"
            >
              <div className="flex flex-col">
                <div className="bg-amber-50 p-2 rounded-lg mb-2 w-32">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-contain h-20 w-full"
                  />
                  <div className="text-center text-sm font-medium">
                    {item.name}
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    R{item.price}
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="border border-gray-300 px-3 py-1 text-lg"
                >
                  −
                </button>
                <input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="border border-gray-300 w-12 h-10 text-center mx-2"
                />
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="border border-gray-300 px-3 py-1 text-lg"
                >
                  +
                </button>
              </div>

              <div className="text-center">R{item.price}</div>

              <div className="text-center font-semibold">
                R{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Order summary */}
        <div className="w-full md:w-80">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <hr className="mb-6" />

          <div className="flex justify-between mb-6">
            <div>Items {totalItems}</div>
            <div className="font-semibold">R{totalPrice}</div>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Promo Code</label>
            <input
              type="text"
              placeholder="Enter code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-6 rounded-lg">
              Apply
            </button>
          </div>

          <div className="flex justify-between mb-6">
            <div>Items {totalItems}</div>
            <div className="font-semibold">R{totalPrice}</div>
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 px-4 rounded-lg font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
