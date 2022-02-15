import React from 'react';
import './style.css';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import Sidebar from './Components/Sidebar';
import Tickets from "./Components/Tickets"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Holiday from './Components/Holiday';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/admin" element={<Sidebar />}></Route>
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}
