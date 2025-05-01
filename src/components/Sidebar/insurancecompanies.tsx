import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialInsuranceCompanies = [
  {
    id: 1,
    name: "SecureLife Assurance",
    category: "Life",
    email: "info@securelife.com",
    phone: "+254 700 111222",
    postal: "P.O. Box 12345 Nairobi",
    physical: "1st Floor, ABC Towers, Nairobi",
    coordinates: "-1.2921, 36.8219",
    group: "Group A",
    contactPersons: [
      {
        name: "Alice Wanjiku",
        department: "Claims",
        phone: "+254 712 345678",
        email: "alice@securelife.com"
      }
    ],
    kyc: {
      certificate: true,
      cr12: true,
      kraPin: false
    },
    policies: []
  },
  {
    id: 2,
    name: "CoverSure General",
    category: "Non-Life",
    email: "support@coversure.com",
    phone: "+254 733 999888",
    postal: "P.O. Box 67890 Mombasa",
    physical: "2nd Floor, XYZ Plaza, Mombasa",
    coordinates: "-4.0435, 39.6682",
    group: "Group B",
    contactPersons: [
      {
        name: "James Otieno",
        department: "Underwriting",
        phone: "+254 723 444555",
        email: "james@coversure.com"
      }
    ],
    kyc: {
      certificate: true,
      cr12: false,
      kraPin: true
    },
    policies: ["Motor", "Marine", "Property", "Travel"]
  }
];

const InsuranceCompanies: React.FC = () => {
  const [companies] = useState(initialInsuranceCompanies);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filtered = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-seasalt min-h-screen">
      <div className="mb-6">
        <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Insurance Companies</h1>
        <p className="font-helvetica text-gray-600">View and manage insurance company partners</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full border border-gray-300 rounded-lg p-2 pl-10 font-helvetica"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <button
          onClick={() => navigate('/dashboard/add-insurance-company')}
          className="w-full md:w-auto font-helvetica bg-oda-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add Insurance Company
        </button>
      </div>

      {filtered.map(company => (
        <div key={company.id} className="mb-4 border border-gray-200 rounded shadow">
          <details className="group bg-white open:bg-gray-50 transition-all">
            <summary className="cursor-pointer px-6 py-4 flex justify-between items-center">
              <div>
                <div className="font-bold font-helvetica text-oda-blue">{company.name}</div>
                <div className="text-sm font-helvetica text-gray-600">{company.email} | {company.phone}</div>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                Object.values(company.kyc).every(Boolean)
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {Object.values(company.kyc).every(Boolean) ? 'KYC Complete' : 'KYC Incomplete'}
              </span>
            </summary>

            <div className="px-6 py-4 border-t text-sm font-helvetica text-gray-700 space-y-2">
              <div><strong>Postal Address:</strong> {company.postal || 'N/A'}</div>
              <div><strong>Physical Address:</strong> {company.physical || 'N/A'}</div>
              <div><strong>Coordinates:</strong> {company.coordinates || 'N/A'}</div>
              <div>
                <strong>Contact Persons:</strong>
                <ul className="list-disc list-inside ml-4">
                  {company.contactPersons.map((p, idx) => (
                    <li key={idx}>
                      {p.name} ({p.department}) – {p.phone}, {p.email}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>KYC Documents:</strong>
                <ul className="list-disc list-inside ml-4">
                  {['certificate', 'cr12', 'kraPin'].map(doc => (
                    <li key={doc}>
                      {doc.toUpperCase()} – <button className="text-oda-blue underline text-xs">View</button> | <button className="text-oda-blue underline text-xs">Download</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>
      ))}

      {/* Placeholder for future API integration or form addition */}
      {/* TODO: Integrate with backend API and implement Add/Edit forms */}
    </div>
  );
};

export default InsuranceCompanies;