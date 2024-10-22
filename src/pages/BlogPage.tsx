import React from 'react';
import BlogHeader from '../components/BlogHeader';
import BlogPosts from '../components/BlogPosts';
import PopularTags from '../components/PopularTags';
import Newsletter from '../components/Newsletter';
import Pagination from '../components/Pagination';
import FeaturedPost from '../components/FeaturedPost';
import BlogSidebar from '../components/BlogSidebar';
import BlogCategories from '../components/BlogCategories';
import TrendingPosts from '../components/TrendingPosts';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <FeaturedPost />
            <BlogCategories />
            <BlogPosts />
            <Pagination />
          </div>
          <div className="lg:w-1/3">
            <BlogSidebar />
            <TrendingPosts />
          </div>
        </div>
      </div>
      <PopularTags />
      <Newsletter />
    </div>
  );
};

export default BlogPage;