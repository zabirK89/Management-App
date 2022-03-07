import React from "react"
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onGetUsersbyId, onUpdateManagerUsers } from '../Redux/Action/useraction';
import { useSnackbar } from 'notistack';
import UpdateManagerForm from './UpdateManagerForm.js';

export default function UpdateManager() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const dispatch = useDispatch();
  const [showProgress, setShowProgress] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const history = useNavigate();

  async function onGetUsers() {
    const userBody = await dispatch(onGetUsersbyId(id));
    const { manager } = userBody 
    setUserDetails(manager);
  }
  useEffect(() => {
    onGetUsers();
  }, [id]);

  return (
    <>
      <h3>Assign Manager</h3 >
      {showProgress && <LinearProgress />}
      {userDetails && (
        <Box sx={{ p: 2 }}>
          <UpdateManagerForm
            initialValues={userDetails}
            onSubmit={async (values) => {
              try {
                const { manager } = values;
                await dispatch(onUpdateManagerUsers(id, manager));
                enqueueSnackbar('Manager Assigned Successfully', { variant: 'success' });
                setShowProgress(false);
                setTimeout(history.push.bind(null, '/admin/users'), 1);
              } catch (error) {
                enqueueSnackbar((error).message, { variant: 'error' });
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
