// import React from "react"
// import { connect } from 'react-redux';
// import {Redirect,Route} from "react-route"


// function RedirectRoute({ Component, path = '', ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         rest.isLoggedIn ? (
//           <Redirect to="/" from={props.location.pathname} />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// }



// export default connect(
//   ({ authReducer }) => ({ isLoggedIn: !!authReducer.token }),
//   {},
// )(ProtectedRoute);
