import React, { useState } from 'react';
import './signup.css';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Add this line

  const handleRegisterNameChange = (event) => {
    setRegisterName(event.target.value);
  };

  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handleRegisterNumberChange = (event) => {
    setRegisterNumber(event.target.value);
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value); // Add this function
  };

  const handleGoogleSignInSuccess = (response) => {
    console.log('Google sign-in success:', response);
    // Perform any necessary logic with the Google sign-in response
  };

  const handleGoogleSignInFailure = (error) => {
    console.log('Google sign-in error:', error);
  };



  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
  
    if (registerPassword !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
  
    try {
      const response = await axios.post('/api/register', {
        username: registerName,
        email: registerEmail,
        password: registerPassword,
      });
  
      console.log('Registration successful:', response.data);
      // You might want to redirect the user to a different page here
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  

  /*const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log('Registration form submitted with name:', registerName, 'email:', registerEmail, 'number:', registerNumber, 'password:', registerPassword);
    // Perform user registration logic here
  };*/

  return (
    <div className="App">
      <div className="auth-container">
        <div className="register">
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder='Name' value={registerName} onChange={handleRegisterNameChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder='Email' value={registerEmail} onChange={handleRegisterEmailChange} />
            </div>
          
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder='Password' value={registerPassword} onChange={handleRegisterPasswordChange} />
            </div>
         
            <button type="submit">Register</button>
          </form>
          <div className="social-login">
            <GoogleButton
              clientId="YOUR_GOOGLE_CLIENT_ID"
              onSuccess={handleGoogleSignInSuccess}
              onFailure={handleGoogleSignInFailure}
              buttonText="Continue with Google"
            />
          </div>
          <div className="login-link">
            Already a member? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
