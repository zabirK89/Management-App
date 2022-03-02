// import LoginPage from '../Components/LoginPage';
// import Sidebar from '../Components/Sidebar';
// import ProtectedRoute from './ProtectedRoute';
// import { Redirect, Route, Router, Switch } from 'react-router-dom';
// function approuter() {
//   return (
//     <Router history={history}>
//     <Switch>
//       <Route
//         exact
//         path="/"
//         render={(props) =>
//           role && role != 'super_admin' ? (
//             <Redirect {...props} to="/pendingLeaves" from={props.location.pathname} />
//           ) : (
//             <Redirect {...props} to="/admin" from={props.location.pathname} />
//           )
//         }
//       ></Route>
//       <ProtectedRoute path="/admin" component={Sidebar} />
   
//       <RedirectRoute path="/" component={LoginPage} />
//     </Switch>
//   </Router>

//   );
// }
