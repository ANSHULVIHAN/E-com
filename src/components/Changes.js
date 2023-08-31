// ChangePassword.js
import React, { useState } from 'react';
import axios from 'axios';
import './change.css';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/change-password', { newPassword });
      if (response.data.success) {
        // Password changed successfully, handle navigation or display success message
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default ChangePassword;
