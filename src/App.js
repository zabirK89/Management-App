import  { useContext, useState } from 'react';
import React from "react";

import './style.css';
import LoginPage from './Components/LoginPage';
import Sidebar from './Components/Sidebar';
import Tickets from "./Components/Tickets"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Holiday from './Components/Holiday';
import Assets from "./Components/Assets";
import Authcontext, { AuthProvider } from './Context/AuthContex';
export default function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>

        <Route path="/" element={<LoginPage  ></LoginPage>} />


        {/* <Route path="/admin" element={<ProtectRoute user={user} ><Sidebar /></ProtectRoute>}/>   */}

        <Route path="/admin" element={<Sidebar />} />

        {/* <Route path="/admin" element={<ProtectRoute><Sidebar /></ProtectRoute>}/> */}
        {/* <Route path="/tickets" element={ <ProtectRoute user={user} ><Tickets /></ProtectRoute>} />
      <Route path="/tickets" element={  <Tickets />} />
      <Route path="/assets" element={<ProtectRoute user={user} ><Assets /></ProtectRoute>} />
      <Route path="/assets" element={<Assets />} /> */}

      </Routes>
    </AuthProvider>
  </BrowserRouter>
  );
}
