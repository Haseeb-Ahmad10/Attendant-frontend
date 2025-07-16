import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Pages/SignIn';
import ChangePassword from './components/Pages/ChangePassword';
import UserDashboard from './components/Dashboards/UserDashboard';

function App() {
  return (
    <React.Fragment>
    {/* <SignIn /> */}
    <Router>
     <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/dashboard" element={<UserDashboard />} />
     </Routes>
  </Router>
  </React.Fragment>
  );
}

export default App;
