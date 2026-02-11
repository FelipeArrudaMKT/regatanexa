
import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import LoginForm from './components/LoginForm';

// Error Boundary Fallback
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Ops! Algo deu errado.</h1>
      <p className="text-gray-600 mb-6">O sistema está passando por uma manutenção rápida.</p>
      <button onClick={() => window.location.reload()} className="bg-purple-600 text-white px-6 py-2 rounded-lg font-bold">
        Recarregar Página
      </button>
    </div>
  </div>
);

class SafeBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <ErrorFallback />;
    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <SafeBoundary>
      <HashRouter>
        <Suspense fallback={<div className="min-h-screen bg-[#1a1c2c]" />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </SafeBoundary>
  );
};

export default App;
