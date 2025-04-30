

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const settingsItems = [
  { name: 'Profile', path: 'profile' },
  { name: 'Users & Roles', path: 'users' },
  { name: 'Audit Logs', path: 'audit-logs' },
  { name: 'Notifications', path: 'notifications' },
  { name: 'Company Profile', path: 'company' },
  { name: 'API Keys', path: 'api-keys' },
  { name: 'Billing', path: 'billing' },
];

const Settings: React.FC = () => (
  <div className="flex h-full">
    {/* Sidebar menu */}
    <nav className="w-1/4 p-4 border-r border-gray-200">
      <ul className="space-y-2">
        {settingsItems.map(item => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-oda-blue text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    {/* Content area */}
    <main className="flex-1 p-6 overflow-auto">
      <Outlet />
    </main>
  </div>
);

export default Settings;