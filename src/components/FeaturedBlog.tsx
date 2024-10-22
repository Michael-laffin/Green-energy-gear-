import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedBlog: React.FC = () => {
  const featuredPosts = [
    {
      title: "How Solar Power is Changing the World",
      excerpt: "Discover the revolutionary impact of solar energy on our planet and daily lives...",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      title: "Top 5 Camping Destinations for Solar Enthusiasts",
      excerpt: "Explore these breathtaking locations perfect for eco-friendly camping adventures...",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">Featured</div>
                <h3 className="mt-2 text-xl leading-tight font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800 font-semibold">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="btn btn-secondary inline-flex items-center">
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;