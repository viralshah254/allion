

import React, { useEffect, useState } from 'react';

interface Template {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  date: string;
}

const PolicyTemplates: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]);

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = () => {
    // TODO: Connect to service later
    setTemplates([
      { id: '1', name: 'Motor Insurance', description: 'Template for motor vehicle policies', createdBy: 'Admin', date: new Date().toISOString() },
      { id: '2', name: 'Homeowner Insurance', description: 'Template for homeowner policies', createdBy: 'Admin', date: new Date().toISOString() },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Policy Templates</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Created By</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {templates.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">No templates available.</td>
            </tr>
          ) : (
            templates.map(temp => (
              <tr key={temp.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{temp.id}</td>
                <td className="border px-4 py-2">{temp.name}</td>
                <td className="border px-4 py-2">{temp.description}</td>
                <td className="border px-4 py-2">{temp.createdBy}</td>
                <td className="border px-4 py-2">{new Date(temp.date).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PolicyTemplates;