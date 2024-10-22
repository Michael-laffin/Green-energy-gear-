import React from 'react';
import { Leaf, Zap, Droplets, Wind } from 'lucide-react';

const EcoImpact: React.FC = () => {
  const impacts = [
    { icon: Leaf, title: "Reduced Carbon Footprint", description: "Our solar solutions help decrease reliance on fossil fuels, lowering your carbon emissions." },
    { icon: Zap, title: "Energy Independence", description: "Empower yourself with off-grid capabilities and energy security in any situation." },
    { icon: Droplets, title: "Resource Conservation", description: "Solar power helps preserve water and other natural resources used in traditional energy production." },
    { icon: Wind, title: "Clean Air", description: "By using solar energy, you contribute to reducing air pollution and improving air quality." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Eco Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <impact.icon className="mx-auto h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoImpact;