import React from 'react';
import { Button, TextField } from '@mui/material';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { login, password } = event.target.elements;
    console.log({ login, password });
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
