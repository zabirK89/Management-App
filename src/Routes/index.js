import { useSelector } from 'react-redux';
import React from 'react';
import { Redirect, Route, BrowserRouter, Routes,Outlet } from 'react-router-dom';
// import {useNavigate } from "react-router-dom"
import Sidebar from '../Components/Sidebar';
import LoginPage from '../Components/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import UserDetail from '../Components/UserDetail';
import UpdateUser from '../Components/UpdateUser';
import UpdateManager from "../Components/UpdateManager"
import UserRouter from "../Components/UserRouter"

function AppRoutes() {
  const role = useSelector((state) => {
    return state.token.role;
  });

  // const history = useNavigate();
  // const { path } = Outlet();
  // const location = useLocation();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute isLoggedIn={role}>
              <Sidebar />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/admin/users/:id" element={<UserDetail />} />
        <Route path="/admin/users/update/:id" element={<UpdateUser />} />
        <Route path="/admin/users/manager/:id" element={<UpdateManager/>} />
        <Route path="/admin/user" element={<UserRouter/>}/>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
