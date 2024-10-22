import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types/BlogPost';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="mr-4">{post.date}</span>
          <User className="w-4 h-4 mr-2" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center mb-6">
          <Tag className="w-4 h-4 mr-2 text-green-600" />
          {post.tags.map((tag, index) => (
            <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;