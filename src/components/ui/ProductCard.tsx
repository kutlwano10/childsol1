import React from 'react';
import Image from 'next/image'; // If using Next.js. Otherwise use img tag
import Title from './Title';

interface ProductCardProps {
  name: string;
  price: string;
  stock: string
  imageUrl?: string; // Optional image URL
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl ,stock}) => {
  return (
    <div className="product-card bg-[#FFAE1D1A] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative  aspect-square ">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover p-3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="p-4 flex text-center flex-col flex-grow">
        <p className="text-[#9BC33E]  mt-auto">{stock}</p>
        <Title level={3} className="text-lg font-medium text-gray-800 mb-1 line-clamp-2">{name}</Title>
        <p className="text-gray-800  mt-auto">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
