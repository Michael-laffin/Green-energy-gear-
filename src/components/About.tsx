import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Green Energy Gear</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            At Green Energy Gear, we're passionate about empowering individuals to embrace renewable energy solutions. Our journey began with a simple idea: to make sustainable living accessible to everyone.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We believe that by providing high-quality, portable solar solutions, we can help reduce our collective carbon footprint and create a more sustainable future. That's why we've partnered with Jackery, a leader in portable power stations and solar generators.
          </p>
          <p className="text-lg text-gray-700">
            Join us in our mission to promote eco-friendly living and harness the power of the sun. Together, we can make a difference, one solar-powered adventure at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;