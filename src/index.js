import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import ProductCard from './pages/ProductCard';
import { AuthProvider } from './contecsts';

import './index.less';

const router = createHashRouter([
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
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
