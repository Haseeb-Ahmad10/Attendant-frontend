import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SignIn.module.css';
import Header from '../Header/Header';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault(); 
         setError('')

        // fetching api from backend for login
        try {

            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, pin }),
            });

            const data = await response.json()
            if (response.ok && data.redirectTo) {
                console.log('Login successful:')
                navigate(data.redirectTo)
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
                 value={pin} 
                 onChange={(e) => setPin(e.target.value)}
                 />
                 {error && <div className={classes["error-message"]}>{error}</div>}
            </div>
            <div>
                <button type='submit'>Sign In</button>
                {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
            </div>
        </form>
    </div>
    </React.Fragment>
    );
}

export default SignIn;