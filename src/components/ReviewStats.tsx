import React from 'react';
import { Star, ThumbsUp, Award } from 'lucide-react';

const ReviewStats: React.FC = () => {
  const stats = [
    { icon: Star, value: "4.8", label: "Average Rating" },
    { icon: ThumbsUp, value: "95%", label: "Would Recommend" },
    { icon: Award, value: "10,000+", label: "Happy Customers" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Satisfaction</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="mx-auto h-16 w-16 text-green-600 mb-4" />
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewStats;