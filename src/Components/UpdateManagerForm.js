import React from "react"
import { Box, Divider } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import FormUsersPicker from './FormComponents/FormUsersPicker';

const Schema = Yup.object().shape({
  manager: Yup.object()
    .nullable()
    .shape({
      id: Yup.string().required('ID is required'),
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required'),
    }),
});



export default function UpdateManagerForm(onSubmit,initialValues) {
  return (
    <>
      <Formik
        initialValues={initialValues}
      
        validationSchema={Schema}
        onSubmit={ (values, { setSubmitting }) => {
          //  onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Divider>Current Manager</Divider>
            <FormUsersPicker label="Assign Manager" disabled={isSubmitting} name="manager" />
            <Box sx={{ float: 'right', mt: '10px' }}>
              <Button label="Submit"      color="primary"
                    type="submit"/>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
