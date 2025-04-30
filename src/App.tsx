import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/LandingPage/HomePage';
import TailwindTest from './components/TailwindTest';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Dashboard from './components/Dashboard/Dashboard';
import Analytics from './components/Dashboard/Analytics';
import Clients from './components/Dashboard/Clients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/tailwind-test" element={<TailwindTest />} />
        
        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={
          <DashboardLayout>
            <Analytics />
          </DashboardLayout>
        } />
        <Route path="/clients" element={
          <DashboardLayout>
            <Clients />
          </DashboardLayout>
        } />
        <Route path="/policies" element={
          <DashboardLayout>
            <div className="p-8 bg-seasalt min-h-screen">
              <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Policies</h1>
              <p className="font-helvetica text-gray-600">Manage your insurance policies</p>
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <p className="font-helvetica">Policy management will be implemented soon.</p>
              </div>
            </div>
          </DashboardLayout>
        } />
        <Route path="/claims" element={
          <DashboardLayout>
            <div className="p-8 bg-seasalt min-h-screen">
              <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Claims</h1>
              <p className="font-helvetica text-gray-600">Track and manage your insurance claims</p>
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <p className="font-helvetica">Claims management will be implemented soon.</p>
              </div>
            </div>
          </DashboardLayout>
        } />
        <Route path="/payments" element={
          <DashboardLayout>
            <div className="p-8 bg-seasalt min-h-screen">
              <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Payments</h1>
              <p className="font-helvetica text-gray-600">Manage your payment methods and history</p>
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <p className="font-helvetica">Payment management will be implemented soon.</p>
              </div>
            </div>
          </DashboardLayout>
        } />
        <Route path="/profile" element={
          <DashboardLayout>
            <div className="p-8 bg-seasalt min-h-screen">
              <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Profile</h1>
              <p className="font-helvetica text-gray-600">Manage your account settings</p>
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <p className="font-helvetica">Profile management will be implemented soon.</p>
              </div>
            </div>
          </DashboardLayout>
        } />
        
        {/* 404 route */}
        <Route path="*" element={
          <div className="flex items-center justify-center min-h-screen bg-seasalt">
            <div className="text-center">
              <h1 className="font-helvetica font-bold text-4xl text-oda-blue mb-4">404</h1>
              <p className="font-helvetica text-xl text-gray-600 mb-6">Page Not Found</p>
              <a href="/" className="font-helvetica bg-oda-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors">
                Return Home
              </a>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App