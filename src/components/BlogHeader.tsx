import React from 'react';

const BlogHeader: React.FC = () => {
  return (
    <header className="bg-green-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Green Energy Gear Blog</h1>
        <p className="text-xl">Stay informed about sustainable living and renewable energy solutions</p>
      </div>
    </header>
  );
};

export default BlogHeader;