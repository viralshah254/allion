import React, { useEffect, useState } from 'react';

interface Claim {
  id: string;
  customerName: string;
  date: string;
  status: string;
  amount: number;
}

const Claims: React.FC = () => {
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    loadClaims();
  }, []);

  const loadClaims = () => {
    // TODO: Connect to service later
    setClaims([
      // Sample static data (remove or replace as needed)
      { id: '1', customerName: 'John Doe', date: new Date().toISOString(), status: 'Open', amount: 1000 },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Claims</h1>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {claims.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">No claims found.</td>
            </tr>
          ) : (
            claims.map(claim => (
              <tr key={claim.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{claim.id}</td>
                <td className="border px-4 py-2">{claim.customerName}</td>
                <td className="border px-4 py-2">{new Date(claim.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{claim.status}</td>
                <td className="border px-4 py-2">{claim.amount.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Claims;
