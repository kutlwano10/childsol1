import React from 'react';
import ProductCard from '@/components/ui/ProductCard';

const productData = [
  { name: 'Green Golf T-Shirt', price: 'R200', imageUrl: '/t-shirt.png' },
  { name: 'Shorts for Boys', price: 'R120', imageUrl: '/short.png' },
  { name: 'Shorts for Girls', price: 'R130', imageUrl: '/short.png' },
  { name: 'Tracksuit set', price: 'R450', imageUrl: '/jacket.png' },
  { name: 'Yellow Golf T-Shirt', price: 'R200', imageUrl: '/t-shirt.png' },
];

const ProductList: React.FC = () => {
  return (
    <div className="grid bg-white rounded-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {productData.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;