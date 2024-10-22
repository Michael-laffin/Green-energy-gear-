import React from 'react';

const videoTestimonials = [
  { id: "dQw4w9WgXcQ", title: "Off-grid Living with Jackery" },
  { id: "dQw4w9WgXcQ", title: "Powering My Van Life Adventure" },
  { id: "dQw4w9WgXcQ", title: "Jackery at the Campsite" },
];

const VideoTestimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Video Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;