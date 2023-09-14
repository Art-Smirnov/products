import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { useAuth } from '../../contecsts';
import { useNavigate } from 'react-router-dom';
import './LoginForm.less';

const LoginForm = () => {
  const { setLogin, user } = useAuth();
  const navigate = useNavigate();
  console.log(user);
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
    <form className="login-form" onSubmit={handleSubmit}>
      <TextField id="login" label="Login" variant="outlined" />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button variant="outlined" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
