import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: '5 Ways to Reduce Your Carbon Footprint with Portable Solar',
    excerpt: 'Discover how portable solar solutions can help you live a more sustainable lifestyle...',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    title: 'The Future of Renewable Energy: Trends to Watch',
    excerpt: 'Stay ahead of the curve with these emerging trends in renewable energy technology...',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 3,
    title: 'Off-Grid Living: A Beginners Guide to Solar Power',
    excerpt: 'Learn how to start your journey towards energy independence with this comprehensive guide...',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
];

const Blog: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-green-600 font-semibold hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;