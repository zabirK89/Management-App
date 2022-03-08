import { Box, Drawer } from '@mui/material';
import { Location } from 'history'
import { useLocation, Route,Outlet, Routes,useNavigate } from 'react-router-dom';
import UserDetail from './UserDetail';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UpdateUser from './UpdateUser';
import UpdateManager from './UpdateManager';
// import { GET_USERS_SUCCESS } from '../Redux/Type/usertype';

export default function Router() {
  console.log(path)
  const dispatch = useDispatch();
  const history = useNavigate();
  const { path } = Outlet();
  const location = useLocation();
  const background = location.state && location.state.background;
  useEffect(() => {
    return () => {
      dispatch({ type: GET_USERS_SUCCESS, users: [] });
    };
  }, []);

  return (
    <>
      <Routes location={background || location}>
        <Route path={`${path}/update/:id`} element={UpdateUser} />
        <Route path={`${path}/:id`} element={UserDetail} />
        <Route path="/admin/users/manager/:id" element={UpdateManager} />
        <Route exact path={path} element={UsersList} />
      </Routes>
      <Drawer
        open={!!background}
        anchor="right"
        onClose={() => {
          history.goBack();
        }}
      >
        <Box
          sx={{ width: 420, overflowY: 'auto' }}
          role="presentation"
          flexDirection={'column'}
          display="flex"
        >
          <Routes>
            <Route path={`${path}/add`} element={CreateUser} />
            <Route path={`${path}/update/:id`} element={UpdateUser} />
            <Route path="/admin/users/manager/:id" element={UpdateManager} />
            <Route path={`${path}/:id`} element={UserDetail} />
          </Routes>
        </Box>
      </Drawer>
    </>
  );
}
