import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPosts: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      {blogPosts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-48 sm:h-64 object-cover" />
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
              <span className="flex items-center mr-4 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </span>
              <span className="flex items-center mb-2">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </span>
            </div>
            <div className="flex flex-wrap items-center mb-4">
              <Tag className="w-4 h-4 mr-2 text-green-600" />
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center ${likedPosts.includes(post.id) ? 'text-green-600' : 'text-gray-500'}`}
                >
                  <ThumbsUp className="w-5 h-5 mr-1" />
                  <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                </button>
                <div className="flex items-center text-gray-500">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  <span>{post.comments}</span>
                </div>
              </div>
              <button className="text-gray-500 hover:text-green-600">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <Link to={`/blog/${post.id}`} className="mt-4 inline-block text-green-600 font-semibold hover:underline">
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;