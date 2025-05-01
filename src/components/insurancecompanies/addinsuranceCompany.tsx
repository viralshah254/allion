import React, { useState } from 'react';

const AddInsuranceCompany: React.FC = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    postal: '',
    physical: '',
    coordinates: '',
    phone: '',
    email: '',
    contacts: [{ name: '', department: '', phone: '', email: '' }],
    branches: [{ name: '', address: '' }],
    kyc: {
      certificate: null,
      cr12: null,
      kraPin: null
    }
  });

  const handleInputChange = (field: string, value: any) => {
    if (field === 'name') {
      const prefix = value.trim().toUpperCase().replace(/[^A-Z]/g, '').substring(0, 3).padEnd(3, 'X');
      const suffix = Math.floor(100 + Math.random() * 900); // random 3-digit number
      setFormData({ ...formData, name: value, code: `IN5${prefix}${suffix}` });
    } else if (field === 'phone') {
      // Prepend +254 if not already present
      const formatted = value.startsWith('+254') ? value : `+254${value.replace(/^0+/, '')}`;
      setFormData({ ...formData, phone: formatted });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleContactChange = (index: number, field: keyof typeof formData.contacts[0], value: string) => {
    const contacts = [...formData.contacts];
    const formatted = field === 'phone'
      ? (value.startsWith('+254') ? value : `+254${value.replace(/^0+/, '')}`)
      : value;
    contacts[index][field] = formatted;
    setFormData({ ...formData, contacts });
  };

  const handleBranchChange = (index: number, field: keyof typeof formData.branches[0], value: string) => {
    const branches = [...formData.branches];
    branches[index][field] = value;
    setFormData({ ...formData, branches });
  };

  const handleKYCUpload = (field: string, file: File | null) => {
    setFormData({ ...formData, kyc: { ...formData.kyc, [field]: file } });
  };

  const addContact = () => {
    setFormData({ ...formData, contacts: [...formData.contacts, { name: '', department: '', phone: '', email: '' }] });
  };

  const addBranch = () => {
    setFormData({ ...formData, branches: [...formData.branches, { name: '', address: '' }] });
  };

  const handleSubmit = () => {
    console.log('Submitting:', formData);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-seasalt to-gray-100 min-h-screen max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold font-helvetica text-oda-blue mb-6">Add Insurance Company</h1>

      {/* Basic Info */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold font-helvetica text-oda-blue mb-3 flex items-center gap-2">
          <span>🏢</span> Basic Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border rounded p-2 font-helvetica bg-gray-100 text-gray-700"
            value={formData.code}
            readOnly
            placeholder="Code"
          />
          <input
            placeholder="Enter full company name"
            className="border rounded p-2 font-helvetica focus:outline-oda-blue"
            onChange={e => handleInputChange('name', e.target.value)}
            value={formData.name}
          />
          <input
            placeholder="Enter postal address"
            className="border rounded p-2 font-helvetica focus:outline-oda-blue"
            onChange={e => handleInputChange('postal', e.target.value)}
            value={formData.postal}
          />
          <input
            placeholder="Enter physical address"
            className="border rounded p-2 font-helvetica focus:outline-oda-blue"
            onChange={e => handleInputChange('physical', e.target.value)}
            value={formData.physical}
          />
          <input
            placeholder="Enter coordinates"
            className="border rounded p-2 font-helvetica focus:outline-oda-blue"
            onChange={e => handleInputChange('coordinates', e.target.value)}
            value={formData.coordinates}
          />
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500 font-helvetica select-none">+254</span>
            <input
              placeholder="7XXXXXXXX"
              className="pl-12 border rounded p-2 font-helvetica w-full focus:outline-oda-blue"
              onChange={e => handleInputChange('phone', e.target.value)}
              value={formData.phone.replace('+254', '')}
            />
          </div>
          <input
            placeholder="Enter general email address"
            className="border rounded p-2 font-helvetica focus:outline-oda-blue md:col-span-2"
            onChange={e => handleInputChange('email', e.target.value)}
            value={formData.email}
          />
        </div>
      </section>

      {/* Contact Persons */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold font-helvetica text-oda-blue mb-3 flex items-center gap-2">
          <span>👤</span> Contact Persons
        </h3>
        {formData.contacts.map((contact, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <input
              placeholder="Enter name"
              className="border rounded p-2 font-helvetica focus:outline-oda-blue"
              onChange={e => handleContactChange(idx, 'name', e.target.value)}
              value={contact.name}
            />
            <input
              placeholder="Enter department"
              className="border rounded p-2 font-helvetica focus:outline-oda-blue"
              onChange={e => handleContactChange(idx, 'department', e.target.value)}
              value={contact.department}
            />
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500 font-helvetica select-none">+254</span>
              <input
                placeholder="7XXXXXXXX"
                className="pl-12 border rounded p-2 font-helvetica w-full focus:outline-oda-blue"
                onChange={e => handleContactChange(idx, 'phone', e.target.value)}
                value={contact.phone.replace('+254', '')}
              />
            </div>
            <input
              placeholder="Enter email"
              className="border rounded p-2 font-helvetica focus:outline-oda-blue md:col-span-2"
              onChange={e => handleContactChange(idx, 'email', e.target.value)}
              value={contact.email}
            />
          </div>
        ))}
        <button
          onClick={addContact}
          className="text-sm font-helvetica text-oda-blue flex items-center gap-2 hover:underline"
          type="button"
        >
          <span>➕</span> Add another contact
        </button>
      </section>

      {/* Branches */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold font-helvetica text-oda-blue mb-3 flex items-center gap-2">
          <span>🏬</span> Branches
        </h3>
        {formData.branches.map((branch, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <input
              placeholder="Enter branch name"
              className="border rounded p-2 font-helvetica focus:outline-oda-blue"
              onChange={e => handleBranchChange(idx, 'name', e.target.value)}
              value={branch.name}
            />
            <input
              placeholder="Enter branch address"
              className="border rounded p-2 font-helvetica focus:outline-oda-blue md:col-span-2"
              onChange={e => handleBranchChange(idx, 'address', e.target.value)}
              value={branch.address}
            />
          </div>
        ))}
        <button
          onClick={addBranch}
          className="text-sm font-helvetica text-oda-blue flex items-center gap-2 hover:underline"
          type="button"
        >
          <span>➕</span> Add another branch
        </button>
      </section>

      {/* KYC Documents */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold font-helvetica text-oda-blue mb-3 flex items-center gap-2">
          <span>📄</span> KYC Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-helvetica text-sm mb-1 block">Certificate of Incorporation</label>
            <input
              type="file"
              className="border border-dashed border-gray-400 p-2 w-full rounded hover:border-oda-blue cursor-pointer"
              onChange={e => handleKYCUpload('certificate', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <label className="font-helvetica text-sm mb-1 block">Form CR12</label>
            <input
              type="file"
              className="border border-dashed border-gray-400 p-2 w-full rounded hover:border-oda-blue cursor-pointer"
              onChange={e => handleKYCUpload('cr12', e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <label className="font-helvetica text-sm mb-1 block">KRA PIN</label>
            <input
              type="file"
              className="border border-dashed border-gray-400 p-2 w-full rounded hover:border-oda-blue cursor-pointer"
              onChange={e => handleKYCUpload('kraPin', e.target.files?.[0] || null)}
            />
          </div>
        </div>
      </section>

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-3 bg-oda-blue text-white rounded font-helvetica shadow hover:bg-blue-800 transition-all duration-300"
        type="button"
      >
        🚀 Submit Insurance Company
      </button>
    </div>
  );
};

export default AddInsuranceCompany;