import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './account/login';
import { Home } from './Home';
import './style.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
