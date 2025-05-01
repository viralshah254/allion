import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [viewCategory, setViewCategory] = useState<'non-life' | 'life'>('non-life');

  const monthlyPremium = 12757373.50;
  const totalCommissions = parseFloat((monthlyPremium * 0.1).toFixed(2));

  return (
    <div className="bg-seasalt min-h-screen">
        <div className="p-8">
          {/* Header Actions */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Welcome to Allion Brokerage Dashboard</h1>
            <div className="space-x-4">
              <button className="bg-oda-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90">New Policy</button>
              <button className="bg-oda-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90">Log Claim</button>
              <Link to="/dashboard/add-client" className="bg-oda-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                Add Client
              </Link>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
            <p className="font-helvetica text-sm">⚠️ 2 policies expiring in 5 days · 1 high-value claim pending review</p>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            {/* Active Policies */}
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-airforce-blue">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Active Policies</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">4</p>
            </div>
            {/* Monthly Premium */}
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-auburn">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Monthly Premium</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">
                {`KES ${monthlyPremium.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </p>
            </div>
            {/* Loss Ratio */}
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-red-500">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Loss Ratio (YTD)</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">42%</p>
            </div>
            {/* Open Claims */}
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-oda-indigo">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Open Claims</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">1</p>
            </div>
            {/* Total Commissions */}
            <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-amber-500">
              <p className="font-helvetica text-sm text-gray-500 mb-1">Total Commissions</p>
              <p className="font-helvetica font-bold text-2xl text-oda-blue">
                {`KES ${totalCommissions.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </p>
              <p className="font-helvetica text-xs text-gray-400 mt-2">Earned this month</p>
            </div>
          </div>

          {/* Policy Breakdown Toggle */}
          <div className="flex justify-center items-center mb-6 space-x-4">
            <button
              onClick={() => setViewCategory('non-life')}
              className={`px-4 py-2 rounded-lg font-helvetica ${
                viewCategory === 'non-life'
                  ? 'bg-oda-blue text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Non‑Life
            </button>
            <button
              onClick={() => setViewCategory('life')}
              className={`px-4 py-2 rounded-lg font-helvetica ${
                viewCategory === 'life'
                  ? 'bg-oda-blue text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Life
            </button>
          </div>

          {/* Policy Type Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {viewCategory === 'non-life' ? (
              <>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-airforce-blue">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Motor</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">18</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-auburn">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Goods in Transit</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">7</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-oda-indigo">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Marine</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">4</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-green-500">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Property</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">12</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-teal-500">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Term Life</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">25</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-purple-500">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Whole Life</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">9</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-auburn">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Endowment</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">6</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-airforce-blue">
                  <p className="font-helvetica text-sm text-gray-500 mb-1">Group Life</p>
                  <p className="font-helvetica font-bold text-2xl text-oda-blue">15</p>
                </div>
              </>
            )}
          </div>

          {/* Trend Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="font-helvetica font-bold text-oda-blue mb-4">Premiums Over Time</h3>
              <div className="h-40 flex items-center justify-center text-gray-400">[Sparkline Chart]</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="font-helvetica font-bold text-oda-blue mb-4">Policies Issued</h3>
              <div className="h-40 flex items-center justify-center text-gray-400">[Sparkline Chart]</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="font-helvetica font-bold text-oda-blue mb-4">Claims Frequency</h3>
              <div className="h-40 flex items-center justify-center text-gray-400">[Sparkline Chart]</div>
            </div>
          </div>

          {/* Tasks & Notifications */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-8">
            <h3 className="font-helvetica font-bold text-oda-blue mb-3">Pending Actions</h3>
            <ul className="list-disc list-inside">
              <li className="font-helvetica text-sm">Approve claim #A-78945</li>
              <li className="font-helvetica text-sm">Renew policy POL456 by 08/22/2025</li>
              <li className="font-helvetica text-sm">Review new client application for Acme Co.</li>
            </ul>
          </div>

          {/* Agent Leaderboard */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-8">
            <h3 className="font-helvetica font-bold text-oda-blue mb-3">Top Agents</h3>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Agent</th>
                  <th className="px-4 py-2 text-right">Premium Sold</th>
                  <th className="px-4 py-2 text-right">Commissions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">Jane Smith</td>
                  <td className="border px-4 py-2 text-right">KES 120,000</td>
                  <td className="border px-4 py-2 text-right">KES 12,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2 text-right">KES 85,000</td>
                  <td className="border px-4 py-2 text-right">KES 8,500</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border px-4 py-2">Mary Wanjiku</td>
                  <td className="border px-4 py-2 text-right">KES 60,000</td>
                  <td className="border px-4 py-2 text-right">KES 6,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quick Access Shortcuts */}
          <div className="mt-8 p-8 bg-seasalt">
            <h3 className="font-helvetica font-bold text-oda-blue text-xl mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <Link to="/clients" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">All Clients</span>
              </Link>
              <Link to="/policies" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">All Policies</span>
              </Link>
              <Link to="/renewals" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">Renewals</span>
              </Link>
              <Link to="/claims" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">Claims</span>
              </Link>
              <Link to="/commissions" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">Commissions</span>
              </Link>
              <Link to="/reports" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">Reports</span>
              </Link>
              <Link to="/policy-templates" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">Templates</span>
              </Link>
              <Link to="/policy-calculator" className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 flex items-center justify-center">
                <span className="font-helvetica font-bold">Calculator</span>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;