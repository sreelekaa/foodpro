

import React, { useState } from 'react';
 
import './App.css'; 

const SignUp = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    
    console.log('Sign Up clicked');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="newUsername">Create Username:</label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <label htmlFor="newPassword">Create Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
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
        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    
    </div>
  );
};

export default SignUp;
