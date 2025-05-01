import React, { useState } from 'react';

const AddPolicy = () => {
  const [code, setCode] = useState('');
  const [policyType, setPolicyType] = useState('');
  const [description, setDescription] = useState('');
  const [basis, setBasis] = useState('');
  const [specialClauses, setSpecialClauses] = useState('');
  const [specialExcesses, setSpecialExcesses] = useState('');
  const [specialExclusions, setSpecialExclusions] = useState('');
  const [specialConditions, setSpecialConditions] = useState('');
  const [policyFormFile, setPolicyFormFile] = useState<File | null>(null);

  // Pre-filled readonly standard fields (example content)
  const standardClauses = `Clause 1
Clause 2
Clause 3`;
  const standardExcesses = `Excess 1
Excess 2
Excess 3`;
  const standardExclusions = `Exclusion 1
Exclusion 2
Exclusion 3`;
  const standardConditions = `Condition 1
Condition 2
Condition 3`;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPolicyFormFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-6">Add New Policy</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Code</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Policy Type</label>
          <select
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={policyType}
            onChange={e => setPolicyType(e.target.value)}
          >
            <option value="">Select Policy Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description of Coverage</label>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-1">Basis of Coverage</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={basis}
            onChange={e => setBasis(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Standard Clauses</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100"
            value={standardClauses}
            readOnly
            rows={4}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Special Clauses</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={specialClauses}
            onChange={e => setSpecialClauses(e.target.value)}
            rows={4}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Standard Excesses</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100"
            value={standardExcesses}
            readOnly
            rows={4}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Special Excesses</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={specialExcesses}
            onChange={e => setSpecialExcesses(e.target.value)}
            rows={4}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Standard Important Exclusions</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100"
            value={standardExclusions}
            readOnly
            rows={4}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Special Important Exclusions</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={specialExclusions}
            onChange={e => setSpecialExclusions(e.target.value)}
            rows={4}
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Standard Conditions and Warranties</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100"
            value={standardConditions}
            readOnly
            rows={4}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Special Conditions and Warranties</h3>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={specialConditions}
            onChange={e => setSpecialConditions(e.target.value)}
            rows={4}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Policy Form Upload</label>
          <input
            type="file"
            className="w-full"
            onChange={handleFileChange}
          />
        </div>
      </form>
    </div>
  );
};

export default AddPolicy;
