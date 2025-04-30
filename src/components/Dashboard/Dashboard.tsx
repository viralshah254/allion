import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-seasalt min-h-screen">
        <div className="p-8">
          <div className="mb-6">
            <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Welcome to your Allion Insurance Dashboard</h1>
            <p className="font-helvetica text-gray-600">Track your policies, claims, and insurance metrics</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-airforce-blue">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Active Policies</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">4</p>
              <p className="font-helvetica text-xs text-gray-400 mt-2">2 Auto, 1 Home, 1 Life</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-auburn">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Premium Value</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">$1,275.50</p>
              <p className="font-helvetica text-xs text-gray-400 mt-2">Monthly payment</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-oda-indigo">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Open Claims</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">1</p>
              <p className="font-helvetica text-xs text-gray-400 mt-2">Auto claim #A-78945</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-green-500">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Coverage Amount</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">$750,000</p>
              <p className="font-helvetica text-xs text-gray-400 mt-2">Total protection</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4 mb-8">
            <select className="border border-gray-300 rounded-lg p-2 font-helvetica text-gray-700">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
            <input
              type="text"
              placeholder="Search policies, claims, or documents..."
              className="flex-1 border border-gray-300 rounded-lg p-2 font-helvetica"
            />
          </div>

          {/* Charts & Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="font-helvetica font-bold text-oda-blue mb-4">Policy Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-helvetica font-bold">Auto Insurance</p>
                    <p className="font-helvetica text-sm text-gray-500">2019 Toyota Camry</p>
                  </div>
                  <div className="text-right">
                    <p className="font-helvetica font-bold text-airforce-blue">$150/month</p>
                    <p className="font-helvetica text-xs text-gray-500">Renews: 10/15/2025</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-helvetica font-bold">Auto Insurance</p>
                    <p className="font-helvetica text-sm text-gray-500">2022 Honda CR-V</p>
                  </div>
                  <div className="text-right">
                    <p className="font-helvetica font-bold text-airforce-blue">$175/month</p>
                    <p className="font-helvetica text-xs text-gray-500">Renews: 08/22/2025</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-helvetica font-bold">Home Insurance</p>
                    <p className="font-helvetica text-sm text-gray-500">123 Main Street</p>
                  </div>
                  <div className="text-right">
                    <p className="font-helvetica font-bold text-airforce-blue">$225/month</p>
                    <p className="font-helvetica text-xs text-gray-500">Renews: 09/01/2025</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-helvetica font-bold">Life Insurance</p>
                    <p className="font-helvetica text-sm text-gray-500">Term Life - 20 Years</p>
                  </div>
                  <div className="text-right">
                    <p className="font-helvetica font-bold text-airforce-blue">$725.50/month</p>
                    <p className="font-helvetica text-xs text-gray-500">Renews: 11/30/2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="font-helvetica font-bold text-oda-blue mb-4">Recent Claims Activity</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                  <div>
                    <p className="font-helvetica font-bold">Claim #A-78945</p>
                    <p className="font-helvetica text-sm text-gray-500">Auto - Minor accident</p>
                  </div>
                  <div className="text-right">
                    <p className="font-helvetica font-bold text-yellow-600">In Progress</p>
                    <p className="font-helvetica text-xs text-gray-500">Filed: 04/10/2025</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border-l-4 border-green-400">
                  <div>
                    <p className="font-helvetica font-bold">Claim #H-45612</p>
                    <p className="font-helvetica text-sm text-gray-500">Home - Water damage</p>
                  </div>
                  <div className="text-right">
                    <p className="font-helvetica font-bold text-green-600">Approved</p>
                    <p className="font-helvetica text-xs text-gray-500">Filed: 02/15/2025</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border-l-4 border-green-400">
                  <div>
                    <p className="font-helvetica font-bold">Claim #A-65478</p>
                    <p className="font-helvetica text-sm text-gray-500">Auto - Windshield replacement</p>
                  </div>
                  <div className="text-right">
                    <p className="font-helvetica font-bold text-green-600">Paid</p>
                    <p className="font-helvetica text-xs text-gray-500">Filed: 01/05/2025</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="font-helvetica bg-oda-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors">
                    View All Claims
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment and Coverage Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg shadow-md p-5 col-span-2">
              <h3 className="font-helvetica font-bold text-oda-blue mb-4">Coverage Distribution</h3>
              <div className="h-64 flex items-center justify-center text-gray-400">
                {/* Placeholder for pie chart */}
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                  <p className="font-helvetica">Coverage distribution chart will appear here</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="font-helvetica font-bold text-oda-blue mb-4">Payment Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="font-helvetica">Next payment:</p>
                  <p className="font-helvetica font-bold">May 1, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-helvetica">Amount due:</p>
                  <p className="font-helvetica font-bold">$1,275.50</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-helvetica">Payment method:</p>
                  <p className="font-helvetica">VISA •••• 4589</p>
                </div>
                <div className="mt-6">
                  <button className="font-helvetica bg-auburn hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors w-full">
                    Make a Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;