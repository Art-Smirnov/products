import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import ProductCard from './pages/ProductCard';
import { Container } from '@mui/material';
import { AuthProvider } from './contecsts';
import './index.css';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />
  },
  { path: '/', element: <Main /> },
  { path: 'products/:productId', element: <ProductCard /> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </AuthProvider>
  </React.StrictMode>
);
