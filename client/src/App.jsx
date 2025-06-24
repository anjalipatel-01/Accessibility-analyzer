import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.jsx';
 import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  }
  ])
export default function App() {
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>  
  );
}
