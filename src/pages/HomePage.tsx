import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import FeaturedBlog from '../components/FeaturedBlog';
import EcoImpact from '../components/EcoImpact';
import CallToAction from '../components/CallToAction';
import FeatureHighlights from '../components/FeatureHighlights';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeatureHighlights />
      <ProductShowcase />
      <CallToAction />
      <EcoImpact />
      <FeaturedBlog />
    </div>
  );
};

export default HomePage;