import React from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../Redux/Action/useraction';
// import { TitleBar } from '../assets/components';
import UserForm from './UserForm';

const initialValues = {
  name: '',
  email: '',
  designation: '',
  joining_date: new Date(),
  additionalDetails: {
    type: 'FullTime',
    department: '',
    subDepartment: '',
    empId: '',
    phoneNumber: '',
    pan: '',
    bloodGroup: '',
    address: '',
  },
};

export default function CreateUser() {
  const [showProgress, setShowProgress] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <h4>Create New Employee</h4>
      {showProgress && <LinearProgress />}
      <Box
        sx={{
          px: 2,
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 'auto',
          overflowY: 'auto',
        }}
      >
        <UserForm
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              setShowProgress(true);
              await dispatch(createUser(values));
              enqueueSnackbar('Employee created successfully', {
                variant: 'success',
              });
              setTimeout(history('/admin/users'), 1);
            } catch (error) {
              enqueueSnackbar(error.message, { variant: 'error' });
            } finally {
              setShowProgress(false);
            }
          }}
        />
      </Box>
    </>
  );
}
