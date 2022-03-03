


// import {  useSelector } from 'react-redux';
// import React from "react"
// import { Redirect, Route, Router, Switch } from 'react-router-dom';

// import Sidebar from "../Components/Sidebar"
// import LoginPage from '../Components/LoginPage';
// import { history } from '../Redux/Store';
// import ProtectedRoute from './ProtectedRoute';
// import RedirectRoute from './redirect';
// function AppRoutes(){
 
//   const { token } = useSelector((state) => state.token);
//   const role = token;
//   console.log(role);

//   return (
//     <Router history={history}>
//       <Switch>
//       <Route
//           exact
//           path="/"
//           render={(props) =>
//             role && role != 'super_admin' ? (
//               <Redirect {...props} to="/" from={props.location.pathname} />
//             ) : (
//               <Redirect {...props} to="/admin" from={props.location.pathname} />
//             )
//           }
//         ></Route>
//         {/* <ProtectedRoute path="/" component={LoginPage} /> */}

//         <ProtectedRoute path="/admin" component={Sidebar} />
//         <RedirectRoute path="/" component={ LoginPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default AppRoutes;
