import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contecsts';
import './LoginForm.less';

const LoginForm = () => {
  const { setLogin, user } = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ login: false, password: false });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { login, password } = event.target.elements;
    const loginValue = login.value.trim();
    const passwordValue = password.value.trim();

    const newErrors = {
      login: !loginValue,
      password: !passwordValue
    };

    setErrors(newErrors);

    if (!newErrors.login && !newErrors.password) {
      setLogin({ login: loginValue, password: passwordValue });
    }
  };

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <TextField
          id="login"
          label="Login"
          variant="outlined"
          error={errors.login}
          helperText={errors.login && 'Please enter login'}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          error={errors.password}
          helperText={errors.password && 'Please enter password'}
        />
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
