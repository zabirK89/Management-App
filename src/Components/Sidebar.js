import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Table from '../Components/Content';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ shadow: 'none', backdroundColor: 'white' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />

        <div className="cont ">
          <div className="wrapper">
     
     hello
          </div>
          </div>

        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          <List style={{ justifyContent: 'center', alingItem: 'center' }}>
            <Link to="/holiday">
              <div style={{ backgroundColor: 'red', height: '45px' }}>
                hello
              </div>
            </Link>
            <div style={{ backgroundColor: 'red', height: '45px' }}>hello</div>
            <div style={{ backgroundColor: 'red', height: '45px' }}>hello</div>
            <div style={{ backgroundColor: 'red', height: '45px' }}>hello</div>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <Table />
        </Typography>
      </Box>
    </Box>
  );
}
