import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import {Navigate} from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  console.log('isLoggedIn = ', isLoggedIn);
  return isLoggedIn === 'super_admin' ? children : <Navigate to="/" />;
}
export default ProtectedRoute;
