import React, { useState } from 'react';
import { Search, Tag, Calendar } from 'lucide-react';

const BlogSidebar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    "Solar Energy",
    "Sustainable Living",
    "Eco-Friendly Products",
    "Renewable Resources",
    "Green Technology",
  ];

  const recentPosts = [
    { title: "10 Ways to Reduce Your Energy Consumption", date: "July 1, 2023" },
    { title: "The Benefits of Solar-Powered Camping Gear", date: "June 28, 2023" },
    { title: "How to Choose the Right Portable Power Station", date: "June 25, 2023" },
    { title: "Sustainable Travel: Tips for Eco-Conscious Adventurers", date: "June 22, 2023" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600">
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="text-gray-600 hover:text-green-600 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <a href="#" className="block group">
                <h4 className="text-gray-800 group-hover:text-green-600 transition-colors duration-300">{post.title}</h4>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;