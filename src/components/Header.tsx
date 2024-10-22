import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Leaf className="text-green-600 w-8 h-8 mr-2" />
            <span className="text-2xl font-bold text-green-600">Green Energy Gear</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/products" className="hidden md:block btn btn-primary">
            Explore Jackery Solar Systems
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white px-4 pt-2 pb-4">
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block text-gray-600 hover:text-green-600 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/products" className="btn btn-primary w-full mt-4" onClick={toggleMenu}>
              Explore Jackery Solar Systems
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;