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

const User = () => {
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
            <span>Create Policy</span>
            <PlusIcon className="w-5 text-white inline-block ml-2" />
          </button>
        </div>
      </div>
      {/* Policy Table */}
      
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 bordered">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Insurance name
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Premium
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
                {policy.name}
                </th>
                <td className="px-6 py-4">
                {policy.type}
                </td>
                <td className="px-6 py-4">
                {policy.premium}
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
          <div className="mb-6">
    <label htmlFor="newPolicyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Policy Name</label>
    <input value={newPolicyName} onChange={(event) => setNewPolicyName(event.target.value)} type="text" id="newPolicyName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>

  <div className="mb-6">
    <label htmlFor="newPolicyType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Policy Type</label>
    <input value={newPolicyType} onChange={(event) => setNewPolicyType(event.target.value)} type="text" id="newPolicyType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>

  <div className="mb-6">
    <label htmlFor="newPolicyPremium" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Policy Price/Premium</label>
    <input value={newPolicyPremium} onChange={(event) => setNewPolicyPremium(event.target.value)} type="text" id="newPolicyPremium" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>

  <div className="mb-6">
    <label htmlFor="newPolicyPremium" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input type="text" id="newPolicyPremium" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>
           
            <div className="flex justify-end">
              <button type="submit" className="rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 inline-flex">
                Create Policy
              </button>
            </div>
          </form>
        
        </PolicyModal>
      )}
    </div>
    </Layout>
  );
};
export default User;
