import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SignIn.module.css';
import Header from '../Header/Header';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [PIN, setPIN] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault(); 
         setError('')

        // fetching api from backend for login
        try {

            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, PIN }),
            });

            const data = await response.json()
            if (response.ok) {
                console.log('Login successful:')
                console.log(data.token)
                navigate('/dashboard')
            } else {
                console.log(data.message);
                setError(data.message || 'Invalid credentials');
            }

        } catch (error) {
            console.error('Error during login:', error);
            setError('Login failed. Please try again later.');
        }




        // changing password when user signs in first time   
        // const defaultUsername = 'admin';
        // const defaultPIN = '0000';
        // const storedNewPIN = localStorage.getItem('mockUserPassword');

        // const correctPIN = storedNewPIN ? storedNewPIN : defaultPIN;
        
        // if( username === defaultUsername && PIN === correctPIN) {
        //     const hasChangedPassword = localStorage.getItem('hasChangedPassword')
        //     if(hasChangedPassword === 'true') {
        //         navigate('/dashboard')
        //     } else {
        //         navigate('/change-password')
        //     }
        // } else {
        //     setError('Invalid credentials');
        // }

        // // Render the Admin dashboard 
        // if(username === 'haseeb' && PIN === '1234') {
        // navigate('/admin-dashboard');
        // }
    }
  

    return (
    <React.Fragment>
        <Header />
    <div className={classes['signin-container']}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className={classes['form-group']} >
                <input
                 type='text'
                 id='username'
                 required
                 placeholder='Username'
                 value={username}
                 onChange={(e) => setUsername(e.target.value)} />
                 {error && <div className={classes["error-message"]}>{error}</div>}
            </div>
            <div className={classes['form-group']}>
                <input
                 type='password'
                 id='PIN'
                 required
                 placeholder='PIN Code'
                 value={PIN} 
                 onChange={(e) => setPIN(e.target.value)}
                 />
                 {error && <div className={classes["error-message"]}>{error}</div>}
            </div>
            <div>
                <button type='submit'>Sign In</button>
            </div>
        </form>
    </div>
    </React.Fragment>
    );
}

export default SignIn;