import React from 'react';
import { useState } from 'react';
// import { useNavigate} from 'react-router-dom';
import classes from './SignIn.module.css';
import Header from '../Header/Header';
import { useAuth } from '../Context/AuthContext';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth()
  // const navigate = useNavigate()


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