// components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('hasChangedPassword');
        navigate('/')
    }

  return( 
    <React.Fragment>
  <h1>Welcome to the Dashboard!</h1>;
  <button onClick={handleLogout}>Logout</button>
  </React.Fragment>
)
};

export default UserDashboard;
