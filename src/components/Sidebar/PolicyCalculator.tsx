

import React, { useState } from 'react';

const PolicyCalculator: React.FC = () => {
  const [sumInsured, setSumInsured] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [premium, setPremium] = useState<number | null>(null);

  const calculatePremium = () => {
    // Simple formula: (sumInsured * rate) / 100
    const result = (sumInsured * rate) / 100;
    setPremium(result);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Policy Premium Calculator</h1>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Sum Insured</label>
          <input
            type="number"
            value={sumInsured}
            onChange={e => setSumInsured(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-oda-blue"
            placeholder="Enter sum insured"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-oda-blue"
            placeholder="Enter premium rate"
          />
        </div>

        <button
          onClick={calculatePremium}
          className="px-4 py-2 bg-oda-blue text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>

        {premium !== null && (
          <div className="mt-4 p-4 bg-gray-50 rounded border">
            <span className="font-semibold">Estimated Premium:</span> {premium.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyCalculator;