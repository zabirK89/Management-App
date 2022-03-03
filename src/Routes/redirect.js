
// import { connect } from 'react-redux';
// import { Redirect, Route } from 'react-router';


// function RedirectRoute({  Component, path = '', ...rest }) {
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

// export default connect(({ token }) => ({ isLoggedIn: !!token.token }), {})(RedirectRoute);
