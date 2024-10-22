import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button className="btn btn-secondary flex items-center">
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </button>
      <button className="px-4 py-2 rounded-md bg-green-600 text-white">1</button>
      <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">2</button>
      <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">3</button>
      <button className="btn btn-secondary flex items-center">
        Next
        <ChevronRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default Pagination;