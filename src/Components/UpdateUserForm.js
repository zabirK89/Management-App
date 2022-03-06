import React from "react"
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
const Schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required Name!'),
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  designation: Yup.string().min(2, 'Too Short!').required('Required designation!'),
  joining_date: Yup.string().required('Required Joining Date!'),
});



export default function UpdateUserForm(onSubmit, initialValues) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={async (values, { setSubmitting }) => {
          await onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Stack sx={{ m: '10px' }}>
              <TextField
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
                disabled={isSubmitting}
              />
            </Stack>

            <Stack sx={{ m: '10px' }}>
              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                disabled={isSubmitting}
              />
            </Stack>

            <Stack sx={{ m: '10px' }}>
              <TextField
                label="Designation"
                name="designation"
                type="text"
                placeholder="Designation"
                disabled={isSubmitting}
              />
            </Stack>
            <Stack sx={{ m: '10px' }}>
              <TextField
                label="Joining Date"
                name="joining_date"
                type="text"
                placeholder="Joining Date"
                disabled={isSubmitting}
              />
            </Stack>

            <Box sx={{ float: 'right', mt: '10px' }}>
              <Button fullWidth={false} variant="outlined" disabled={isSubmitting} type="summit">
                Update
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
