import React from 'react';
import Testimonials from '../components/Testimonials';
import ReviewStats from '../components/ReviewStats';
import VideoTestimonials from '../components/VideoTestimonials';

const ReviewsPage: React.FC = () => {
  return (
    <div>
      <Testimonials />
      <ReviewStats />
      <VideoTestimonials />
    </div>
  );
};

export default ReviewsPage;