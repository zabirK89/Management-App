import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import "../style.css";
export default function header(){
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{  boxShadow: "10px 8px 10px  10px #aaaaaa", backgroundColor: 'white', height: '400px' ,marginTop:"36%" ,width:"600px",height:"500px",marginTop:"130px",borderRadius:"10px"}} >
      <div classname="logincont" style={{padding:"30px"}}>
        <h2>Admin Login</h2>
        <br/>
        <TextField
          id="outlined-full-width"
          label="Email Address
          "
          style={{ margin: 8 ,width:"550px"}}
          placeholder="Email Address
          "
        
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>
           <TextField
          id="outlined-full-width"
          label="Password "
          style={{ margin: 8 ,width:"550px"}}
          placeholder="Password"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br/>
        <br/>
        <Link to="/admin" style={{ textDecoration: 'none' }}>
   <Button variant="contained" color="primary" style={{width:"550px"}}>
  Login
</Button>
</Link>
<br/>
      </div>
      <div style={{marginLeft:"60px"}}>This login is only for ADMIN!</div>
      <br/>
      <Divider/>
      <div style={{marginLeft:"40px"}}>Create a new password</div>
      <div style={{marginLeft:"40px"}}>Forgot password</div>
      </Typography>
    </Container>
  </React.Fragment>
  )
}