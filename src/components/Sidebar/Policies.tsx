import React, { useEffect, useState } from 'react';

interface Policy {
  id: string;
  customerName: string;
  product: string;
  startDate: string;
  endDate: string;
  status: string;
  premium: number;
}

const Policies: React.FC = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);

  useEffect(() => {
    loadPolicies();
  }, []);

  const loadPolicies = () => {
    // TODO: Connect to service later
    setPolicies([
      {
        id: 'POL123',
        customerName: 'Jane Smith',
        product: 'Motor Car',
        startDate: new Date().toISOString(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        status: 'Active',
        premium: 1200.0,
      },
      {
        id: 'POL124',
        customerName: 'John Doe',
        product: 'Homeowner',
        startDate: new Date().toISOString(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        status: 'Expired',
        premium: 800.0,
      },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Policies</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Premium</th>
          </tr>
        </thead>
        <tbody>
          {policies.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-4">No policies found.</td>
            </tr>
          ) : (
            policies.map(policy => (
              <tr key={policy.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{policy.id}</td>
                <td className="border px-4 py-2">{policy.customerName}</td>
                <td className="border px-4 py-2">{policy.product}</td>
                <td className="border px-4 py-2">{new Date(policy.startDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{new Date(policy.endDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{policy.status}</td>
                <td className="border px-4 py-2">{policy.premium.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Policies;
