import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import Title from '@/components/ui/Title';
import BackButton from '@/components/ui/BackButton';
import Link from 'next/link';

// Expanded product data with category field
const productData = [
  // Uniform products
  { name: 'Green Golf T-Shirt',stock:'Only 5 left', price: 'R200', imageUrl: '/t-shirt.png', category: 'uniform' },
  { name: 'Shorts for Boys',stock:'Only 5 left', price: 'R120', imageUrl: '/short.png', category: 'uniform' },
  { name: 'Shorts for Girls',stock:'Only 5 left', price: 'R130', imageUrl: '/short.png', category: 'uniform' },
  { name: 'Tracksuit set',stock:'Only 5 left', price: 'R450', imageUrl: '/jacket.png', category: 'uniform' },
  { name: 'Yellow Golf T-Shirt',stock:'Only 5 left', price: 'R200', imageUrl: '/t-shirt.png', category: 'uniform' },
  
  // Books products
  { name: 'Mathematics Grade 8',stock:'Only 5 left',  price: 'R350', imageUrl: '/math-book.png', category: 'books' },
  { name: 'English Literature',stock:'Only 5 left',  price: 'R280', imageUrl: '/english-book.png', category: 'books' },
  { name: 'Science Textbook',stock:'Only 5 left',  price: 'R320', imageUrl: '/science-book.png', category: 'books' },
];

interface ProductListProps {
  view?: string;
}

const ProductList: React.FC<ProductListProps> = ({ view = 'books' }) => {
  // Filter products based on the current view
  const filteredProducts = productData.filter(product => 
    product.category === view
  );

  // If no products match the filter or the view doesn't exist, show a message
  if (filteredProducts.length === 0) {
    return (
      <div className="w-full p-8 text-center">
        <p className="text-lg text-gray-600">No {view} products available at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <Title level={2} className="text-2xl font-bold mb-6 capitalize">Store</Title>
        <BackButton/>
      </div>
      <div className="grid rounded-4xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {filteredProducts.map((product, index) => (
          <Link key={index} href={'/parent/store/id'}>
            <ProductCard
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              stock={product.stock}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;