import React, { createContext, useContext, useState } from 'react';

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

export function useAuth() {
  return useContext(AuthContext);
}
