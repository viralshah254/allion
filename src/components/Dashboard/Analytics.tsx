import React from 'react';

const Analytics: React.FC = () => {
  return (
    <div className="p-8 bg-seasalt min-h-screen">
      <div className="mb-6">
        <h1 className="font-helvetica font-bold text-2xl text-oda-blue">Analytics</h1>
        <p className="font-helvetica text-gray-600">View detailed insights about your insurance portfolio</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-airforce-blue">
          <p className="font-helvetica text-sm text-gray-500 mb-1">Year-to-Date Premiums</p>
          <p className="font-helvetica font-bold text-2xl text-oda-blue">$15,306.00</p>
          <p className="font-helvetica text-xs text-gray-400 mt-2">+5.2% from last year</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-auburn">
          <p className="font-helvetica text-sm text-gray-500 mb-1">Claims Filed</p>
          <p className="font-helvetica font-bold text-2xl text-oda-blue">3</p>
          <p className="font-helvetica text-xs text-gray-400 mt-2">-1 from last year</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-green-500">
          <p className="font-helvetica text-sm text-gray-500 mb-1">Savings from Bundling</p>
          <p className="font-helvetica font-bold text-2xl text-oda-blue">$748.50</p>
          <p className="font-helvetica text-xs text-gray-400 mt-2">15% discount applied</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="font-helvetica font-bold text-oda-blue mb-4">Premium Trend</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">
            {/* Placeholder for chart */}
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              <p className="font-helvetica">Premium trend chart will appear here</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="font-helvetica font-bold text-oda-blue mb-4">Claims History</h3>
          <div className="h-64 flex items-center justify-center text-gray-400">
            {/* Placeholder for chart */}
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              <p className="font-helvetica">Claims history chart will appear here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Analysis */}
      <div className="bg-white rounded-lg shadow-md p-5 mb-8">
        <h3 className="font-helvetica font-bold text-oda-blue mb-4">Coverage Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 font-helvetica font-bold text-oda-blue">Policy Type</th>
                <th className="p-3 font-helvetica font-bold text-oda-blue">Current Coverage</th>
                <th className="p-3 font-helvetica font-bold text-oda-blue">Recommended</th>
                <th className="p-3 font-helvetica font-bold text-oda-blue">Difference</th>
                <th className="p-3 font-helvetica font-bold text-oda-blue">Annual Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-helvetica">Auto Insurance</td>
                <td className="p-3 font-helvetica">$250k/$500k</td>
                <td className="p-3 font-helvetica">$500k/$1M</td>
                <td className="p-3 font-helvetica text-yellow-600">+$250k/$500k</td>
                <td className="p-3 font-helvetica">+$120</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-helvetica">Home Insurance</td>
                <td className="p-3 font-helvetica">$350,000</td>
                <td className="p-3 font-helvetica">$450,000</td>
                <td className="p-3 font-helvetica text-yellow-600">+$100,000</td>
                <td className="p-3 font-helvetica">+$185</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-3 font-helvetica">Life Insurance</td>
                <td className="p-3 font-helvetica">$500,000</td>
                <td className="p-3 font-helvetica">$750,000</td>
                <td className="p-3 font-helvetica text-yellow-600">+$250,000</td>
                <td className="p-3 font-helvetica">+$240</td>
              </tr>
              <tr>
                <td className="p-3 font-helvetica">Umbrella Policy</td>
                <td className="p-3 font-helvetica">Not Covered</td>
                <td className="p-3 font-helvetica">$1,000,000</td>
                <td className="p-3 font-helvetica text-red-600">+$1,000,000</td>
                <td className="p-3 font-helvetica">+$350</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <button className="font-helvetica bg-oda-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors">
            Schedule Coverage Review
          </button>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white rounded-lg shadow-md p-5">
        <h3 className="font-helvetica font-bold text-oda-blue mb-4">Risk Assessment</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-1/4 font-helvetica">Overall Risk Score:</div>
            <div className="w-3/4">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-4 bg-green-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="font-helvetica text-green-600">Low Risk</span>
                <span className="font-helvetica text-green-600">75/100</span>
                <span className="font-helvetica text-gray-500">High Risk</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/4 font-helvetica">Auto Risk:</div>
            <div className="w-3/4">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-4 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="font-helvetica text-yellow-600">Medium Risk</span>
                <span className="font-helvetica text-yellow-600">60/100</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/4 font-helvetica">Home Risk:</div>
            <div className="w-3/4">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-4 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="font-helvetica text-green-600">Low Risk</span>
                <span className="font-helvetica text-green-600">85/100</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/4 font-helvetica">Life Risk:</div>
            <div className="w-3/4">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-4 bg-green-500 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="font-helvetica text-green-600">Low Risk</span>
                <span className="font-helvetica text-green-600">80/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;