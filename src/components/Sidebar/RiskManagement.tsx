// RiskManagement.tsx
import React, { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

type RiskTier = 'Low' | 'Medium' | 'High';
type ProductLine = 'Motor' | 'Goods in Transit' | 'Marine' | 'Property' | 'Term Life' | 'Whole Life' | 'Endowment' | 'Group Life';

const productOptions: ProductLine[] = [
  'Motor', 'Goods in Transit', 'Marine', 'Property',
  'Term Life', 'Whole Life', 'Endowment', 'Group Life'
];

interface ClientRisk {
  clientId: string;
  clientName: string;
  product: ProductLine;
  riskScore: number; // 0–100
  tier: RiskTier;
  lastClaimDate: string;
  status: 'Active' | 'Suspended' | 'Under Review';
}

const RiskManagement: React.FC = () => {
  // Filters
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [selectedProducts, setSelectedProducts] = useState<ProductLine[]>(productOptions);
  const [selectedTiers, setSelectedTiers] = useState<RiskTier[]>(['High', 'Medium', 'Low']);
  const [searchText, setSearchText] = useState('');

  // Dummy data, to be replaced by service call
  const [data, setData] = useState<ClientRisk[]>([]);

  useEffect(() => {
    // TODO: Fetch real data from service
    const now = new Date();
    setData([
      { clientId: 'C001', clientName: 'Acme Corp', product: 'Motor', riskScore: 85, tier: 'High', lastClaimDate: now.toISOString(), status: 'Under Review' },
      { clientId: 'C002', clientName: 'John Doe', product: 'Property', riskScore: 45, tier: 'Medium', lastClaimDate: now.toISOString(), status: 'Active' },
      { clientId: 'C003', clientName: 'Global Traders Ltd', product: 'Goods in Transit', riskScore: 25, tier: 'Low', lastClaimDate: now.toISOString(), status: 'Active' },
      // more sample rows...
    ]);
  }, []);

  // Filtered list
  const filtered = useMemo(() => {
    return data.filter(item => 
      (!searchText || item.clientName.toLowerCase().includes(searchText.toLowerCase())) &&
      selectedProducts.includes(item.product) &&
      selectedTiers.includes(item.tier) &&
      (
        dateRange[0] === null ||
        dateRange[1] === null ||
        (new Date(item.lastClaimDate) >= dateRange[0]! && new Date(item.lastClaimDate) <= dateRange[1]!)
      )
    );
  }, [data, searchText, selectedProducts, selectedTiers, dateRange]);

  // Chart data by tier
  const chartData = useMemo(() => {
    const counts = selectedTiers.map(t => filtered.filter(item => item.tier === t).length);
    return {
      labels: selectedTiers,
      datasets: [{
        label: 'Client Count',
        data: counts,
        backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
      }]
    };
  }, [filtered, selectedTiers]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Risk Management</h1>

      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block font-medium mb-1">Date Range</label>
          <DatePicker
            selectsRange
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            onChange={(update) => setDateRange(update as [Date, Date])}
            isClearable
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Product Lines</label>
          <Select<{ value: ProductLine; label: ProductLine }, true, never>
            options={productOptions.map(p => ({ value: p, label: p }))}
            isMulti
            defaultValue={productOptions.map(p => ({ value: p, label: p }))}
            onChange={opts => setSelectedProducts(opts!.map(o => o.value))}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Risk Tiers</label>
          <Select<{ value: RiskTier; label: RiskTier }, true, never>
            options={['High','Medium','Low'].map(t => ({ value: t as RiskTier, label: t as RiskTier }))}
            isMulti
            defaultValue={['High','Medium','Low'].map(t => ({ value: t as RiskTier, label: t as RiskTier }))}
            onChange={opts => setSelectedTiers(opts!.map(o => o.value))}
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Search Clients</label>
          <input
            type="text"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Name or ID..."
            className="w-full border-gray-300 rounded p-2"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Clients by Risk Tier</h2>
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
      </div>

      {/* Risk Table */}
      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Client ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Risk Score</th>
              <th className="px-4 py-2">Tier</th>
              <th className="px-4 py-2">Last Claim</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(item => (
              <tr key={item.clientId} className="hover:bg-gray-50">
                <td className="border px-2 py-1">{item.clientId}</td>
                <td className="border px-2 py-1">{item.clientName}</td>
                <td className="border px-2 py-1">{item.product}</td>
                <td className="border px-2 py-1">{item.riskScore}</td>
                <td className="border px-2 py-1">{item.tier}</td>
                <td className="border px-2 py-1">{new Date(item.lastClaimDate).toLocaleDateString()}</td>
                <td className="border px-2 py-1">{item.status}</td>
                <td className="border px-2 py-1">
                  <button className="text-sm text-oda-blue hover:underline mr-2">Review</button>
                  <button className="text-sm text-red-500 hover:underline">Flag</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiskManagement;