import * as React from 'react';
import Table from '@mui/material/Table';
import { Typography, IconButton } from '@mui/material';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import TableBody from '@mui/material/TableBody';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import { useMatch } from 'react-router-dom';
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
import Pagination from '@mui/material/Pagination';
import { useEffect } from 'react';
import { getusers } from '../Redux/Action/useraction';

export default function UserDetail() {

  // const handlePageNumber = (_event, page) => {
  //   dispatch({
  //     type: SET_PAGE_NUMBER,
  //     searchOptions: { ...searchOptions, page },
  //   });
  // };


  const dispatch = useDispatch();
  // const { url } = useMatch();
  const users = useSelector((state) => state.users);
  console.log('users new =====>', users.users);
  useEffect(() => {
    async function Users() {
      try {
        await dispatch(getusers());
      } catch (error) {
        console.log(error);
      }
    }
    Users();
  }, []);
  return (
    <>
      <div>
        <h1 style={{ marginLeft: '40px' }}>Users</h1>
        <div className="content-btn">
          <Stack direction="row" spacing={2}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Age"
                style={{ height: '35px', width: '45px', marginLeft: '40px' }}
              >
                <MenuItem value={10}>All Users</MenuItem>
                <MenuItem value={21}>Recently Created Users</MenuItem>
                <MenuItem value={22}>Recently Updated Users</MenuItem>
                <MenuItem value={10}>Active Users</MenuItem>
                <MenuItem value={10}>Custom Filters</MenuItem>
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
            <Button
              component={Link}
              variant="outlined"
              to={{
                pathname: `/admin/users/add`,
                state: { background: location },
              }}
              style={{ marginLeft: '720px' }}
            >
              Add User
            </Button>
          </Stack>
        </div>
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
              <TableCell align="right">Satus </TableCell>
              <TableCell align="right">Action </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.users.map((user) => (
              <TableRow
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.designation}</TableCell>
                <TableCell align="right">{user.joining_date}</TableCell>
                <TableCell>
                  {!user.manager ? (
                    <>
                      <Typography
                        component="span"
                        sx={{ color: 'text.secondary' }}
                      >
                        Assign Manager
                      </Typography>
                      <IconButton
                        size="small"
                        to={{
                          pathname: `/admin/users/manager/${user.id}`,
                          state: { background: location },
                        }}
                        component={Link}
                      >
                        <PersonAddAlt1OutlinedIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <Typography
                        component="span"
                        sx={{ color: 'text.secondary' }}
                      >
                        {user.manager.name}
                      </Typography>
                      <IconButton
                        size="small"
                        to={{
                          pathname: `/admin/users/manager/${user.id}`,
                          state: { background: location },
                        }}
                        component={Link}
                      >
                        <PersonRemoveIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>

                <TableCell>{user.active}</TableCell>
                <TableCell align="right">
                  {' '}
                  <Button
                    to={{
                      pathname: `/admin/users/${user.id}`,
                      state: { background: location },
                    }}
                    component={Link}
                  >
                    View
                  </Button>
                  <br />
                  <Button
                    to={{
                      pathname: `/admin/users/update/${user.id}`,
                      state: { background: location },
                    }}
                    component={Link}
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Grid container justifyContent="center">
        <Pagination
          sx={{ my: 2 }}
          count={Math.round(users.totalMatches / users.limit)}
          color="primary"
          onChange={handlePageNumber}
          defaultValue={1}
        />
      </Grid> */}

    </>
  );
}
