import React, { useState } from 'react';

const AddClient: React.FC = () => {
  const [type, setType] = useState<'Individual' | 'Company'>('Individual');
  const [isPartOfCompany, setIsPartOfCompany] = useState<'Yes' | 'No' | ''>('');
  const [syncMainContact, setSyncMainContact] = useState(false);
  const [dobFocused, setDobFocused] = useState(false);
  const [dobError, setDobError] = useState('');
  const [formData, setFormData] = useState({
    code: '',
    firstName: '',
    middleName: '',
    lastName: '',
    fullName: '',
    dateOfBirth: '',
    occupation: '',
    postalAddress: '',
    physicalAddress: '',
    coordinates: '',
    phone: '',
    email: '',
    contacts: [{ name: '', phone: '', email: '' }],
    company: '',
    referredBy : '',
    kyc: {} as Record<string, File | null>,
  });

  const handleChange = (field: string, value: string) => {
    const updatedData = { ...formData, [field]: value };

    if (['firstName', 'middleName', 'lastName'].includes(field)) {
      const first = updatedData.firstName?.[0]?.toUpperCase() || 'X';
      const middle = updatedData.middleName ? updatedData.middleName[0]?.toUpperCase() : '';
      const last = updatedData.lastName?.[0]?.toUpperCase() || 'X';
      const suffix = Math.floor(100 + Math.random() * 900);
      // fullName: collapse extra spaces if middle name is missing
      updatedData.fullName = `${updatedData.firstName} ${updatedData.middleName} ${updatedData.lastName}`.trim().replace(/\s+/g, ' ');
      updatedData.code = `CL1${first}${middle || 'X'}${last}${suffix}`;
    }

    if (field === 'dateOfBirth') {
      const value = updatedData.dateOfBirth;
      const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      const match = value.match(regex);
      const currentYear = new Date().getFullYear();

      if (match) {
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10);
        const year = parseInt(match[3], 10);

        const isValidDate = (d: number, m: number, y: number) => {
          const date = new Date(`${y}-${m}-${d}`);
          return (
            date.getDate() === d &&
            date.getMonth() + 1 === m &&
            date.getFullYear() === y
          );
        };

        if (month > 12 || month < 1) {
          setDobError('Month must be between 01 and 12');
        } else if (day < 1 || day > 31) {
          setDobError('Day must be between 01 and 31');
        } else if (year > currentYear) {
          setDobError('Year cannot be in the future');
        } else if (!isValidDate(day, month, year)) {
          setDobError('Invalid date');
        } else {
          setDobError('');
        }
      } else {
        setDobError('Enter valid format: DD/MM/YYYY');
      }
    }

    if (syncMainContact) {
      const contacts = [...formData.contacts];
      contacts[0] = {
        name: `${updatedData.firstName} ${updatedData.middleName} ${updatedData.lastName}`.trim(),
        phone: updatedData.phone.startsWith('+254') ? updatedData.phone : `+254${updatedData.phone.replace(/^0+/, '')}`,
        email: updatedData.email
      };
      updatedData.contacts = contacts;
    }

    setFormData(updatedData);
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData({ ...formData, kyc: { ...formData.kyc, [field]: file } });
  };

  const handleSubmit = () => {
    console.log('Submit', formData);
  };

  const renderKYCFields = () => {
    if (type === 'Individual') {
      return (
        <>
          <label className="block mt-4 font-helvetica">ID (Required)</label>
          <input type="file" onChange={(e) => handleFileChange('id', e.target.files?.[0] || null)} />
          <label className="block mt-4 font-helvetica">KRA PIN (Required)</label>
          <input type="file" onChange={(e) => handleFileChange('kraPin', e.target.files?.[0] || null)} />
          <label className="block mt-4 font-helvetica">Proof of Address</label>
          <input type="file" onChange={(e) => handleFileChange('addressProof', e.target.files?.[0] || null)} />
        </>
      );
    } else {
      return (
        <>
          <label className="block mt-4 font-helvetica">Certificate of Incorporation</label>
          <input type="file" onChange={(e) => handleFileChange('cert', e.target.files?.[0] || null)} />
          <label className="block mt-4 font-helvetica">Form CR12 (Required)</label>
          <input type="file" onChange={(e) => handleFileChange('cr12', e.target.files?.[0] || null)} />
          <label className="block mt-4 font-helvetica">KRA PIN (Required)</label>
          <input type="file" onChange={(e) => handleFileChange('kraPin', e.target.files?.[0] || null)} />
          <label className="block mt-4 font-helvetica">Proof of Address</label>
          <input type="file" onChange={(e) => handleFileChange('addressProof', e.target.files?.[0] || null)} />
          <label className="block mt-4 font-helvetica">Director ID</label>
          <input type="file" onChange={(e) => handleFileChange('directorId', e.target.files?.[0] || null)} />
          <label className="block mt-4 font-helvetica">Director KRA PIN</label>
          <input type="file" onChange={(e) => handleFileChange('directorKraPin', e.target.files?.[0] || null)} />
        </>
      );
    }
  };

  return (
    <div className="p-8 bg-seasalt min-h-screen">
      <h1 className="text-2xl font-bold font-helvetica text-oda-blue mb-6">Add New Client</h1>
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div className="flex gap-4">
          <label className="font-helvetica">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value as 'Individual' | 'Company')} className="border rounded p-2">
            <option value="Individual">Individual</option>
            <option value="Company">Company</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <input
              className="border rounded p-2 font-helvetica bg-gray-100 text-gray-700 w-full"
              value={formData.code}
              readOnly
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              placeholder="First Name"
              className="border rounded p-2 font-helvetica"
              value={formData.firstName}
              onChange={(e) => {
                const value = e.target.value.replace(/\s/g, '');
                handleChange('firstName', value.charAt(0).toUpperCase() + value.slice(1));
              }}
            />
            <input
              placeholder="Middle Name"
              className="border rounded p-2 font-helvetica"
              value={formData.middleName}
              onChange={(e) => {
                const value = e.target.value.replace(/\s/g, '');
                handleChange('middleName', value.charAt(0).toUpperCase() + value.slice(1));
              }}
            />
            <input
              placeholder="Last Name"
              className="border rounded p-2 font-helvetica"
              value={formData.lastName}
              onChange={(e) => {
                const value = e.target.value.replace(/\s/g, '');
                handleChange('lastName', value.charAt(0).toUpperCase() + value.slice(1));
              }}
            />
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Date of Birth (DD/MM/YYYY)"
              className="border rounded p-2 font-helvetica w-full"
              value={formData.dateOfBirth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('dateOfBirth', e.target.value)}
              onFocus={() => setDobFocused(true)}
              onBlur={() => setDobFocused(false)}
            />
            {dobFocused && (
              <p className="text-xs text-gray-500 font-helvetica mt-1">DD/MM/YYYY</p>
            )}
            {dobError && (
              <p className="text-xs text-red-500 font-helvetica mt-1">{dobError}</p>
            )}
          </div>
          <input placeholder="Occupation / Business" className="border rounded p-2 font-helvetica" onChange={(e) => handleChange('occupation', e.target.value)} />
          <input placeholder="Postal Address" className="border rounded p-2 font-helvetica" onChange={(e) => handleChange('postalAddress', e.target.value)} />
          <input placeholder="Physical Address" className="border rounded p-2 font-helvetica" onChange={(e) => handleChange('physicalAddress', e.target.value)} />
          <input placeholder="Coordinates" className="border rounded p-2 font-helvetica" onChange={(e) => handleChange('coordinates', e.target.value)} />
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-500 font-helvetica select-none">+254</span>
            <input
              placeholder="7XXXXXXXX"
              className="pl-14 border rounded p-2 font-helvetica w-full"
              onChange={(e) => {
                let value = e.target.value;
                if (!value.startsWith('+254')) {
                  value = `+254${value.replace(/^0+/, '')}`;
                }
                handleChange('phone', value);
              }}
              value={formData.phone.replace('+254', '')}
            />
          </div>
          <input placeholder="Email Address" className="border rounded p-2 font-helvetica" onChange={(e) => handleChange('email', e.target.value)} />
        </div>

        <h3 className="mt-6 font-semibold font-helvetica text-oda-blue">Contact Persons</h3>
        {formData.contacts.map((contact, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <input
              placeholder="Name"
              className="border rounded p-2 font-helvetica"
              value={contact.name}
              onChange={(e) => {
                const contacts = [...formData.contacts];
                contacts[index].name = e.target.value;
                setFormData({ ...formData, contacts });
              }}
            />
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500 font-helvetica select-none">+254</span>
              <input
                placeholder="7XXXXXXXX"
                className="pl-14 border rounded p-2 font-helvetica"
                value={contact.phone.replace('+254', '')}
                onChange={(e) => {
                  const contacts = [...formData.contacts];
                  const value = e.target.value.startsWith('+254') ? e.target.value : `+254${e.target.value.replace(/^0+/, '')}`;
                  contacts[index].phone = value;
                  setFormData({ ...formData, contacts });
                }}
              />
            </div>
            <input
              placeholder="Email"
              className="border rounded p-2 font-helvetica"
              value={contact.email}
              onChange={(e) => {
                const contacts = [...formData.contacts];
                contacts[index].email = e.target.value;
                setFormData({ ...formData, contacts });
              }}
            />
            {index === 0 && (
              <div className="md:col-span-3 flex items-center gap-2 mt-1">
                <input
                  id="sameContact"
                  type="checkbox"
                  className="accent-oda-blue"
                  checked={syncMainContact}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setSyncMainContact(checked);
                    const contacts = [...formData.contacts];
                    if (checked) {
                      contacts[0] = {
                        name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
                        phone: formData.phone.startsWith('+254') ? formData.phone : `+254${formData.phone.replace(/^0+/, '')}`,
                        email: formData.email
                      };
                    } else {
                      contacts[0] = { name: '', phone: '', email: '' };
                    }
                    setFormData({ ...formData, contacts });
                  }}
                />
                <label htmlFor="sameContact" className="text-sm font-helvetica text-gray-700">
                  Same as main contact
                </label>
              </div>
            )}
          </div>
        ))}
        <button
          type="button"
          className="text-sm text-oda-blue font-helvetica underline mb-4"
          onClick={() => setFormData({ ...formData, contacts: [...formData.contacts, { name: '', phone: '', email: '' }] })}
        >
          + Add another contact
        </button>

        {type === 'Individual' && (
          <>
            <label className="font-helvetica">Is the individual part of a company?</label>
            <select
              value={isPartOfCompany}
              onChange={(e) => setIsPartOfCompany(e.target.value as 'Yes' | 'No')}
              className="border rounded p-2 font-helvetica mb-4"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </>
        )}

        {type === 'Individual' && isPartOfCompany === 'Yes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <select
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className="border rounded p-2 font-helvetica"
            >
              <option value="">Select Company</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
              <option value="Company C">Company C</option>
            </select>
          </div>
        )}

        <div className="mt-4">
          <input
            placeholder="Referred By (optional)"
            className="border rounded p-2 font-helvetica w-full"
            value={formData.referredBy}
            onChange={(e) => handleChange('referredBy', e.target.value)}
          />
        </div>

        <h3 className="mt-6 font-semibold font-helvetica text-oda-blue">KYC / CDD Documents</h3>
        {renderKYCFields()}

        <button onClick={handleSubmit} className="mt-6 px-6 py-2 bg-oda-blue text-white rounded font-helvetica hover:bg-opacity-90">
          Submit Client
        </button>
      </div>
    </div>
  );
};

export default AddClient;