import { BellAlertIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-900">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Search Bar */}
        <div className="flex-1 hidden md:block">
          <div className="relative">
            <input type="text" className="w-full bg-gray-100 border rounded-full px-4 py-2 focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:tracking-wide placeholder:text-gray-600" placeholder="Claims, payments, reports, policies ..." />
            <div className="absolute top-0 right-0 mt-3 mr-5">
              <MagnifyingGlassIcon className="w-5 text-gray-900" />
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="flex-1 text-right">
          <div className="md:hidden">
          <MagnifyingGlassIcon className="w-5 text-gray-900" />
          </div>
          <div className="hidden md:inline-block space-x-2">
            <span className='text-xs font-title text-gray-600'>Logged in as, John Doe</span>
            <UserCircleIcon className="w-5 inline-block" />
            <BellAlertIcon className="w-5 inline-block" />
            {/* <FaUser className="inline-block text-2xl" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
