import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './SignIn.module.css';
import Header from '../Header/Header';

const SignIn = () => {
    // const [username, setUsername] = useState('');
    // const [pin, setPin] = useState('');
    // const [error, setError] = useState('');

    // const navigate = useNavigate()

    // const handleSubmit = async (event) => {
    //     event.preventDefault(); 
    //      setError('')

    //     // fetching api from backend for login
    //     try {

    //         const response = await fetch('http://localhost:5000/api/users/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ username, pin }),
    //         });

    //         const data = await response.json()
    //         if (response.ok && data.redirectTo) {
    //             console.log('Login successful:')
    //             navigate(data.redirectTo)
    //         } else {
    //             console.log(data.message);
    //             setError(data.message || 'Invalid credentials');
    //         }

    //     } catch (error) {
    //         console.error('Error during login:', error);
    //         setError('Login failed. Please try again later.');
    //     }

    // }
  


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  // Check for redirect from successful signup
  useEffect(() => {
    if (location.state?.signupSuccess) {
      setEmail(location.state.email);
      setError(''); // Clear any previous errors
      // You could also show a success message
      alert('Signup successful! Please sign in with your new account.');
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });
      
      // Handle successful signin (store token, redirect, etc.)
      console.log('Signin successful', response.data);
      // For example:
      // localStorage.setItem('token', response.data.token);
      // navigate('/dashboard');
      
    } catch (err) {
      setError(err.response?.data?.error || 'Signin failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };


    return (
    // <React.Fragment>
    //     <Header />
    // <div className={classes['signin-container']}>
    //     <h2>Login</h2>
    //     <form onSubmit={handleSubmit}>
    //         <div className={classes['form-group']} >
    //             <input
    //              type='text'
    //              id='username'
    //              required
    //              placeholder='Username'
    //              value={username}
    //              onChange={(e) => setUsername(e.target.value)} />
    //              {error && <div className={classes["error-message"]}>{error}</div>}
    //         </div>
    //         <div className={classes['form-group']}>
    //             <input
    //              type='password'
    //              id='PIN'
    //              required
    //              placeholder='PIN Code'
    //              value={pin} 
    //              onChange={(e) => setPin(e.target.value)}
    //              />
    //              {error && <div className={classes["error-message"]}>{error}</div>}
    //         </div>
    //         <div>
    //             <button type='submit'>Sign In</button>
    //             {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
    //         </div>
    //     </form>
    // </div>
    // </React.Fragment>

        <React.Fragment>
            <Header/>
    <div className={classes['signin-container']}>
      <h2>Sign In</h2>
      {error && <div className={classes['error-message']}>{error}</div>}
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