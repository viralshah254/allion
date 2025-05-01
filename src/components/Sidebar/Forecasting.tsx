// Forecasting.tsx
import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
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

interface Scenario {
  name: string;
  premiumMultiplier: number;
  commissionRate: number;
  retentionRate: number;
  totalPremium: number;
  totalCommission: number;
  netRevenue: number;
  lossRatio: number;
}

const Forecasting: React.FC = () => {
  // Control states
  type Category = 'Non-Life' | 'Life';
  const clientOptions = ['Individual', 'SME', 'Corporate'] as const;
  const providerOptions = ['Jubilee', 'ICEA', 'Britam', 'APA', 'GA'] as const;

  const [category, setCategory] = useState<Category>('Non-Life');
  const [selectedProducts, setSelectedProducts] = useState<ProductLine[]>(
    productOptions.filter(p => (category === 'Non-Life'
      ? ['Motor','Goods in Transit','Marine','Property'].includes(p)
      : ['Term Life','Whole Life','Endowment','Group Life'].includes(p)))
  );
  const [selectedClients, setSelectedClients] = useState<typeof clientOptions[number][]>([...clientOptions]);
  const [selectedProviders, setSelectedProviders] = useState<typeof providerOptions[number][]>([...providerOptions]);
  const [premiumMultiplier, setPremiumMultiplier] = useState(1.0);
  const [commissionRate, setCommissionRate] = useState(0.10);
  const [retentionRate, setRetentionRate] = useState(0.85);
  const selectedTiers: RiskTier[] = ['Low', 'Medium', 'High'];
  const [scenarios, setScenarios] = useState<Scenario[]>([]);

  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  // Baseline data (dummy)
  const baselinePremium = 1000000; // KES
  const baselineLossRatios: Record<RiskTier, number> = {
    Low: 0.30,
    Medium: 0.45,
    High: 0.60
  };

  // Compute metrics
  const kpis = useMemo(() => {
    const totalPremium = baselinePremium * premiumMultiplier * retentionRate;
    const totalCommission = totalPremium * commissionRate;
    const projectedClaims = selectedTiers.reduce(
      (sum, tier) => sum + totalPremium * baselineLossRatios[tier] / selectedTiers.length,
      0
    );
    const netRevenue = totalPremium - totalCommission;
    const lossRatio = projectedClaims / totalPremium;
    return { totalPremium, totalCommission, netRevenue, lossRatio };
  }, [premiumMultiplier, commissionRate, retentionRate, selectedTiers]);

  const chartData = useMemo(() => {
    const labels = Array.from({ length: 6 }, (_, i) =>
      startDate && endDate
        ? new Date(startDate.getTime() + ((endDate.getTime() - startDate.getTime()) / 5) * i)
        : `Month ${i+1}`
    );
    return {
      labels,
      datasets: [
        {
          label: 'Premiums',
          data: labels.map(() => kpis.totalPremium / 6),
          borderColor: '#3b82f6',
          backgroundColor: '#bfdbfe',
        },
        {
          label: 'Commissions',
          data: labels.map(() => kpis.totalCommission / 6),
          borderColor: '#f97316',
          backgroundColor: '#fed7aa',
        },
      ]
    };
  }, [kpis, startDate, endDate]);

  // Save current scenario
  const saveScenario = () => {
    const name = `Scenario ${scenarios.length + 1}`;
    setScenarios(prev => [
      ...prev,
      {
        name,
        premiumMultiplier,
        commissionRate,
        retentionRate,
        totalPremium: kpis.totalPremium,
        totalCommission: kpis.totalCommission,
        netRevenue: kpis.netRevenue,
        lossRatio: kpis.lossRatio
      }
    ]);
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Forecasting & Profit Simulator</h1>

      {/* Date Range Picker */}
      <div className="mb-6">
        <p className="font-medium mb-2">Forecast Period</p>
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update as [Date, Date])}
          isClearable
          className="w-full border-gray-300 rounded p-2"
        />
      </div>

      {/* Category Select */}
      <div className="mb-6">
        <p className="font-medium mb-2">Category</p>
        <Select<{ value: Category; label: Category }, false, never>
          options={[
            { value: 'Non-Life', label: 'Non-Life' },
            { value: 'Life', label: 'Life' }
          ]}
          defaultValue={{ value: category, label: category }}
          onChange={opt => setCategory(opt!.value)}
        />
      </div>

      {/* Product Multi-Select */}
      <div className="mb-6">
        <p className="font-medium mb-2">Product Lines</p>
        <Select<{ value: ProductLine; label: ProductLine }, true, never>
          options={(
            category === 'Non-Life'
              ? ['Motor','Goods in Transit','Marine','Property']
              : ['Term Life','Whole Life','Endowment','Group Life']
          ).map(p => ({ value: p as ProductLine, label: p as ProductLine } as { value: ProductLine; label: ProductLine }))}
          isMulti
          defaultValue={selectedProducts.map(p => ({ value: p, label: p }))}
          onChange={opts => setSelectedProducts(opts!.map(o => o.value))}
        />
      </div>

      {/* Client Type Multi-Select */}
      <div className="mb-6">
        <p className="font-medium mb-2">Client Types</p>
        <Select<{ value: typeof clientOptions[number]; label: typeof clientOptions[number] }, true, never>
          options={clientOptions.map(c => ({ value: c, label: c }))}
          isMulti
          defaultValue={selectedClients.map(c => ({ value: c, label: c }))}
          onChange={opts => setSelectedClients(opts!.map(o => o.value))}
        />
      </div>

      {/* Provider Multi-Select */}
      <div className="mb-6">
        <p className="font-medium mb-2">Insurer Providers</p>
        <Select<{ value: typeof providerOptions[number]; label: typeof providerOptions[number] }, true, never>
          options={providerOptions.map(p => ({ value: p, label: p }))}
          isMulti
          defaultValue={selectedProviders.map(p => ({ value: p, label: p }))}
          onChange={opts => setSelectedProviders(opts!.map(o => o.value))}
        />
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Premium Multiplier */}
        <div>
          <label className="block font-medium">Premium Multiplier ({(premiumMultiplier * 100).toFixed(0)}%)</label>
          <input
            type="range"
            min={0.5}
            max={1.5}
            step={0.05}
            value={premiumMultiplier}
            onChange={e => setPremiumMultiplier(Number(e.target.value))}
            className="w-full"
          />
        </div>
        {/* Commission Rate */}
        <div>
          <label className="block font-medium">Commission Rate ({(commissionRate * 100).toFixed(0)}%)</label>
          <input
            type="range"
            min={0}
            max={0.2}
            step={0.01}
            value={commissionRate}
            onChange={e => setCommissionRate(Number(e.target.value))}
            className="w-full"
          />
        </div>
        {/* Retention Rate */}
        <div>
          <label className="block font-medium">Retention Rate ({(retentionRate * 100).toFixed(0)}%)</label>
          <input
            type="range"
            min={0.5}
            max={1.0}
            step={0.05}
            value={retentionRate}
            onChange={e => setRetentionRate(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Premium</p>
          <p className="text-xl font-bold">KES {kpis.totalPremium.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">{selectedProducts.length} Products, {selectedProviders.length} Providers</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Commission</p>
          <p className="text-xl font-bold">KES {kpis.totalCommission.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">{selectedProducts.length} Products, {selectedProviders.length} Providers</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Net Revenue</p>
          <p className="text-xl font-bold">KES {kpis.netRevenue.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">{selectedProducts.length} Products, {selectedProviders.length} Providers</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Projected Loss Ratio</p>
          <p className="text-xl font-bold">{(kpis.lossRatio * 100).toFixed(1)}%</p>
          <p className="text-xs text-gray-500 mt-1">{selectedProducts.length} Products, {selectedProviders.length} Providers</p>
        </div>
      </div>

      {/* Chart Placeholders */}
      <div className="h-64 bg-white rounded shadow p-4">
        <Line data={chartData} options={{
          responsive: true,
          plugins: { legend: { position: 'bottom' } },
          scales: startDate && endDate 
            ? { x: { type: 'time', time: { unit: 'month' } } } 
            : {}
        }} />
      </div>
      <div className="h-64 bg-white rounded shadow p-4">
        <Pie data={{
          labels: selectedTiers,
          datasets: [{
            data: selectedTiers.map(t => baselineLossRatios[t] * 100),
            backgroundColor: ['#10b981','#f59e0b','#ef4444']
          }]
        }} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
      </div>

      {/* Scenario Table */}
      <div className="bg-white rounded shadow overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold">Scenarios</h2>
          <button
            onClick={saveScenario}
            className="bg-oda-blue text-white px-3 py-1 rounded"
          >
            Save Scenario
          </button>
        </div>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Premium Mult.</th>
              <th className="px-4 py-2">Comm %</th>
              <th className="px-4 py-2">Retention %</th>
              <th className="px-4 py-2">Total Premium</th>
              <th className="px-4 py-2">Commission</th>
              <th className="px-4 py-2">Net Revenue</th>
              <th className="px-4 py-2">Loss Ratio</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map(s => (
              <tr key={s.name} className="hover:bg-gray-50">
                <td className="border px-2 py-1">{s.name}</td>
                <td className="border px-2 py-1">{(s.premiumMultiplier * 100).toFixed(0)}%</td>
                <td className="border px-2 py-1">{(s.commissionRate * 100).toFixed(0)}%</td>
                <td className="border px-2 py-1">{(s.retentionRate * 100).toFixed(0)}%</td>
                <td className="border px-2 py-1">KES {s.totalPremium.toLocaleString()}</td>
                <td className="border px-2 py-1">KES {s.totalCommission.toLocaleString()}</td>
                <td className="border px-2 py-1">KES {s.netRevenue.toLocaleString()}</td>
                <td className="border px-2 py-1">{(s.lossRatio * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Risk Tier Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {(['Low', 'Medium', 'High'] as RiskTier[]).map(tier => (
          <div key={tier} className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">{tier} Risk</p>
            <p className="text-lg font-semibold">Policies: --</p>
            <p className="text-sm">Avg. Loss Ratio: {(baselineLossRatios[tier] * 100).toFixed(0)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecasting;