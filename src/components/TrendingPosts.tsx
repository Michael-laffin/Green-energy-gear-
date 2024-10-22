import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const trendingPosts = [
  { id: 1, title: "The Impact of Solar Energy on Climate Change", views: 1500 },
  { id: 2, title: "10 Easy Ways to Reduce Your Carbon Footprint", views: 1200 },
  { id: 3, title: "The Future of Electric Vehicles: What to Expect", views: 1000 },
  { id: 4, title: "Sustainable Fashion: Eco-Friendly Clothing Brands", views: 800 },
  { id: 5, title: "Home Energy Efficiency: Tips and Tricks", views: 750 },
];

const TrendingPosts: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
        Trending Posts
      </h3>
      <ul className="space-y-4">
        {trendingPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="block">
              <h4 className="text-gray-800 hover:text-green-600 transition-colors duration-300">{post.title}</h4>
              <p className="text-sm text-gray-500">{post.views} views</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;