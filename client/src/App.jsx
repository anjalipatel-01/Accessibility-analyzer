import React from 'react';
import Homepage from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login.jsx';
 import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';


export default function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Homepage />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    // </Routes>
    <Dashboard/>
  );
}
