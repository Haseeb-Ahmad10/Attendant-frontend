import React from 'react';
import { useState } from 'react';
import classes from './SignIn.module.css';

const SignIn = function () {
    const [username, setUsername] = useState('');
    const [PIN, setPIN] = useState('');
    const [error, setError] = useState('');
    const [LoggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setError('')

        if( username === "admin" && PIN === '0000') {
            setLoggedIn(true);
       } else {
        setError('Invalid username or PIN');
       }
    }

    const handleLogOut = () => {
        setLoggedIn(false);
        setUsername('');
        setPIN('');
        setError('');
    }

    if (LoggedIn) {
        return <div>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    }

    return <div className={classes['signin-container']}>
        <h2>SignIn</h2>
        <form>
            <div>
                <label htmlFor='username'>Username:</label>
                <input
                 type='text'
                 id='username'
                 required
                 value={username}
                 onChange={(e) => {e.target.value}} />
                 {error && <div>{error}</div>}
            </div>
            <div>
                <label htmlFor='PIN'>PIN Code:</label>
                <input
                 type='password'
                 id='PIN'
                 required
                 value={PIN} 
                 onChange={(e) => {e.target.value}}
                 />
                 {error && <div>{error}</div>}
            </div>
            <div>
                <button type='submit'>Sign In</button>
            </div>
        </form>
    </div>
}

export default SignIn;