import React, { useState } from 'react';
import PolicyModal from '@/components/modals/PolicyModal';
import Layout from '@/components/Layout';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';

const policiesData = [
  { id: 1, name: 'Auto Insurance', type: 'Car', premium: 500 },
  { id: 2, name: 'Home Insurance', type: 'Property', premium: 1000 },
  { id: 3, name: 'Life Insurance', type: 'Personal', premium: 250 },
  { id: 4, name: 'Travel Insurance', type: 'Travel', premium: 50 },
  { id: 5, name: 'Health Insurance', type: 'Medical', premium: 750 },
];

const Claim = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [newPolicyName, setNewPolicyName] = useState('');
  const [newPolicyType, setNewPolicyType] = useState('');
  const [newPolicyPremium, setNewPolicyPremium] = useState('');

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setNewPolicyName('');
    setNewPolicyType('');
    setNewPolicyPremium('');
  };

  const handleNewPolicySubmit = (event) => {
    event.preventDefault();
    // TODO: Add new policy to policiesData array
    handleModalClose();
  };

  const filteredPolicies = policiesData.filter((policy) => {
    const nameMatch = policy.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = policy.type.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || typeMatch;
  });

  return (
    <Layout>
      <div className="container mx-auto py-4">
      <div className="flex justify-between items-center mb-8">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <input value={searchTerm} onChange={handleSearchInput} type="text" className="w-full bg-gray-100 border-2 border-gray-600 rounded px-4 py-2 focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:tracking-wide placeholder:text-indigo-600" placeholder="Claims, payments, reports, policies ..." />
            <div className="absolute top-0 right-0 mt-3 mr-5">
              <MagnifyingGlassIcon className="w-5 text-gray-900" />
            </div>
          </div>
        </div>
        {/* Create Policy Button */}
        <div className="flex-1 text-right">
          <button className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 inline-flex" onClick={handleModalOpen}>
            Create Claim
            <span className='flex items-center'>
            <PlusIcon className="w-5 text-white inline-block ml-2" />
            </span>
          </button>
        </div>
      </div>
      {/* Policy Table */}
      
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 bordered">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Claim ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Claim name
                </th>
                <th scope="col" className="px-6 py-3">
                    Claim Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            {filteredPolicies.map((policy) => (
            <tr key={policy.id} className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {policy.id}
                </th>
                <td className="px-6 py-4">
                {policy.name}
                </td>
                <td className="px-6 py-4">
                {policy.type}
                </td>
                <td className="px-6 py-4">
                    <p>
                      lorem ipsum
                    </p>
                </td>
                <td className="px-6 py-4 space-x-2 text-sky-600">
                    <a href=''>View</a>
                    <a href=''>Edit</a>
                </td>
            </tr>
          ))}
        </tbody>
    </table>
</div>

      {/* Create Policy Modal */}
      {modalOpen && (
        <PolicyModal onClose={handleModalClose}>
          <form onSubmit={handleNewPolicySubmit}>
           
           <div className="border-b border-gray-900/10 pb-12">
             <h2 className="text-base font-semibold leading-7 text-gray-900">Claim Information</h2>
             <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
             
   
             <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">

             <div className="sm:col-span-3">
                 <label htmlFor="newPolicyPremium" className="block text-sm font-medium leading-6 text-gray-900">
                   Claim name
                 </label>
                 <div className="mt-2">
                   <input
                   value={newPolicyPremium} onChange={(event) => setNewPolicyPremium(event.target.value)}
                     type="number"
                     name="newPolicyPremium"
                     id="newPolicyPremium"
                     autoComplete="given-name"
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   />
                 </div>
               </div>

               <div className="sm:col-span-3">
                 <label htmlFor="newPolicyType" className="block text-sm font-medium leading-6 text-gray-900">
                   Type
                 </label>
                 <div className="mt-2">
                   <select
                   value={newPolicyType} onChange={(event) => setNewPolicyType(event.target.value)} 
                   id="newPolicyType"
                     name="newPolicyType"
                     autoComplete="country-name"
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                   >
                     <option>United States</option>
                     <option>Canada</option>
                     <option>Mexico</option>
                   </select>
                 </div>
               </div>
   
             <div className="col-span-full">
                 <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                   Claim
                 </label>
                 <div className="mt-2">
                   <input
                   value={newPolicyName} onChange={(event) => setNewPolicyName(event.target.value)}
                     type="text"
                     name="newPolicyName"
                     id="newPolicyName"
                     autoComplete="street-address"
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   />
                 </div>
               </div>
   
               <div className="col-span-full">
                 <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                   About
                 </label>
                 <div className="mt-2">
                   <textarea
                     id="about"
                     name="about"
                     rows={3}
                     className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                     defaultValue={''}
                   />
                 </div>
                 <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
               </div>        
               {/* end  */}
             </div>
           </div>
   
               <div className="mt-6 flex items-center justify-end gap-x-6">
               <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                 Cancel
               </button>
               <button
                 type="submit"
                 className="inline-flex rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
               >
                 Save
               </button>
             </div>
             </form>
           
        
        </PolicyModal>
      )}
    </div>
    </Layout>
  );
};
export default Claim;
