

export default function Home() {
  return (
    <div className="p-6 bg-oda-bg min-h-screen">
      Welcome to your Allion Insurance
      <h2 className="text-2xl font-semibold mb-6">Stay ahead with these metrics</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-xl font-bold text-blue-600">Ksh 1,261,285.00</p>
          <p className="text-xs text-gray-400">Delivered Orders</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Avg Order Value</p>
          <p className="text-xl font-bold text-blue-600">Ksh 630,642.50</p>
          <p className="text-xs text-gray-400">Delivered Orders</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Delivered Orders</p>
          <p className="text-xl font-bold text-blue-600">2</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm text-gray-500">Top Order</p>
          <p className="text-xl font-bold text-blue-600">Ksh 1,134,000.00</p>
          <p className="text-xs text-gray-400">Order #6811c3b7</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 mb-8">
        <select className="border border-gray-300 rounded-lg p-2">
          <option>Day</option>
          <option>Week</option>
          <option>Month</option>
        </select>
        <input
          type="text"
          placeholder="Search orders/distributors…"
          className="flex-1 border border-gray-300 rounded-lg p-2"
        />
      </div>

      {/* Charts & Lists */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4 h-64">
          {/* Placeholder for Top 10 Products list */}
          <h3 className="font-medium mb-2">Top 10 Products</h3>
          <ul className="text-sm text-gray-500">
            <li>Fido Dog Food</li>
            <li>Bravo Dog Food – Adult Chicken</li>
            <li>Omega Cat Treats</li>
            {/* … */}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow p-4 h-64">
          {/* Placeholder for Monthly Revenue Trend chart */}
          <h3 className="font-medium mb-2">Monthly Revenue Trend</h3>
          <div className="border border-gray-200 h-full flex items-center justify-center text-gray-300">
            Chart goes here
          </div>
        </div>
      </div>
    </div>
  );
}
