import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Jackery Solar Generator 1000',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Portable power station with 1000W capacity and solar charging capability.',
    specs: ['1000W output', 'Solar ready', 'Multiple ports'],
    review: { rating: 4.8, count: 1200 },
  },
  {
    id: 2,
    name: 'Jackery SolarSaga 100W Solar Panel',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Foldable solar panel for efficient solar charging on-the-go.',
    specs: ['100W output', 'Foldable design', 'High conversion efficiency'],
    review: { rating: 4.7, count: 800 },
  },
  {
    id: 3,
    name: 'Jackery Explorer 500',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    description: 'Compact and powerful portable power station for outdoor adventures.',
    specs: ['518Wh capacity', 'Pure sine wave inverter', 'Quick charge 3.0'],
    review: { rating: 4.9, count: 1500 },
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="mb-4">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-sm text-gray-500">• {spec}</li>
                  ))}
                </ul>
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <span className="font-semibold">{product.review.rating}</span>
                  <span className="text-gray-600 ml-2">({product.review.count} reviews)</span>
                </div>
                <a
                  href={`https://www.jackery.com?aff=1592&utm_source=affiliatly&utm_medium=affiliate&utm_campaign=affiliatelyus&product=${product.id}`}
                  className="btn btn-primary w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;