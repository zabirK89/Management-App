import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { Navigate } from 'react-router-dom';

function RedirectRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/"></Navigate>;
}

export default RedirectRoute;
