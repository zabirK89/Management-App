import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ReplayIcon from '@mui/icons-material/Replay';
import FilterListIcon from '@mui/icons-material/FilterList';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const drawerWidth = 240;
export default function Holiday() {
  return (
    <>
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

          <div className="cont ">hello buddy</div>

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
            <List style={{display:"flex", justifyContent: 'center', alingItem: 'center' }}>
              <div className="option-cont"> 
              
              <Link to="/holiday">
                <div >
                  hello
                </div>
              </Link>
              <div >
                hello
              </div>
              <div >
                hello
              </div>
              <div >
                hello
              </div>
              </div>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph>
            <div>
              <h2>Holidays</h2>
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Age"
                  >
                    <MenuItem
                      value=""
                      style={{ padding: '5px', height: '44px' }}
                    >
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Name</MenuItem>
                    <MenuItem value={21}>Date</MenuItem>
                    <MenuItem value={22}>Year</MenuItem>
                    <MenuItem value={10}>Day of week Action</MenuItem>
                    <MenuItem value={10}>Action</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                  style={{ padding: '5px', height: '44px' }}
                >
                  More
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ReplayIcon />}
                  style={{ padding: '5px', height: '44px' }}
                >
                  Reload
                </Button>
              </Stack>
            </div>
            <br />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Designation</TableCell>
                    <TableCell align="right">Joining Date</TableCell>
                    <TableCell align="right">Manager</TableCell>
                    <TableCell align="right">Satus Action</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
              </Table>
            </TableContainer>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
