import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ComparisonChart: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const products = [
    { name: "Jackery Solar Generator 1000", capacity: "1002Wh", solarInput: "200W", acOutput: "1000W", weight: "22 lbs" },
    { name: "Jackery Explorer 500", capacity: "518Wh", solarInput: "100W", acOutput: "500W", weight: "13.3 lbs" },
    { name: "Jackery Explorer 300", capacity: "293Wh", solarInput: "60W", acOutput: "300W", weight: "7.1 lbs" },
    { name: "Jackery Portable Power Station Explorer 240", capacity: "240Wh", solarInput: "60W", acOutput: "200W", weight: "6.6 lbs" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Product Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Product</th>
                <th className="p-3 border">Capacity</th>
                <th className="p-3 border">Solar Input</th>
                <th className="p-3 border">AC Output</th>
                <th className="p-3 border">Weight</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, isExpanded ? products.length : 2).map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="p-3 border font-semibold">{product.name}</td>
                  <td className="p-3 border">{product.capacity}</td>
                  <td className="p-3 border">{product.solarInput}</td>
                  <td className="p-3 border">{product.acOutput}</td>
                  <td className="p-3 border">{product.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="btn btn-secondary inline-flex items-center"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChart;