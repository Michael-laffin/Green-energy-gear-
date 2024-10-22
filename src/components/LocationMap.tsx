import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0679902144!2d-122.41941658468212!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085d25d3bbb%3A0x80d4c8c3470b5a9e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619794244257!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Green Energy Gear Location"
          ></iframe>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold">Green Energy Gear Headquarters</p>
          <p className="text-gray-600">123 Eco Street, San Francisco, CA 94123</p>
          <p className="text-gray-600">Phone: (555) 123-4567</p>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;