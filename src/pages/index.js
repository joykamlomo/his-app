import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
const inter = Inter({ subsets: ['latin'] })


import { useState } from 'react';

export default function Index() {
  const [userRegistrations, setUserRegistrations] = useState(500);
  const [policyApplications, setPolicyApplications] = useState(120);
  const [claims, setClaims] = useState(70);
  const [payments, setPayments] = useState(200);

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">User Registrations</h2>
        <p className="text-4xl font-bold">{userRegistrations}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Policy Applications</h2>
        <p className="text-4xl font-bold">{policyApplications}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Claims</h2>
        <p className="text-4xl font-bold">{claims}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Payments</h2>
        <p className="text-4xl font-bold">{payments}</p>
      </div>
    </div>
    </Layout>
  );
};

  // export default Index;
