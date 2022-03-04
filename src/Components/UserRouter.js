import React from 'react';
import UserDetail from './UserDetail';
import { Box, Drawer, Stack } from '@mui/material';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from 'react-router';

export default function Router() {
  const { path } = useRouteMatch();
  console.log('path====>', path);
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Stack>
        {/* <WAAppBar /> */}
        <Stack direction="row" sx={{ mt: '67px' }}>
          {/* <SideBar /> */}
          <Box
            sx={{
              width: '100%',
              margin: '30px',
            }}
          >
            <Switch location={background || location}>
              {/* <Route path={`${path}/add`} component={CreateUser} />
          <Route path={`${path}/update/:id`} component={UpdateUser} /> */}
              <Route path={`${path}/:id`} component={UserDetail} />
              {/* <Route path={`${path}//manager:id`} component={UpdateManager} />
          <Route exact path={path} component={UsersList} /> */}
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
                  {/* <Route path={`${path}/add`} component={CreateUser} />
              <Route path={`${path}/update/:id`} component={UpdateUser} />
              <Route path={`${path}/manager/:id`} component={UpdateManager} /> */}
                  <Route path={`${path}/:id`} component={UserDetail} />
                </Switch>
              </Box>
            </Drawer>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
