import { Box, Drawer, Stack } from '@mui/material';
import { Location } from 'history';
import { Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router';
import userDetail from "./userDetail"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Router(){

  const { path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

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
           <Route path={`${path}/:id`} component={userDetail} />
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

)
}