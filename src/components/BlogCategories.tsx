import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'Solar Energy', slug: 'solar-energy' },
  { name: 'Sustainable Living', slug: 'sustainable-living' },
  { name: 'Eco-Friendly Products', slug: 'eco-friendly-products' },
  { name: 'Green Technology', slug: 'green-technology' },
];

const BlogCategories: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/blog/category/${category.slug}`}
            className="bg-white text-green-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;