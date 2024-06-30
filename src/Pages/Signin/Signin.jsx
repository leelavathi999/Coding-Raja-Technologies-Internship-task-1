import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signin.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();

        // Check if the user exists
        const existingUser = localStorage.getItem(email);
        if (!existingUser) {
            alert('Please first create your account.');
            return;
        }

        const user = JSON.parse(existingUser);

        // Verify password
        if (user.password !== password) {
            alert('Incorrect password.');
            return;
        }

        alert('You have successfully signed in');
        navigate('/home');
    };

    return (
        <div className="signin-container">
            <form onSubmit={handleSignin} className="signin-form">
                <h2>Signin</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Signin</button>
                <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Signin;
