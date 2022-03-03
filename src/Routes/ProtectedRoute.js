import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { Redirect } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn }) {
  console.log('isLoggedIn = ', isLoggedIn);
  return isLoggedIn === 'super_admin' ? children : <Redirect to="/" />;
}
export default ProtectedRoute;
