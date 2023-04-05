import React from 'react';
import { UserIcon, UsersIcon } from '@heroicons/react/24/outline' 
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-50 w-64 p-4 shadow text-gray-900 tracking-wide">
      <h2 className="text-4xl mb-4 font-semibold">WEMUS</h2>
      {/* <p className='text-xs mb-4 border-b py-3 text-indigo-600'>Wella Medical Aid Society</p> */}
      <div>
      <h6 className="text-gray-400 text-xs font-medium uppercase">menu</h6>
      <ul className='mt-3 px-2 text-gray-900 font-medium text-sm tracking-relaxed'>
        <li className='py-3 px-2 mb-2 flex items-center space-x-3 rounded-full hover:bg-gray-900 hover:text-white'>
          <UserIcon className='w-5'/>
          <Link href={''}>Dashboard</Link>
        </li>
        <li className='py-3 px-2 mb-2 flex items-center space-x-3 rounded-full hover:bg-gray-900 hover:text-white'>
          <UserIcon className='w-5'/>
          <Link href={''}>Dashboard</Link>
        </li>
        
      </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
