import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function header(){
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '400px' ,marginTop:"36%" ,width:"600px",height:"500px",marginTop:"130px"}} >
      <div classname="logincont">
        <h2>Admin Login</h2>
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
   <Button variant="contained" color="primary" style={{width:"550px"}}>
  Login
</Button>



      </div>
      </Typography>
    </Container>
  </React.Fragment>
  )
}