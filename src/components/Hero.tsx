import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Power Your Life with Renewable Energy</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">Discover portable solar solutions for a sustainable future, from camping trips to emergency preparedness.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.jackery.com?aff=1592&utm_source=affiliatly&utm_medium=affiliate&utm_campaign=affiliatelyus"
            className="btn btn-primary text-lg flex items-center justify-center w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Jackery Now <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#features" className="btn btn-secondary text-lg w-full sm:w-auto">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;