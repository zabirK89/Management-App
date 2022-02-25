import React, { useContext, useState } from 'react';
import './style.css';

import LoginPage from './Components/LoginPage';
import Sidebar from './Components/Sidebar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


export default function App() {


  return (
    <BrowserRouter>

        <Routes>

          <Route path="/" element={<LoginPage  ></LoginPage>} />


          {/* <Route path="/admin" element={<ProtectRoute user={user} ><Sidebar /></ProtectRoute>}/>   */}

          <Route path="/admin" element={<Sidebar />} />

     

        </Routes>
   
    </BrowserRouter>
  );
}

// const ProtectRoute = ({ user, children }) => {

//   return user == null ? <Navigate to="/"></Navigate> : children;
// }