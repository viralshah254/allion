import React, { useState } from 'react';

const AddPolicy = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [policyType, setPolicyType] = useState('');
  const [insurer, setInsurer] = useState('');

  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [basis, setBasis] = useState('');

  const [stdClauses, setStdClauses] = useState<string[]>([]);
  const [specialClauses, setSpecialClauses] = useState<string[]>([]);

  const [stdExcesses, setStdExcesses] = useState<string[]>([]);
  const [specialExcesses, setSpecialExcesses] = useState<string[]>([]);

  const [stdExclusions, setStdExclusions] = useState<string[]>([]);
  const [specialExclusions, setSpecialExclusions] = useState<string[]>([]);

  const [stdConditions, setStdConditions] = useState<string[]>([]);
  const [specialConditions, setSpecialConditions] = useState<string[]>([]);

  const [itemInput, setItemInput] = useState('');
  const [currentList, setCurrentList] = useState<
    | 'stdClauses'
    | 'specialClauses'
    | 'stdExcesses'
    | 'specialExcesses'
    | 'stdExclusions'
    | 'specialExclusions'
    | 'stdConditions'
    | 'specialConditions'
  >('stdClauses');

  const handleAddItem = () => {
    if (!itemInput.trim()) return;
    switch (currentList) {
      case 'stdClauses':
        setStdClauses([...stdClauses, itemInput.trim()]);
        break;
      case 'specialClauses':
        setSpecialClauses([...specialClauses, itemInput.trim()]);
        break;
      case 'stdExcesses':
        setStdExcesses([...stdExcesses, itemInput.trim()]);
        break;
      case 'specialExcesses':
        setSpecialExcesses([...specialExcesses, itemInput.trim()]);
        break;
      case 'stdExclusions':
        setStdExclusions([...stdExclusions, itemInput.trim()]);
        break;
      case 'specialExclusions':
        setSpecialExclusions([...specialExclusions, itemInput.trim()]);
        break;
      case 'stdConditions':
        setStdConditions([...stdConditions, itemInput.trim()]);
        break;
      case 'specialConditions':
        setSpecialConditions([...specialConditions, itemInput.trim()]);
        break;
    }
    setItemInput('');
  };

  const handleDeleteItem = (listName: typeof currentList, index: number) => {
    switch (listName) {
      case 'stdClauses':
        setStdClauses(stdClauses.filter((_, i) => i !== index));
        break;
      case 'specialClauses':
        setSpecialClauses(specialClauses.filter((_, i) => i !== index));
        break;
      case 'stdExcesses':
        setStdExcesses(stdExcesses.filter((_, i) => i !== index));
        break;
      case 'specialExcesses':
        setSpecialExcesses(specialExcesses.filter((_, i) => i !== index));
        break;
      case 'stdExclusions':
        setStdExclusions(stdExclusions.filter((_, i) => i !== index));
        break;
      case 'specialExclusions':
        setSpecialExclusions(specialExclusions.filter((_, i) => i !== index));
        break;
      case 'stdConditions':
        setStdConditions(stdConditions.filter((_, i) => i !== index));
        break;
      case 'specialConditions':
        setSpecialConditions(specialConditions.filter((_, i) => i !== index));
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      policyType,
      insurer,
      code,
      description,
      basis,
      stdClauses,
      specialClauses,
      stdExcesses,
      specialExcesses,
      stdExclusions,
      specialExclusions,
      stdConditions,
      specialConditions,
    });
    // TODO: submit data to API
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-6">Add New Policy</h2>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
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
            <div className="mb-8">
              <label className="block text-sm font-medium mb-1">Insurer</label>
              <select
                className="w-full border border-gray-300 px-3 py-2 rounded"
                value={insurer}
                onChange={e => setInsurer(e.target.value)}
              >
                <option value="">Select Insurer</option>
                <option value="insurer1">Insurer 1</option>
                <option value="insurer2">Insurer 2</option>
                <option value="insurer3">Insurer 3</option>
              </select>
            </div>
            <div className="mt-6">
              <button
                type="button"
                disabled={!policyType || !insurer}
                onClick={() => setCurrentStep(2)}
                className={`px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${
                  !policyType || !insurer ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
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

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </>
        )}

        {currentStep === 3 && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Select List to Edit</label>
              <select
                className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
                value={currentList}
                onChange={e =>
                  setCurrentList(
                    e.target.value as
                      | 'stdClauses'
                      | 'specialClauses'
                      | 'stdExcesses'
                      | 'specialExcesses'
                      | 'stdExclusions'
                      | 'specialExclusions'
                      | 'stdConditions'
                      | 'specialConditions'
                  )
                }
              >
                <option value="stdClauses">Standard Clauses</option>
                <option value="specialClauses">Special Clauses</option>
                <option value="stdExcesses">Standard Excesses</option>
                <option value="specialExcesses">Special Excesses</option>
                <option value="stdExclusions">Standard Important Exclusions</option>
                <option value="specialExclusions">Special Important Exclusions</option>
                <option value="stdConditions">Standard Conditions and Warranties</option>
                <option value="specialConditions">Special Conditions and Warranties</option>
              </select>
              <div className="flex mb-6">
                <input
                  type="text"
                  className="flex-grow border border-gray-300 px-3 py-2 rounded-l"
                  value={itemInput}
                  onChange={e => setItemInput(e.target.value)}
                  placeholder="Enter item to add"
                />
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="px-4 py-2 bg-green-600 text-white rounded-r hover:bg-green-700"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="space-y-6 max-h-96 overflow-auto mb-6">
              <ListDisplay
                title="Standard Clauses"
                items={stdClauses}
                onDelete={index => handleDeleteItem('stdClauses', index)}
              />
              <ListDisplay
                title="Special Clauses"
                items={specialClauses}
                onDelete={index => handleDeleteItem('specialClauses', index)}
              />
              <ListDisplay
                title="Standard Excesses"
                items={stdExcesses}
                onDelete={index => handleDeleteItem('stdExcesses', index)}
              />
              <ListDisplay
                title="Special Excesses"
                items={specialExcesses}
                onDelete={index => handleDeleteItem('specialExcesses', index)}
              />
              <ListDisplay
                title="Standard Important Exclusions"
                items={stdExclusions}
                onDelete={index => handleDeleteItem('stdExclusions', index)}
              />
              <ListDisplay
                title="Special Important Exclusions"
                items={specialExclusions}
                onDelete={index => handleDeleteItem('specialExclusions', index)}
              />
              <ListDisplay
                title="Standard Conditions and Warranties"
                items={stdConditions}
                onDelete={index => handleDeleteItem('stdConditions', index)}
              />
              <ListDisplay
                title="Special Conditions and Warranties"
                items={specialConditions}
                onDelete={index => handleDeleteItem('specialConditions', index)}
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Template
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

type ListDisplayProps = {
  title: string;
  items: string[];
  onDelete: (index: number) => void;
};

const ListDisplay = ({ title, items, onDelete }: ListDisplayProps) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {items.length === 0 ? (
      <p className="text-gray-500 italic">No items added.</p>
    ) : (
      <ul className="border border-gray-300 rounded p-3 max-h-48 overflow-auto">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center py-1 border-b last:border-b-0">
            <span>{item}</span>
            <button
              type="button"
              onClick={() => onDelete(index)}
              className="text-red-600 font-bold px-2 hover:text-red-800"
              aria-label={`Delete ${item}`}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default AddPolicy;
