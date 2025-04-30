import React, { useEffect, useState } from 'react';

interface RiskItem {
  id: string;
  customerName: string;
  policyId: string;
  riskScore: number;
  recommendation: string;
}

const RiskScoring: React.FC = () => {
  const [items, setItems] = useState<RiskItem[]>([]);

  useEffect(() => {
    loadRiskScores();
  }, []);

  const loadRiskScores = () => {
    // TODO: Integrate actual service
    setItems([
      { id: '1', customerName: 'Jane Smith', policyId: 'POL123', riskScore: 75, recommendation: 'Review premium' },
      { id: '2', customerName: 'John Doe', policyId: 'POL124', riskScore: 40, recommendation: 'Low risk; standard premium' },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Risk Scoring</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Policy ID</th>
            <th className="px-4 py-2">Risk Score</th>
            <th className="px-4 py-2">Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">No risk data available.</td>
            </tr>
          ) : (
            items.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.customerName}</td>
                <td className="border px-4 py-2">{item.policyId}</td>
                <td className="border px-4 py-2">{item.riskScore}</td>
                <td className="border px-4 py-2">{item.recommendation}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RiskScoring;
