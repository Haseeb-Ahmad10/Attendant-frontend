import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ChangePassword.module.css'

const ChangePassword = () => {
  const [newPIN, setNewPIN] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    // Simulate password change
    localStorage.setItem('hasChangedPassword', 'true');

    // Store the new password in localStorage (for demonstration purposes)
     localStorage.setItem('mockUserPassword', newPIN);

    alert('Password changed successfully, please log in again.');
    navigate('/');
  };

  return (
    <React.Fragment>
        <h2>Change PIN</h2>
      <div className={classes['password-container']}>
    <form onSubmit={handleChange}>
      <input
        type="password"
        value={newPIN}
        onChange={(e) => setNewPIN(e.target.value)}
        placeholder="New PIN"
        required
      />
      <button type="submit">Change PIN</button>
    </form>
    </div>
    </React.Fragment>
  );
};

export default ChangePassword;
