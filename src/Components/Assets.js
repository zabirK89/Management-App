import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import InputIcon from '@mui/icons-material/Input';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DevicesIcon from '@mui/icons-material/Devices';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AssetsContent from "./AssetsContent"
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
            <div className="header-item">
          <Avatar style={{marginRight:"25px"}} /> 
          <InputIcon />
          </div>
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
            <Avatar src="/broken-image.jpg"  style={{marginRight:"13px" ,backgroundColor:"black"}} />
            Webile Admin
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
         <List className="options">
          <Link to="/admin"  style={{ textDecoration: 'none',color:"black" }}>
              <div style={{display: "flex",height:"40px"}}>
              <PeopleAltIcon style={{marginLeft:"7px",marginRight:"10px"}}/>   Users
              </div>
              </Link>
              <Link to="/holiday" style={{ textDecoration: 'none',color:"black" }}>
            <div style={{display: "flex",height:"40px"}} ><BeachAccessIcon style={{marginLeft:"7px",marginRight:"10px"}}/> Holidays</div>
            </Link>
            <Link to="/assets" style={{ textDecoration: 'none',color:"black" }}>
            <div style={{display: "flex",height:"40px"}} > <DevicesIcon style={{marginLeft:"7px",marginRight:"10px"}}/>Assets</div>
      </Link>
            <Link to="/tickets" style={{ textDecoration: 'none',color:"black" }}>
            <div style={{display: "flex",height:"40px"}}><ConfirmationNumberIcon style={{marginLeft:"7px",marginRight:"10px"}}/>Tickets</div>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
     <AssetsContent/>
        </Typography>
      </Box>
    </Box>
  );
}
