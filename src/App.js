import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Pages/SignIn';
import ChangePassword from './components/Pages/ChangePassword';
import UserDashboard from './components/Dashboards/UserDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <React.Fragment>
    <Router>
     <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
     </Routes>
  </Router>
  </React.Fragment>
  );
}

export default App;
