import { useState } from 'react';
import { createPolicy } from '../../utils/api';

const PolicyModal = ({ onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full md:w-1/2 mx-4">
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const NewPolicyForm = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [premium, setPremium] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const policy = { name, type, premium };
    createPolicy(policy).then((data) => {
      onCreate(data);
      setName('');
      setType('');
      setPremium('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
          Type
        </label>
        <input
          type="text"
          className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline"
          id="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="premium">
          Premium
        </label>
        <input
          type="text"
          className="w-full bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline"
          id="premium"
          value={premium}
          onChange={(event) => setPremium(event.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default PolicyModal;
