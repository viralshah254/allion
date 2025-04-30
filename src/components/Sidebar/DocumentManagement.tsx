

import React, { useEffect, useState } from 'react';

interface Document {
  id: string;
  name: string;
  type: string;
  uploadedBy: string;
  date: string;
  status: string;
}

const DocumentManagement: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = () => {
    // TODO: Connect to service later
    setDocuments([
      { id: '1', name: 'Policy_Template.docx', type: 'Policy Template', uploadedBy: 'Admin', date: new Date().toISOString(), status: 'Active' },
      { id: '2', name: 'Client_Contract.pdf', type: 'Contract', uploadedBy: 'Agent', date: new Date().toISOString(), status: 'Signed' },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Document Management</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Uploaded By</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {documents.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4">No documents available.</td>
            </tr>
          ) : (
            documents.map(doc => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{doc.id}</td>
                <td className="border px-4 py-2">{doc.name}</td>
                <td className="border px-4 py-2">{doc.type}</td>
                <td className="border px-4 py-2">{doc.uploadedBy}</td>
                <td className="border px-4 py-2">{new Date(doc.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{doc.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentManagement;