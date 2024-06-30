import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Check if the user already exists
        const existingUser = localStorage.getItem(email);
        if (existingUser) {
            alert('User already registered. Please sign in.');
            return;
        }

        // Save the new user
        localStorage.setItem(email, JSON.stringify({ email, password }));
        alert('You have successfully registered');
        navigate('/home');
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup} className="signup-form">
                <h2>Signup</h2>
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
                <button type="submit">Signup</button>
                <p>
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
