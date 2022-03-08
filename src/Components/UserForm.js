import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import { Box } from '@mui/system';
import FormSelect from './FormSelect';
import { Divider } from '@mui/material';

const Schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required Name!'),
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  designation: Yup.string()
    .min(2, 'Too Short!')
    .required('Required designation!'),
  joining_date: Yup.string().required('Required Joining date!'),
  additionalDetails: Yup.object().shape({
    type: Yup.string().min(2, 'Too short'),
    department: Yup.string().min(2, 'Too short'),
    subDepartment: Yup.string().min(2, 'Too short'),
    empId: Yup.string().min(2, 'Too short'),
    phoneNumber: Yup.string().min(7, 'Too short').max(13, 'Too long'),
    pan: Yup.string().min(2, 'Too short'),
    bloodGroup: Yup.string().min(2, 'Too short').max(2, 'Too long'),
    address: Yup.string().min(7, 'Too short'),
  }),
});

export default function UserForm({ onSubmit, initialValues }) {
  return (
    <Formik
      initialValues={initialValues}
      validateOnMount={false}
      validationSchema={Schema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log('ales==========>', values);
        console.log('clicked froem useer create');
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Divider sx={{ mt: 1 }}>Primary Details</Divider>
          <TextField
            label="Name"
            name="name"
            values={values.name}
            variant="outlined"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Email"
            name="email"
            values={values.email}
            variant="outlined"
            margin="dense"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Designation"
            name="designation"
            values={values.designation}
            variant="outlined"
            type="text"
            placeholder="Designation"
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <Divider sx={{ mt: 2 }}>Employment Details</Divider>
          <TextField
            label="Joining Date"
            name="joining_date"
            values={values.joining_date}
            variant="outlined"
            onChange={handleChange}
          />
          <br />

          <FormSelect
            label="Employment Type"
            name="additionalDetails.type"
            values={values.additionalDetails.type}
            options={[
              { value: 'FullTime', label: 'Full Time' },
              { value: 'Intern', label: 'Intern' },
              { value: 'Contractor', label: 'Contractor' },
              { value: 'PartTime', label: 'Part Time' },
            ]}
          ></FormSelect>
          <br />
          <TextField
            label="Department"
            name="additionalDetails.department"
            variant="outlined"
            type="text"
            values={values.additionalDetails.department}
            placeholder="Department"
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Sub Department"
            variant="outlined"
            name="additionalDetails.subDepartment"
            type="text"
            placeholder="Sub Department"
            values={values.additionalDetails.subDepartment}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Employee Id"
            variant="outlined"
            name="additionalDetails.empId"
            type="text"
            placeholder="Employee Id"
            values={values.additionalDetails.empId}
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <br />
          <Divider sx={{ mt: 2 }}>Contact Details</Divider>
          <TextField
            label="Phone Number"
            variant="outlined"
            name="additionalDetails.phoneNumber"
            type="text"
            values={values.additionalDetails.phoneNumber}
            placeholder="Phone Number"
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Blood Group"
            variant="outlined"
            name="additionalDetails.bloodGroup"
            type="text"
            placeholder="Blood Group"
            values={values.additionalDetails.bloodGroup}
            onChange={handleChange}
            disabled={isSubmitting}
          />

          <br />
          <TextField
            label="Address"
            variant="outlined"
            name="additionalDetails.adress"
            type="text"
            values={values.additionalDetails.adress}
            placeholder="Address"
            disabled={isSubmitting}
          />

          <Divider sx={{ mt: 2 }}>Finance Details</Divider>
          <TextField
            label="Pan No"
            variant="outlined"
            name="additionalDetails.pan"
            type="text"
            values={values.additionalDetails.pan}
            placeholder="Pan No"
            onChange={handleChange}
            disabled={isSubmitting}
          />
          <br />
          <Divider sx={{ mt: 2 }} />
          <Box sx={{ my: 1 }} display="flex" justifyContent="flex-end">
            <Button
              fullWidth={false}
              type="submit"
              variant="outlined"
              color="primary"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
