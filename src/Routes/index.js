import { useSelector } from 'react-redux';
import React from 'react';
import {
  Redirect,
  Route,
  Router,
  Switch,
  BrowserRouter,
  Routes,
} from 'react-router-dom';

import Sidebar from '../Components/Sidebar';
import LoginPage from '../Components/LoginPage';

import ProtectedRoute from './ProtectedRoute';
import RedirectRoute from './redirect';
function AppRoutes() {
  const role = useSelector((state) => {
    console.log(state);
    return state.token.role;
  });

  console.log(role);

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
        <Route
          path="/"
          element={
            <RedirectRoute isLoggedIn={role}>
              <LoginPage />
            </RedirectRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
