import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const setLogin = ({ login, password }) => {
    setUser({ login, password });
  };

  const setLogout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setLogin, setLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  return useContext(AuthContext);
}
