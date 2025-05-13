import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

const productData = [
  { id: "1",name: 'Green Golf T-Shirt', price: 'R200', imageUrl: '/t-shirt.png' },
  { id: "2",name: 'Shorts for Boys', price: 'R120', imageUrl: '/short.png' },
  { id: "3",name: 'Shorts for Girls', price: 'R130', imageUrl: '/short.png' },
  { id: "4",name: 'Tracksuit set', price: 'R450', imageUrl: '/jacket.png' },
  { id: "5",name: 'Yellow Golf T-Shirt', price: 'R200', imageUrl: '/t-shirt.png' },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid bg-white rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {productData.map((product) => (
        <Link key={product.id} href={'/admin/store/id'}>
          <ProductCard
            
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;