import React from "react";
import "./style.css";
import Header from"./Components/Header"
import LoginPage from "./Components/LoginPage"
import Sidebar from "./Components/Sidebar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Holiday from "./Components/Holiday"
export default function App() {
  return (
    <BrowserRouter>

      

<Routes>
<Route path="/login" element={ <LoginPage/>} />
<Route path="/admin" element={ <Sidebar/>} />
<Route path="/holiday" element={ <Holiday/>} />
    </Routes>
    </BrowserRouter>
  );
}
