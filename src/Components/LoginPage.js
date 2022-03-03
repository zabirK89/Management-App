import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Paper, Box, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import * as yup from 'yup';
import { userLogin } from '../Redux/Action/Loginaction';

const validationSchema = yup.object().shape({
  userId: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

export default function header() {
 
  const navigate = useNavigate();
  const initialValues = { userId: '', password: '' };
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    try {
      const { userId, password } = values;
      const reqBody = { email: userId, password };
      dispatch(userLogin(reqBody, navigate));

      // setSubmitting(false);
      console.log(reqBody);
    } catch (error) {
      // setSubmitting(false);
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            boxShadow: '10px 8px 10px  10px #aaaaaa',
            backgroundColor: 'white',
            height: '400px',
            marginTop: '36%',
            width: '600px',
            height: '500px',
            marginTop: '130px',
            borderRadius: '10px',
          }}
        >
          <div classname="logincont" style={{ padding: '30px' }}>
            <Formik
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              {({ handleSubmit, handleChange, values }) => (
                <Box component="form" onSubmit={handleSubmit}>
                  <h2>Admin Login </h2>
                  <br />

                  <TextField
                    id="outlined-full-width"
                    label="Email Address "
                    style={{ margin: 8, width: '550px' }}
                    placeholder="Email Address"
                    fullWidth
                    margin="normal"
                    name="userId"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={values.userId}
                    onChange={handleChange}
                    variant="outlined"
                    type="email"
                  />
                  <br />
                  <TextField
                    id="outlined-full-width"
                    label="Password "
                    name="password"
                    style={{ margin: 8, width: '550px' }}
                    placeholder="Password"
                    margin="normal"
                    value={values.password}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    type="password"
                  />

                  <br />
                  <br />
                  {/* <Link to="admin" style={{ textDecoration: 'none' }}> */}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: '550px' }}
                    type="submit"
                    label="Login"
                  >
                    Login In
                  </Button>
                  {/* </Link> */}
                  <br />
                </Box>
              )}
            </Formik>
          </div>
          <div style={{ marginLeft: '60px' }}>
            This login is only for ADMIN!
          </div>
          <br />
          <Divider />
          <div style={{ marginLeft: '40px' }}>Create a new password</div>
          <div style={{ marginLeft: '40px' }}>Forgot password</div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
