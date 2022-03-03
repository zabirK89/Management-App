// import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect, Route } from 'react-router';

// function ProtectedRoute({ component: Component, isLoggedIn, ...rest }) {
//   console.log('isLoggedIn = ', isLoggedIn);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isLoggedIn ? (
//           <Component {...rest} />
//         ) : (
//           <Redirect to={{ pathname: '/', state: { from: location } }} />
//         )
//       }
//     />
//   );
// }
// export default connect(
//   ({ token }) => ({ isLoggedIn: !!token.token }),
//   {}
// )(ProtectedRoute);
