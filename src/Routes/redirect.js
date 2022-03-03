import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { Redirect } from 'react-router-dom';

function RedirectRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Redirect to="/"></Redirect>;
}

export default RedirectRoute;
