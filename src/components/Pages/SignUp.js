import React, { useState } from 'react';
import axios from 'axios';
import classes from './SignUp.module.css'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'user',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = 'Valid 10-digit phone number is required';
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (!['user', 'admin'].includes(formData.role))
      newErrors.role = 'Role must be user or admin';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      console.log('User registered successfully!');
      setFormData({ name: '', email: '', phone: '', password: '', role: 'user' });
    } catch (err) {
      console.log(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form className={classes['signup-container']} onSubmit={handleSubmit}>
      <h2 className={classes['signup-title']}>Sign Up</h2>

      <div className={classes['signup-form-group']}>
        <label className={classes['signup-label']}>Name</label>
        <input
          className={classes['signup-input']}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className={classes['signup-error']}>{errors.name}</p>}
      </div>

      <div className={classes['signup-form-group']}>
        <label className={classes['signup-label']}>Email</label>
        <input
          className={classes['signup-input']}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className={classes['signup-error']}>{errors.email}</p>}
      </div>

      <div className={classes['signup-form-group']}>
        <label className={classes['signup-label']}>Phone</label>
        <input
          className={classes['signup-input']}
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className={classes['signup-error']}>{errors.phone}</p>}
      </div>

      <div className={classes['signup-form-group']}>
        <label className={classes['signup-label']}>Password</label>
        <input
          className={classes['signup-input']}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className={classes['signup-error']}>{errors.password}</p>}
      </div>

      <div className={classes['signup-form-group']}>
        <label className={classes['signup-label']}>Role</label>
        <select
          className={classes['signup-select']}
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <p className={classes['signup-error']}>{errors.role}</p>}
      </div>

      <button type="submit" className={classes['signup-button']}>Sign Up</button>
    </form>
  );
};

export default SignUp;
