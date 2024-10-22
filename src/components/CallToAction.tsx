import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Embrace Sustainable Energy?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers who have made the switch to clean, portable power.</p>
        <a
          href="https://www.jackery.com?aff=1592&utm_source=affiliatly&utm_medium=affiliate&utm_campaign=affiliatelyus"
          className="btn bg-white text-green-600 hover:bg-gray-100 text-lg inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Jackery Products <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;