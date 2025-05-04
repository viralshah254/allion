import React, { useState, ChangeEvent, FormEvent } from 'react';

type Role = 'Owner' | 'Admin' | 'Editor' | 'Viewer' | 'Technical';

interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: Role;
}

const roles: Role[] = ['Owner', 'Admin', 'Editor', 'Viewer', 'Technical'];

const UsersAndRoles: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      firstName: 'Hassan',
      lastName: 'Khan',
      phone: '0712345678',
      email: 'hassan@allioninsurance.com',
      role: 'Owner',
    },
    {
      firstName: 'Viral',
      lastName: 'Shah',
      phone: '+254738266973',
      email: 'v.shah@odaflow.com',
      role: 'Technical',
    },
    {
      firstName: 'Sissie',
      lastName: 'S',
      phone: '+2543333333',
      email: 'sissie@allioninsurance.com',
      role: 'Admin',
    },
  ]);
  const [form, setForm] = useState<User>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: 'Viewer',
  });
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [transferTo, setTransferTo] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (index: number) => {
    const user = users[index];
    setForm(user);
    setEditingIndex(index);
    setShowForm(true);
    setPassword('');
    setConfirmPassword('');
    setTransferTo(null);
  };

  const handleDelete = (index: number) => {
    // Prevent deletion of Owner role
    if (users[index].role === 'Owner') return;
    setUsers(prev => prev.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setShowForm(false);
      setEditingIndex(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null) {
      setUsers(prev => prev.map((u, i) => i === editingIndex ? form : u));
    } else {
      setUsers(prev => [...prev, form]);
    }
    setForm({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      role: 'Viewer',
    });
    setShowForm(false);
    setEditingIndex(null);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
          <button
            type="button"
            className="px-4 py-2 bg-oda-blue text-white rounded-lg"
            onClick={() => {
              setShowForm(true);
              setEditingIndex(null);
              setPassword('');
              setConfirmPassword('');
              setTransferTo(null);
            }}
          >
            Add User
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl w-full max-w-md mx-4 overflow-hidden">
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close"
                className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full"
                onClick={() => { setShowForm(false); setEditingIndex(null); }}
              >
                <svg className="w-5 h-5 text-gray-500 hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 011.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 015.05 3.636L10 8.586z" clipRule="evenodd" />
                </svg>
              </button>
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800">
                  {editingIndex !== null ? 'Edit User' : 'Add New User'}
                </h3>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-4 grid grid-cols-1 gap-5">
                <div className="text-gray-700 font-medium">User Details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-600" htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-600" htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-600" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm text-gray-600" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label className="mb-1 text-sm text-gray-600" htmlFor="role">Role</label>
                    <select
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {roles.map(r => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Password fields */}
                  {editingIndex !== null && (
                    <>
                      <div className="flex flex-col">
                        <label className="mb-1 text-sm text-gray-600" htmlFor="password">New Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="mb-1 text-sm text-gray-600" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={e => setConfirmPassword(e.target.value)}
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </>
                  )}
                  {/* Ownership transfer */}
                  {editingIndex !== null && form.role === 'Owner' && (
                    <div className="flex flex-col md:col-span-2">
                      <label className="mb-1 text-sm text-gray-600">Transfer Ownership To</label>
                      <select
                        value={transferTo ?? ''}
                        onChange={e => setTransferTo(Number(e.target.value))}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select user</option>
                        {users.map((u, i) =>
                          i !== editingIndex ? (
                            <option key={i} value={i}>
                              {u.firstName + ' ' + u.lastName}
                            </option>
                          ) : null
                        )}
                      </select>
                    </div>
                  )}
                </div>
                {/* Action Buttons */}
                <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                  >
                    {editingIndex !== null ? 'Save Changes' : 'Add User'}
                  </button>
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-800 px-4 py-2"
                    onClick={() => { setShowForm(false); setEditingIndex(null); }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{u.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{u.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{u.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{u.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{u.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <button onClick={() => handleEdit(idx)} className="text-blue-600 hover:text-blue-800">Edit</button>
                      {u.role === 'Owner' ? (
                        <button disabled className="text-gray-400 cursor-not-allowed ml-2">Delete</button>
                      ) : (
                        <button onClick={() => handleDelete(idx)} className="text-red-600 hover:text-red-800 ml-2">Delete</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

};

export default UsersAndRoles;
