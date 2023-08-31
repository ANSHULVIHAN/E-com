// ForgotPassword.js

import React, { useState } from 'react';
import axios from 'axios';
import './forget.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOTP] = useState('');

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      if (response.data.success) {
        setIsOtpSent(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/verify-otp', { otp });
      if (response.data.success) {
        // OTP verified successfully, navigate to ChangePassword component
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        className="email-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {isOtpSent ? (
        <div className="otp-section">
          <p>An OTP has been sent to your email. Check your inbox and enter the OTP below.</p>
          <input
            type="text"
            className="otp-input"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button className="verify-otp-button" onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      ) : (
        <button className="send-otp-button" onClick={handleSendOTP}>Send OTP</button>
      )}
    </div>
  );
};

export default ForgotPassword;
