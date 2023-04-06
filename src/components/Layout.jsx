import React from 'react';
import Sidebar from './common/Sidebar';
import Header from './common/Header';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{ title ? title : "Health Insurance System" }</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main role='status' className="flex-1 p-4 animate-pulse">{children}</main>
      </div>
    </div></>
  );
};

export default Layout;
