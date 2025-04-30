import React, { useEffect, useState } from 'react';

interface Integration {
  id: string;
  name: string;
  provider: string;
  status: string;
}

const Integrations: React.FC = () => {
  const [integrations, setIntegrations] = useState<Integration[]>([]);

  useEffect(() => {
    loadIntegrations();
  }, []);

  const loadIntegrations = () => {
    // TODO: Connect to service later
    setIntegrations([
      { id: '1', name: 'Jubilee API', provider: 'Jubilee', status: 'Connected' },
      { id: '2', name: 'ICEA API', provider: 'ICEA Lion', status: 'Disconnected' },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Integrations</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Integration</th>
            <th className="px-4 py-2">Provider</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {integrations.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4">No integrations configured.</td>
            </tr>
          ) : (
            integrations.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.provider}</td>
                <td className="border px-4 py-2">{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Integrations;
