import { Box, Drawer } from '@mui/material';
import { Location } from 'history';
import { Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router';
import UserDetail from './Detail';
import UsersList from './List';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import UpdateManager from './UpdateManager';
import { GET_USERS_SUCCESS } from '../../redux-store/types/users';

export default function Router() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  useEffect(() => {
    return () => {
      dispatch({ type: GET_USERS_SUCCESS, users: [] });
    };
  }, []);

  return (
    <>
      <Switch location={background || location}>
        <Route path={`${path}/add`} component={CreateUser} />
        <Route path={`${path}/update/:id`} component={UpdateUser} />
        <Route path={`${path}/:id`} component={UserDetail} />
        <Route path={`${path}//manager:id`} component={UpdateManager} />
        <Route exact path={path} component={UsersList} />
      </Switch>
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
          <Switch>
            <Route path={`${path}/add`} component={CreateUser} />
            <Route path={`${path}/update/:id`} component={UpdateUser} />
            <Route path={`${path}/manager/:id`} component={UpdateManager} />
            <Route path={`${path}/:id`} component={UserDetail} />
          </Switch>
        </Box>
      </Drawer>
    </>
  );
}
