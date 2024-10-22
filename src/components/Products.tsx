import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  specs: string[];
  price: string;
  category: string;
  review: { rating: number; count: number };
}

const products: Product[] = [
  {
    id: 1,
    name: 'Jackery Solar Generator 1000',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Portable power station with 1000W capacity and solar charging capability.',
    specs: ['1000W output', 'Solar ready', 'Multiple ports', 'Lithium-ion battery'],
    price: '$999.99',
    category: 'power-stations',
    review: { rating: 4.8, count: 1200 },
  },
  {
    id: 2,
    name: 'Jackery SolarSaga 100W Solar Panel',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Foldable solar panel for efficient solar charging on-the-go.',
    specs: ['100W output', 'Foldable design', 'High conversion efficiency', 'USB-A and USB-C outputs'],
    price: '$299.99',
    category: 'solar-panels',
    review: { rating: 4.7, count: 800 },
  },
  {
    id: 3,
    name: 'Jackery Explorer 500',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Compact and powerful portable power station for outdoor adventures.',
    specs: ['518Wh capacity', 'Pure sine wave inverter', 'Quick charge 3.0', 'Lightweight design'],
    price: '$499.99',
    category: 'power-stations',
    review: { rating: 4.9, count: 1500 },
  },
  {
    id: 4,
    name: 'Jackery Portable Power Station Explorer 240',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Lightweight and compact power station for small devices and short trips.',
    specs: ['240Wh capacity', 'AC outlet', 'USB ports', 'Lightweight'],
    price: '$199.99',
    category: 'power-stations',
    review: { rating: 4.6, count: 2000 },
  },
  {
    id: 5,
    name: 'Jackery SolarSaga 60W Solar Panel',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Compact solar panel for efficient charging of smaller power stations.',
    specs: ['60W output', 'Foldable design', 'Water-resistant', 'USB-A and USB-C outputs'],
    price: '$179.99',
    category: 'solar-panels',
    review: { rating: 4.5, count: 600 },
  },
];

interface ProductsProps {
  selectedCategory: string;
}

const Products: React.FC<ProductsProps> = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="mb-4">
              {product.specs.map((spec, index) => (
                <li key={index} className="text-sm text-gray-500">• {spec}</li>
              ))}
            </ul>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-green-600">{product.price}</span>
              <div className="flex items-center">
                <Star className="text-yellow-400 w-5 h-5 mr-1" />
                <span className="font-semibold">{product.review.rating}</span>
                <span className="text-gray-600 ml-2">({product.review.count})</span>
              </div>
            </div>
            <a
              href={`https://www.jackery.com?aff=1592&utm_source=affiliatly&utm_medium=affiliate&utm_campaign=affiliatelyus&product=${product.id}`}
              className="btn btn-primary w-full text-center flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Buy Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;