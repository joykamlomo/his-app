import React from 'react';
import { BookmarkSlashIcon, BriefcaseIcon, CogIcon, CurrencyPoundIcon, DocumentCheckIcon, DocumentDuplicateIcon, FaceSmileIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline' 
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-72 p-4 border-r border-gray-300 shadow-xl text-gray-900 font-semibold tracking-wide">
        <h2 className="text-4xl text-amber-600  tracking-wide">WEMUS</h2>
        <p className='text-xs text-indigo-600 tracking-tight my-1 mx-1'>Wella Medical Aid Society</p>
        <hr className='mt-4'/>
      <div className='mt-4'>
      <h6 className="text-amber-600 text-xs uppercase">menu</h6>
      <div className='py-3 space-y-3 text-indigo-600 text-sm tracking-relaxed border-b'>
        <Link href={'/'} className='px-3 py-2 flex items-center rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <BookmarkSlashIcon className='w-5 mr-1'/>
          <p>Dashboard</p>
        </Link>
        <Link href={'/policy-management/'} className='px-3 py-2 flex items-center rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <BriefcaseIcon className='w-5 mr-1'/>
          <p>Policies</p>
        </Link>
        <Link href={'/claims-management/'} className='px-3 py-2 flex items-center rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <DocumentCheckIcon className='w-5 mr-1'/>
          <p>Claims</p>
        </Link>
        <Link href={'/payments-management/'} className='px-3 py-2 flex items-center rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <CurrencyPoundIcon className='w-5 mr-1'/>
          <p>Payments</p>
        </Link>
        <Link href={'/reportsAndAnalytics/'} className='px-3 py-2 flex items-center rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <DocumentDuplicateIcon className='w-5 mr-1'/>
          <p>Reports & Analytics</p>
        </Link>
        <Link href={'/customer-management/'} className='px-3 py-2 flex items-center rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <UsersIcon className='w-5 mr-1'/>
          <p>Customers</p>
        </Link>
        
      </div>
      <h6 className="text-amber-600 text-xs uppercase mt-3">management</h6>
      <div className='py-3 space-y-3 text-indigo-600 text-sm tracking-relaxed'>
        <Link href={'/policy-management/'} className='px-3 py-2 flex items-center justify-between rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <p>Settings</p>
          <CogIcon className='w-5 mr-1'/>
        </Link>
        <Link href={'/policy-management/'} className='px-3 py-2 flex items-center justify-between rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <p>Users</p>
          <UserIcon className='w-5 mr-1'/>
        </Link>
        <Link href={'/claims-management/'} className='px-3 py-2 flex items-center justify-between rounded w-full hover:bg-indigo-600 hover:bg-opacity-80 hover:text-white'>
          <p>Data Control</p>
          <DocumentCheckIcon className='w-5 mr-1'/>
        </Link>
        
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
