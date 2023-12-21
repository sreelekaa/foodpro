import React, { useState } from "react";
import './styles/SignUp.css';
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validate the form data
    if (!validateUsername(username) || !validatePassword(password)) {
      setError('Please enter a valid username and password.');
      return;
    }

    // Perform login logic (e.g., authenticate user)
    try {
      // Your authentication or API call logic goes here

      // Simulating a successful login for demonstration purposes
      console.log('Login successful');

      // Clear any previous errors
      setError('');

      // Optionally, you might redirect the user or update the UI
    } catch (error) {
      setError('Login failed. Please check your username and password.');
    }
  };

  // Validation functions
  const validateUsername = (username) => {
    // Add any specific validation rules for the username
    return username.trim() !== '';
  };

  const validatePassword = (password) => {
    // Add any specific validation rules for the password
    return password.trim() !== '';
  };

  return (
    <div className="login-container">
      <div className='background-image'></div>
      <h2>Login</h2>
      <form>
        {/* Display error message, if any */}
        {error && <div className="error-message">{error}</div>}

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
      </form>
    </div>
  );
};

export default Login;
