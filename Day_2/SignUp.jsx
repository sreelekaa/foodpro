import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './styles/SignUp.css';


const SignUp = () => {
 
  const [newUsername, setNewUsername] = useState('');
  const [newname, setname] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');
  
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!validateUsername(newUsername) || !validateName(newname) || !validateEmail(email) || !validatePassword(newPassword) || !agreeToTerms) {
      setError('Please fill in all fields correctly and agree to the terms.');
      return;
    }

    // Perform user registration logic (e.g., add to the database)
    try {
      // Your database or API call logic goes here

      // Simulating a successful registration for demonstration purposes
      // Replace this with your actual logic to add the user to the database
      console.log('User registered successfully');

      // Clear any previous errors
      setError('');

      // Reload the page to simulate a full page refresh
      
      window.location.reload();
    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  // Validation functions
  const validateUsername = (username) => {
    // Minimum 10 characters
    return username.length >= 10;
  };

  const validateName = (name) => {
    // Alphabetic characters only
    return /^[A-Za-z]+$/.test(name);
  };

  const validateEmail = (email) => {
    // Email format check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    // Minimum 10 characters, at least one digit, and at least one special character
    return /^(?=.*\d)(?=.*[!@#$%^&*])(.{10,})$/.test(password);
  };

  // Return your JSX here
  return (
    <div className="signup-container">
      {/* Background Image Container */}
      <div className='background-image'></div>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        {/* Display error message, if any */}
        {error && <div className="error-message">{error}</div>}

        <label htmlFor="newname">Name:</label>
        <input
          type="text"
          id="newname"
          value={newname}
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="newUsername">Create Username:</label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <label htmlFor="newPassword">Create Password :</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="terms-checkbox">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <label htmlFor="agreeTerms">Agree to Terms and Conditions</label>
        </div>
        <Link to="/home">
        <button type="submit">
        Signup</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
