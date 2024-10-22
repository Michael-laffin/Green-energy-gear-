import React from 'react';

const tags = [
  "Solar Energy", "Off-grid Living", "Sustainable Travel", "Green Technology",
  "Renewable Resources", "Eco-friendly", "Outdoor Adventures", "Energy Independence"
];

const PopularTags: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Tags</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTags;