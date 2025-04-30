

import React, { useEffect, useState } from 'react';

interface Report {
  id: string;
  name: string;
  createdBy: string;
  date: string;
  status: string;
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    // TODO: Integrate real report service later
    setReports([
      { id: '1', name: 'Policy Summary', createdBy: 'Admin', date: new Date().toISOString(), status: 'Ready' },
      { id: '2', name: 'Claims Overview', createdBy: 'Admin', date: new Date().toISOString(), status: 'Pending' },
      { id: '3', name: 'Commission Report', createdBy: 'Admin', date: new Date().toISOString(), status: 'Ready' },
    ]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Created By</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-4">No reports available.</td>
            </tr>
          ) : (
            reports.map(report => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{report.id}</td>
                <td className="border px-4 py-2">{report.name}</td>
                <td className="border px-4 py-2">{report.createdBy}</td>
                <td className="border px-4 py-2">{new Date(report.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{report.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;