import React from 'react';
import { Outlet } from 'react-router-dom';

const Settings: React.FC = () => (
  <main className="settings-content flex-1 p-6 overflow-auto">
    <Outlet />
  </main>
);

export default Settings;