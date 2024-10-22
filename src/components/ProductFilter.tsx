import React from 'react';

interface ProductFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'power-stations', name: 'Power Stations' },
    { id: 'solar-panels', name: 'Solar Panels' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Filter Products</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
              selectedCategory === category.id
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-600 hover:bg-green-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;