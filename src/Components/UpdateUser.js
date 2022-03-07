import React from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { onGetUsersbyId, onUpdateUsers } from '../Redux/Action/useraction';
import UpdateUserForm from './UpdateUserForm'; 

export default function UpdateUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showProgress, setShowProgress] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [userUpdateValue, setUsersValue] = useState();
  const history = useNavigate();

  useEffect(() => {
    async function getDetailsByid() {
      try {
        setShowProgress(true);
        const userdetails = await dispatch(onGetUsersbyId(id));
        const { name, email, designation, joining_date } = userdetails;

        setUsersValue({
          name,
          email,
          designation,
          joining_date,
        });
      } catch (error) {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      } finally {
        setShowProgress(false);
      }
    }
    getDetailsByid();
  }, [id]);
  return (
    <>
      {/* <TitleBar title="Update User" /> */}
      <h4>Update users</h4>
      {showProgress && <LinearProgress />}
      {userUpdateValue && (
        <Box sx={{ p: 2 }}>
          <UpdateUserForm
            initialValues={userUpdateValue}
            onSubmit={async (values) => {
           
              try {
                const { name, email, designation, joining_date } = values;
                console.log("userForm===========>")
                setShowProgress(true);
                await dispatch(
                  onUpdateUsers(id, name, email, designation, joining_date)
                );
                enqueueSnackbar('User Updated successfully', {
                  variant: 'success',
                });
                setShowProgress(false);
                setTimeout(history.push.bind(null, '/admin/users'), 1);
              } catch (error) {
                enqueueSnackbar(error.message, { variant: 'error' });
              } finally {
                setShowProgress(false);
              }
            }}
          />
        </Box>
      )}
    </>
  );
}
