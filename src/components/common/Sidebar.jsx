import React from 'react';
import { BookmarkSlashIcon, BriefcaseIcon, CurrencyPoundIcon, DocumentCheckIcon, DocumentDuplicateIcon, FaceSmileIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline' 
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-72 p-4 border-r border-gray-300 shadow-lg text-gray-900 tracking-wide">
        <h2 className="text-4xl font-title tracking-wider">WEMUS</h2>
        <p className='text-xs text-indigo-600 tracking-tight my-1 mx-1'>Wella Medical Aid Society</p>
        <hr className='mt-4'/>
      <div className='mt-4'>
      <h6 className="text-gray-400 text-xs uppercase">menu</h6>
      <div className='py-3 space-y-3 text-gray-700 text-sm tracking-relaxed border-b'>
        <Link href={'/'} className='px-4 py-2 flex items-center rounded w-full hover:bg-gray-900 hover:bg-opacity-80 hover:text-white'>
          <BookmarkSlashIcon className='w-5 mr-1'/>
          <p>Dashboard</p>
        </Link>
        <Link href={'/policy-management/'} className='px-4 py-2 flex items-center rounded w-full hover:bg-gray-900 hover:bg-opacity-80 hover:text-white'>
          <BriefcaseIcon className='w-5 mr-1'/>
          <p>Policies</p>
        </Link>
        <Link href={'/claims-management/'} className='px-4 py-2 flex items-center rounded w-full hover:bg-gray-900 hover:bg-opacity-80 hover:text-white'>
          <DocumentCheckIcon className='w-5 mr-1'/>
          <p>Claims</p>
        </Link>
        <Link href={'/payments-management/'} className='px-4 py-2 flex items-center rounded w-full hover:bg-gray-900 hover:bg-opacity-80 hover:text-white'>
          <CurrencyPoundIcon className='w-5 mr-1'/>
          <p>Payments</p>
        </Link>
        <Link href={'/reportsAndAnalytics/'} className='px-4 py-2 flex items-center rounded w-full hover:bg-gray-900 hover:bg-opacity-80 hover:text-white'>
          <DocumentDuplicateIcon className='w-5 mr-1'/>
          <p>Reports & Analytics</p>
        </Link>
        <Link href={'/customer-management/'} className='px-4 py-2 flex items-center rounded w-full hover:bg-gray-900 hover:bg-opacity-80 hover:text-white'>
          <UsersIcon className='w-5 mr-1'/>
          <p>Customers</p>
        </Link>
        
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
