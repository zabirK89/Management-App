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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function Holidaycontent() {
  return (
    <>
    <div>
      <h1 style={{marginLeft:"40px"}}>Holidays</h1>
      <div className="content-btn">
      <Stack direction="row" spacing={2} >
      <FormControl sx={{ m: 1, minWidth: 80 }} >
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          
        
          autoWidth
          label="Age"
          style={{height:"35px",width:"45px",marginLeft:"40px"}}
        >

          <MenuItem value={10}>2020</MenuItem>
          <MenuItem value={21}>2021</MenuItem>
          <MenuItem value={22}>2022</MenuItem>
         
        </Select>
      </FormControl>
     
     
    </Stack>
    </div>


    </div>
    <br/>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Date of Week</TableCell>
            <TableCell align="right">Action</TableCell>
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
    </>
  );
}