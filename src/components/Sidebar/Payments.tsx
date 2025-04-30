

import React, { useEffect, useState } from 'react';

interface Payment {
  id: string;
  customerName: string;
  policyId: string;
  date: string;
  amount: number;
  method: string;
  status: string;
}

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    loadPayments();
  }, []);

  const loadPayments = () => {
    // TODO: Connect to service later
    setPayments([
      { id: '1', customerName: 'Jane Smith', policyId: 'POL123', date: new Date().toISOString(), amount: 500.0, method: 'MPesa', status: 'Completed' },
      { id: '2', customerName: 'John Doe', policyId: 'POL124', date: new Date().toISOString(), amount: 750.0, method: 'Bank Transfer', status: 'Pending' },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Policy ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-4">No payments recorded.</td>
            </tr>
          ) : (
            payments.map(payment => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{payment.id}</td>
                <td className="border px-4 py-2">{payment.customerName}</td>
                <td className="border px-4 py-2">{payment.policyId}</td>
                <td className="border px-4 py-2">{new Date(payment.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{payment.amount.toFixed(2)}</td>
                <td className="border px-4 py-2">{payment.method}</td>
                <td className="border px-4 py-2">{payment.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;