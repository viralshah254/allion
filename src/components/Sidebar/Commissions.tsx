

import React, { useEffect, useState } from 'react';

interface Commission {
  id: string;
  agentName: string;
  policyId: string;
  date: string;
  amount: number;
}

const Commissions: React.FC = () => {
  const [commissions, setCommissions] = useState<Commission[]>([]);

  useEffect(() => {
    loadCommissions();
  }, []);

  const loadCommissions = () => {
    // TODO: Connect to service later
    setCommissions([
      { id: '1', agentName: 'Jane Smith', policyId: 'POL123', date: new Date().toISOString(), amount: 150.0 },
      { id: '2', agentName: 'John Doe', policyId: 'POL124', date: new Date().toISOString(), amount: 200.0 },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Commissions</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Agent</th>
            <th className="px-4 py-2">Policy ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {commissions.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">No commissions available.</td>
            </tr>
          ) : (
            commissions.map(comm => (
              <tr key={comm.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{comm.id}</td>
                <td className="border px-4 py-2">{comm.agentName}</td>
                <td className="border px-4 py-2">{comm.policyId}</td>
                <td className="border px-4 py-2">{new Date(comm.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{comm.amount.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Commissions;