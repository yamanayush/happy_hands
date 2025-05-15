import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                HappyHands
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Home
              </Link>
              <Link href="#plans" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Plans
              </Link>
              <Link href="#services" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Services
              </Link>
              <Link href="#contact" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 