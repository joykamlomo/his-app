import React from 'react';
import { FaSearch, FaBell, FaCog, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="text-gray-900 px-3 py-2">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Search Bar */}
        <div className="flex-1 hidden md:block">
          <div className="relative">
            <input type="search" className="w-full bg-gray-100 border rounded-full px-4 py-2 focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:tracking-wide placeholder:text-gray-600" placeholder="Claims, payments, reports, policies ..." />
            <div className="absolute top-0 right-0 mt-3 mr-5">
              <FaSearch className="text-gray-900" />
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="flex-1 text-right">
          <div className="md:hidden">
            <FaSearch className="inline-block text-2xl mr-4" />
          </div>
          <div className="hidden md:inline-block">
            <FaBell className="inline-block text-2xl mr-4" />
            <FaCog className="inline-block text-2xl mr-4" />
            <FaUser className="inline-block text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
