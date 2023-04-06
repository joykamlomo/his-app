import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import PolicyModal from '@/components/modals/PolicyModal';
import Layout from '@/components/Layout';

const policiesData = [
  { id: 1, name: 'Auto Insurance', type: 'Car', premium: 500 },
  { id: 2, name: 'Home Insurance', type: 'Property', premium: 1000 },
  { id: 3, name: 'Life Insurance', type: 'Personal', premium: 250 },
  { id: 4, name: 'Travel Insurance', type: 'Travel', premium: 50 },
  { id: 5, name: 'Health Insurance', type: 'Medical', premium: 750 },
];

const Policy = () => {
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
            <input type="text" className="w-full bg-gray-200 rounded-full px-4 py-2 pl-10 focus:outline-none focus:shadow-outline" placeholder="Search policies..." value={searchTerm} onChange={handleSearchInput} />
            <div className="absolute top-0 left-0 mt-3 ml-3">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
        </div>
        {/* Create Policy Button */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2" onClick={handleModalOpen}>
            <FaPlus className="inline-block mr-2" />
            Create Policy
          </button>
        </div>
      </div>
      {/* Policy Table */}
      
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 border rounded-md">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Insurance name
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Premium
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            {filteredPolicies.map((policy) => (
            <tr key={policy.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {policy.name}
                </th>
                <td class="px-6 py-4">
                {policy.type}
                </td>
                <td class="px-6 py-4">
                {policy.premium}
                </td>
                <td class="px-6 py-4">
                    <p>
                      lorem ipsum
                    </p>
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
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="newPolicyName">
                Name
              </label>
              <input type="text" className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline" id="newPolicyName" value={newPolicyName} onChange={(event) => setNewPolicyName(event.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="newPolicyType">
                Type
              </label>
              <input type="text" className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline" id="newPolicyType" value={newPolicyType} onChange={(event) => setNewPolicyType(event.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="newPolicyPremium">
                Premium
              </label>
              <input type="text" className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline" id="newPolicyPremium" value={newPolicyPremium} onChange={(event) => setNewPolicyPremium(event.target.value)} />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2">
                Create
              </button>
            </div>
          </form>
        </PolicyModal>
      )}
    </div>
    </Layout>
  );
};
export default Policy;
