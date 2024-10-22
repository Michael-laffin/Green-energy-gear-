import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm breadcrumbs py-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-green-600 hover:text-green-800">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {isLast ? (
                <span className="text-gray-500">{name}</span>
              ) : (
                <Link to={routeTo} className="text-green-600 hover:text-green-800">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;