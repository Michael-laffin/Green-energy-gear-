import React from 'react';
import { Battery, Sun, Zap, Truck } from 'lucide-react';

const features = [
  {
    icon: Battery,
    title: 'High Capacity',
    description: 'Power your devices for days with our large battery capacities.'
  },
  {
    icon: Sun,
    title: 'Solar Ready',
    description: 'Harness the power of the sun with compatible solar panels.'
  },
  {
    icon: Zap,
    title: 'Fast Charging',
    description: 'Quickly recharge your power station for uninterrupted use.'
  },
  {
    icon: Truck,
    title: 'Portable Design',
    description: 'Take your power anywhere with our lightweight, compact designs.'
  }
];

const FeatureHighlights: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Jackery?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="mx-auto h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;