import React, { useEffect, useState } from 'react';

interface UnderwritingRule {
  id: string;
  name: string;
  criteria: string;
  status: string;
}

const Underwriting: React.FC = () => {
  const [rules, setRules] = useState<UnderwritingRule[]>([]);

  useEffect(() => {
    loadRules();
  }, []);

  const loadRules = () => {
    // TODO: Replace with real service integration
    setRules([
      { id: '1', name: 'Low-Risk Auto', criteria: 'Age > 25, No accidents', status: 'Active' },
      { id: '2', name: 'High-Value Home', criteria: 'Value > $200k, Security system', status: 'Pending Review' },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Underwriting Rules</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Rule Name</th>
            <th className="px-4 py-2">Criteria</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {rules.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4">No underwriting rules defined.</td>
            </tr>
          ) : (
            rules.map(rule => (
              <tr key={rule.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{rule.id}</td>
                <td className="border px-4 py-2">{rule.name}</td>
                <td className="border px-4 py-2">{rule.criteria}</td>
                <td className="border px-4 py-2">{rule.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Underwriting;
