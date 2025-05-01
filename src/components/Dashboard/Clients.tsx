import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample client data
const initialClients = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    policies: ["Auto", "Home"],
    status: "Active",
    type: "Individual",
    group: "Group A",
    referredBy: "Jane Smith",
    kyc: {
      id: true,
      kraPin: true,
      addressProof: false
    }
  },
  {
    id: 2, 
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 987-6543",
    policies: ["Auto", "Life"],
    status: "Active",
    type: "Individual",
    group: "Group B",
    referredBy: "Michael Brown",
    kyc: {
      id: true,
      kraPin: true,
      addressProof: true
    }
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    phone: "(555) 456-7890",
    policies: ["Home", "Life", "Business"],
    status: "Active",
    type: "Business",
    group: "Group A",
    referredBy: "Emily Williams",
    kyc: {
      id: true,
      kraPin: false,
      addressProof: true
    }
  },
  {
    id: 4,
    name: "Emily Williams",
    email: "emily.w@example.com",
    phone: "(555) 246-8135",
    policies: ["Auto"],
    status: "Pending",
    type: "Individual",
    group: "Group C",
    referredBy: "",
    kyc: {
      id: false,
      kraPin: false,
      addressProof: false
    }
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "(555) 369-2581",
    policies: ["Life"],
    status: "Active",
    type: "Individual",
    group: "Group B",
    referredBy: "John Doe",
    kyc: {
      id: true,
      kraPin: true,
      addressProof: true
    }
  }
];

const Clients: React.FC = () => {
  const [clients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  // Filter clients based on search term
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.policies.some(policy => policy.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="p-8 bg-seasalt min-h-screen">
      <div className="mb-6">
        <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Clients</h1>
        <p className="font-helvetica text-gray-600">Manage your client relationships</p>
      </div>
      
      {/* Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search clients..."
            className="w-full border border-gray-300 rounded-lg p-2 pl-10 font-helvetica"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <button
          onClick={() => navigate('/dashboard/add-client')}
          className="w-full md:w-auto font-helvetica bg-oda-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Client
        </button>
      </div>
      
      {/* Clients Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-helvetica font-bold text-oda-blue">Name</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue">Contact</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue">Policies</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue">Status</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue">Type</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue">Group</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue">Referred By</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue">KYC Status</th>
                <th className="p-4 font-helvetica font-bold text-oda-blue text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.length > 0 ? (
                filteredClients.map((client) => (
                  <tr key={client.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-helvetica font-medium">{client.name}</td>
                    <td className="p-4">
                      <div className="font-helvetica text-sm">{client.email}</div>
                      <div className="font-helvetica text-sm text-gray-500">{client.phone}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {client.policies.map((policy, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 text-xs font-helvetica rounded-full bg-blue-100 text-oda-blue"
                          >
                            {policy}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <span 
                        className={`px-2 py-1 text-xs font-helvetica rounded-full ${
                          client.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="p-4 font-helvetica">{client.type}</td>
                    <td className="p-4 font-helvetica underline text-oda-blue cursor-pointer" onClick={() => alert(`Group: ${client.group}`)}>
                      {client.group || '—'}
                    </td>
                    <td className="p-4 font-helvetica underline text-oda-blue cursor-pointer" onClick={() => alert(`Referred by: ${client.referredBy}`)}>
                      {client.referredBy || '—'}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-helvetica rounded-full ${
                        Object.values(client.kyc).every(Boolean) 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {Object.values(client.kyc).every(Boolean) ? 'Complete' : 'Incomplete'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <button className="p-1 text-gray-500 hover:text-oda-blue">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="p-1 text-gray-500 hover:text-oda-blue">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="p-1 text-gray-500 hover:text-auburn">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-4 text-center font-helvetica text-gray-500">
                    No clients found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t border-gray-200">
          <div className="font-helvetica text-sm text-gray-500">
            Showing {filteredClients.length} of {clients.length} clients
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 font-helvetica text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 font-helvetica text-sm bg-oda-blue text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 font-helvetica text-sm border border-gray-300 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;