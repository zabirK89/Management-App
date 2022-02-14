import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
export default function header(){
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '400px' ,marginTop:"36%" ,width:"600px",height:"500px",marginTop:"130px"}} />
    </Container>
  </React.Fragment>
  )
}