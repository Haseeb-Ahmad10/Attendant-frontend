import React, { useState } from 'react';
import axios from 'axios';
import classes from './SignUp.module.css'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'user'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', formData);
      
      // On successful signup, redirect to signin page
      if (response.data.message === 'User created successfully') {
        navigate('/signin', { 
          state: { 
            signupSuccess: true,
            email: formData.email 
          } 
        });
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
        <Header/>
    <div className={classes['signup-container']}>
      <h2>Sign Up</h2>
      {error && <div className={classes['error-message']}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={classes['form-group']}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['form-group']}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['form-group']}>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['form-group']}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['form-group']}>
          <label>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <p>
        Already have an account? <a href="/">Sign In</a>
      </p>
    </div>
    </React.Fragment>
  );
};

export default SignUp;
