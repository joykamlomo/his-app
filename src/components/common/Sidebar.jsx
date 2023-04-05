import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-64 p-4">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2"><a href="#">Home</a></li>
        <li className="mb-2"><a href="#">About</a></li>
        <li className="mb-2"><a href="#">Contact</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
