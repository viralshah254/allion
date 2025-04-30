

import React, { useEffect, useState } from 'react';

interface Renewal {
  id: string;
  customerName: string;
  policyId: string;
  renewalDate: string;
  status: string;
}

const Renewals: React.FC = () => {
  const [renewals, setRenewals] = useState<Renewal[]>([]);

  useEffect(() => {
    loadRenewals();
  }, []);

  const loadRenewals = () => {
    // TODO: Integrate service when ready
    setRenewals([
      { id: '1', customerName: 'Jane Smith', policyId: 'POL123', renewalDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(), status: 'Pending' },
      { id: '2', customerName: 'John Doe', policyId: 'POL124', renewalDate: new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(), status: 'Completed' },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Upcoming Renewals</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Policy ID</th>
            <th className="px-4 py-2">Renewal Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {renewals.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">No renewals scheduled.</td>
            </tr>
          ) : (
            renewals.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.customerName}</td>
                <td className="border px-4 py-2">{item.policyId}</td>
                <td className="border px-4 py-2">{new Date(item.renewalDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Renewals;