
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProfileProvider } from './contexts/ProfileContext';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import PublicProfilePage from './pages/PublicProfilePage';

const AppRoutes: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
            </div>
        );
    }
    
    return (
        <Routes>
            <Route path="/" element={!user ? <LandingPage /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/" />} />
            <Route path="/:username" element={<PublicProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default App;
