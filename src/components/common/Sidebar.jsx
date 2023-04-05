import React from 'react';
import { BookmarkSlashIcon, BriefcaseIcon, CurrencyPoundIcon, DocumentCheckIcon, DocumentDuplicateIcon, FaceSmileIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline' 
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-72 p-4 shadow text-gray-900 tracking-wide">
        <h2 className="text-4xl font-title tracking-wide">WEMUS</h2>
        <p className='text-xs text-indigo-600 tracking-tight mb-4'>Wella Medical Aid Society</p>
        <hr className=''/>
      <div className='mt-2'>
      <h6 className="text-gray-400 text-xs uppercase">menu</h6>
      <ul className='mt-1 text-gray-700 text-sm tracking-relaxed border-b'>
        <li className='py-2 px-2 mb-2 flex items-center rounded w-full hover:bg-gray-900 hover:text-white'>
          <BookmarkSlashIcon className='w-5 mr-1'/>
          <Link href={''}>Dashboard</Link>
        </li>
        <li className='py-2 px-2 mb-2 flex items-center rounded w-full hover:bg-gray-900 hover:text-white'>
          <BriefcaseIcon className='w-5 mr-1'/>
          <Link href={''}>Policies</Link>
        </li>
        <li className='py-2 px-2 mb-2 flex items-center rounded w-full hover:bg-gray-900 hover:text-white'>
          <DocumentCheckIcon className='w-5 mr-1'/>
          <Link href={''}>Claims</Link>
        </li>
        <li className='py-2 px-2 mb-2 flex items-center rounded w-full hover:bg-gray-900 hover:text-white'>
          <CurrencyPoundIcon className='w-5 mr-1'/>
          <Link href={''}>Payments</Link>
        </li>
        <li className='py-2 px-2 mb-2 flex items-center rounded w-full hover:bg-gray-900 hover:text-white'>
          <DocumentDuplicateIcon className='w-5 mr-1'/>
          <Link href={''}>Reports & Analytics</Link>
        </li>
        <li className='py-2 px-2 mb-2 flex items-center rounded w-full hover:bg-gray-900 hover:text-white'>
          <UsersIcon className='w-5 mr-1'/>
          <Link href={''}>CASA</Link>
        </li>
        
      </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
