import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './account/login';
import { Home } from './Home';
import { UserPage } from './pages/UserPage';
import './style.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/user', element: <UserPage /> },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
