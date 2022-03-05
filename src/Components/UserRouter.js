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

// import { Redirect, Route, BrowserRouter, Routes } from 'react-router-dom';

export default function Router() {
  const { path } = useRouteMatch();
  console.log('path====>', path);
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Stack>
        <Stack direction="row" sx={{ mt: '67px' }}>
          <Box
            sx={{
              width: '100%',
              margin: '30px',
            }}
          >
       
                <Switch location={background || location}>
                <Route path={`${path}/:id`} component={UserDetail} />
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
                {/* <Switch>
                  <Route path={`${path}/:id`} component={UserDetail} />
                </Switch> */}
              </Box>
            </Drawer>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
