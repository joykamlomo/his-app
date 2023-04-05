import React from 'react';
import Sidebar from './common/Sidebar';
import Header from './common/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
