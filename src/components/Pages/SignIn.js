import React from 'react';
import { useState } from 'react';
import classes from './SignIn.module.css';
import Header from '../Header/Header';
import { useAuth } from '../Context/AuthContext';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false);
    }
  };


    return (
        <React.Fragment>
            <Header/>
    <div className={classes['signin-container']}>
      <h2>Sign In</h2>
      {error && <div className={classes['error-message']}>{error.message || error}</div>}
      <form onSubmit={handleSubmit}>
        <div className={classes['form-group']}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes['form-group']}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
    </React.Fragment>


    );
}

export default SignIn;