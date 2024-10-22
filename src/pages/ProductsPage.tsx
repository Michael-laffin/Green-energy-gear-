import React, { useState } from 'react';
import Products from '../components/Products';
import ComparisonChart from '../components/ComparisonChart';
import CustomerPhotos from '../components/CustomerPhotos';
import ProductFilter from '../components/ProductFilter';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <ProductFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Products selectedCategory={selectedCategory} />
        <ComparisonChart />
        <CustomerPhotos />
      </div>
    </div>
  );
};

export default ProductsPage;