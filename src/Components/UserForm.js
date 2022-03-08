import React from 'react';
import { Formik, Form } from 'formik';
// import { ButtonPrimary } from '../forms/Button';
// import TextField from '../forms/TextField';
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

export default function UserForm(props) {
  return (
    <Formik
      initialValues={props.initialValues}
      validateOnMount={false}
      validationSchema={Schema}
      onSubmit={async (values, { setSubmitting }) => {
        await props.onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Divider sx={{ mt: 1 }}>Primary Details</Divider>
          <TextField
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Email"
            name="email"
            margin="dense"
            type="email"
            placeholder="Email"
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Designation"
            name="designation"
            type="text"
            placeholder="Designation"
            disabled={isSubmitting}
          />
          <Divider sx={{ mt: 2 }}>Employment Details</Divider>
          <TextField label="Joining Date" name="joining_date" />
          <FormSelect
            label="Employment Type"
            name="additionalDetails.type"
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
            type="text"
            placeholder="Department"
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Sub Department"
            name="additionalDetails.subDepartment"
            type="text"
            placeholder="Sub Department"
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Employee Id"
            name="additionalDetails.empId"
            type="text"
            placeholder="Employee Id"
            disabled={isSubmitting}
          />

          <Divider sx={{ mt: 2 }}>Contact Details</Divider>
          <TextField
            label="Phone Number"
            name="additionalDetails.phoneNumber"
            type="text"
            placeholder="Phone Number"
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Blood Group"
            name="additionalDetails.bloodGroup"
            type="text"
            placeholder="Blood Group"
            disabled={isSubmitting}
          />
          <br />
          <TextField
            label="Address"
            name="additionalDetails.adress"
            type="text"
            placeholder="Address"
            disabled={isSubmitting}
          />
          <Divider sx={{ mt: 2 }}>Finance Details</Divider>
          <TextField
            label="Pan No"
            name="additionalDetails.pan"
            type="text"
            placeholder="Pan No"
            disabled={isSubmitting}
          />
          <Divider sx={{ mt: 2 }} />
          <Box sx={{ my: 1 }} display="flex" justifyContent="flex-end">
            <Button
              fullWidth={false}
              type="submit"
              variant="outlined"
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
