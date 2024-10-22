import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronDown, ChevronUp } from 'lucide-react';

const FeaturedPost: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredPost = {
    id: 0,
    title: "The Rise of Sustainable Energy: A Comprehensive Guide",
    excerpt: "Dive into the world of renewable energy sources and learn how they're reshaping our future. This in-depth guide covers solar, wind, and hydroelectric power, exploring their benefits and challenges.",
    content: `Sustainable energy is at the forefront of global efforts to combat climate change and secure a cleaner, greener future for generations to come. This comprehensive guide delves into the world of renewable energy sources, exploring how they're reshaping our approach to power generation and consumption.

Solar Power: Harnessing the Sun's Energy
Solar energy has seen remarkable growth in recent years, thanks to advancements in photovoltaic technology and decreasing costs. From rooftop installations to vast solar farms, this clean energy source is becoming increasingly accessible to both individuals and businesses.

Wind Power: Capturing the Breeze
Wind turbines, both onshore and offshore, are playing a crucial role in the renewable energy mix. As turbine technology improves and installation costs decrease, wind power is becoming an increasingly viable option for large-scale energy production.

Hydroelectric Power: The Force of Water
While not a new technology, hydroelectric power continues to be a significant source of renewable energy worldwide. Modern innovations are focusing on minimizing environmental impact while maximizing energy output.

Challenges and Opportunities
Despite the numerous benefits of renewable energy, challenges remain. These include energy storage, grid integration, and the intermittent nature of some renewable sources. However, ongoing research and development are addressing these issues, paving the way for a more sustainable energy future.

The Path Forward
As we continue to innovate and invest in sustainable energy technologies, the potential for a cleaner, more resilient energy system grows. By embracing these renewable sources, we can reduce our carbon footprint, improve energy security, and create new economic opportunities in the green energy sector.`,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "July 1, 2023",
    author: "Michael laffin",
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
      <div className="relative">
        <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-96 object-cover" />
        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          Featured
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
        <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="mr-4">{featuredPost.date}</span>
          <User className="w-4 h-4 mr-2" />
          <span>{featuredPost.author}</span>
        </div>
        {isExpanded && (
          <div className="mt-4 mb-6 text-gray-700">
            {featuredPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        )}
        <button
          onClick={toggleExpand}
          className="btn btn-primary inline-flex items-center"
        >
          {isExpanded ? (
            <>
              Hide Full Article
              <ChevronUp className="ml-2 w-4 h-4" />
            </>
          ) : (
            <>
              View Full Article
              <ChevronDown className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default FeaturedPost;