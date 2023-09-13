import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { useAuth } from './contecsts';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { setLogin, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { login, password } = event.target.elements;
    setLogin({ login: login.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField id="login" label="Login" variant="outlined" />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
