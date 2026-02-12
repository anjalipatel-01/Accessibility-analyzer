import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Input from "./pages/Input.jsx";
import Services from "./pages/Services.jsx";
import Solution from "./pages/Solution.jsx";
import Compliance from "./pages/Compliance.jsx";
import Company from "./pages/Company.jsx";
import Report from "./pages/Report.jsx";
import Contact from "./pages/Contact.jsx";
import ChatWidget from "./components/ChatWidget.jsx";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/input',
    element: <Input />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/solution',
    element: <Solution />
  },
  {
    path: '/compliance',
    element: <Compliance />
  }, {
    path: '/company',
    element: <Company />
  }, {
    path: '/report',
    element: <Report />
  }, {
    path: '/contact',
    element: <Contact />
  }
])
export default function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      <ChatWidget />
    </>
  );
}
