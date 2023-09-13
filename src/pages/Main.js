import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Main = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login functionality here
  };

  const handleLogout = () => {
    // Implement logout functionality here
  };

  return (
    <div>
      <Button onClick={() => navigate('/')}>Home</Button>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Main;
