import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Pages/SignIn';
import ChangePassword from './components/Pages/ChangePassword';
import UserDashboard from './components/Dashboards/UserDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import SignUp from './components/Pages/SignUp';
import { AuthProvider } from './components/Context/AuthContext';
import ProtectedRoute from './components/Pages/ProtectedRoute';

function App() {
  return (
    <Router>
    <AuthProvider>
     <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <UserDashboard/>
        </ProtectedRoute>
      } />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
     </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App;
