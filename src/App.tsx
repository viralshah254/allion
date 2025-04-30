import './App.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/LandingPage/HomePage';
import TailwindTest from './components/TailwindTest';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import PoliciesPage from './components/Sidebar/Policies';
import RenewalsPage from './components/Sidebar/Renewals';
import TemplatesPage from './components/Sidebar/PolicyTemplates';
import CalculatorPage from './components/Sidebar/PolicyCalculator';
import UnderwritingPage from './components/Sidebar/Underwriting';
import RiskScoringPage from './components/Sidebar/RiskScoring';
import ClaimsPage from './components/Sidebar/Claims';
import PaymentsPage from './components/Sidebar/Payments';
import CommissionsPage from './components/Sidebar/Commissions';
import DocumentsPage from './components/Sidebar/DocumentManagement';
import ReportsPage from './components/Sidebar/Reports';
import IntegrationsPage from './components/Sidebar/Integrations';
import SettingsPage from './components/Dashboard/settings';
import DashboardPage from './components/Dashboard/Dashboard';
import AnalyticsPage from './components/Dashboard/Analytics';
import ClientsPage from './components/Dashboard/Clients';
import ChatbotPage from './components/Sidebar/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/tailwind-test" element={<TailwindTest />} />
        
        {/* Protected / Dashboard routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/renewals" element={<RenewalsPage />} />
          <Route path="/policy-templates" element={<TemplatesPage />} />
          <Route path="/policy-calculator" element={<CalculatorPage />} />
          <Route path="/underwriting" element={<UnderwritingPage />} />
          <Route path="/risk-scoring" element={<RiskScoringPage />} />
          <Route path="/claims" element={<ClaimsPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/commissions" element={<CommissionsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/settings/*" element={<SettingsPage />} />
        </Route>
        
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