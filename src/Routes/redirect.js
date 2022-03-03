import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

function RedirectRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Redirect to="/"></Redirect>;
}

export default RedirectRoute;
