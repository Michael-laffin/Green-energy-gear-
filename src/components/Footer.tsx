import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Leaf className="text-green-500 w-6 h-6 mr-2" />
              <span className="text-xl font-bold">Green Energy Gear</span>
            </Link>
            <p className="text-gray-400">Empowering sustainable living through innovative solar solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest offers and articles.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 sm:mb-0"
              />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2023 Green Energy Gear. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            <a
              href="https://www.jackery.com?aff=1592&utm_source=affiliatly&utm_medium=affiliate&utm_campaign=affiliatelyus"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Jackery Products
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;