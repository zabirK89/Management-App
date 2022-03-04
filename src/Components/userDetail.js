import {
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {onGetUsersbyId} from "../Redux/Action/useraction"
function DataColumnValues1({
  dv1,
  dv2,
  dv3,
  dv4,
  dv5,
  dv6,
  dv7,
  dv8,
}) {
  return (
    <Grid container direction="column">
      <Grid item xs={6}>
        <DataValues {...dv1} />
      </Grid>
      <Grid item xs={6}>
        <DataValues {...dv2} />
      </Grid>
      <Grid item xs={6}>
        <DataValues {...dv3} />
      </Grid>
      <Grid item xs={6}>
        <DataValues {...dv4} />
      </Grid>
      <Grid item xs={6}>
        <DataValues {...dv5} />
      </Grid>
      <Grid item xs={6}>
        <DataValues {...dv6} />
      </Grid>
      <Grid item xs={6}>
        <DataValues {...dv7} />
      </Grid>
      <Grid item xs={6}>
        <DataValues {...dv8} />
      </Grid>
    </Grid>
  );
}



export default function UserDetail(){
  const { id } = useParams();
  console.log("id======>",id)
  const dispatch = useDispatch()
  const [users_details, setDetails] = useState();
  const [showProgress, setShowProgress] = useState(false); 
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    async function getUsersbyId() {
      try {
        setShowProgress(true);
        const user_details = await dispatch(onGetUsersbyId(id));
        setDetails(user_details);
      } catch (error) {
        enqueueSnackbar((error).message, {
          variant: 'error',
        });
      } finally {
        setShowProgress(false);
      }
    }
    getUsersbyId();
  }, [id]);




  return (
    <>
   <h5>User Detail</h5>
      {showProgress && <LinearProgress />}

      {users_details && (
        <Stack sx={{ paddingX: 2 }}>
          <Grid container>
            <Grid item xs={6}>
              <DataColumnValues1
                dv1={{ label: 'User ID', value: users_details.id }}
                dv2={{ label: 'Role', value: users_details.role }}
                dv3={{ label: 'Name', value: users_details.name }}
                dv4={{ label: 'Email', value: users_details.email }}
                dv5={{ label: 'Joining Date', value:users_details.joining_date}}
                dv6={{
                  label: 'Created At',
                  value: users_details.additionalDetails?.createdAt,
                }}
                dv7={{ label: 'Designation', value: users_details.designation }}
                dv8={{ label: 'Type', value: users_details.additionalDetails?.type }}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" sx={{ mt: 2.5 }}>
            History
          </Typography>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {historyHeaders.map((head) => (
                    <TableCell sx={{ fontWeight: 'bold' }} key={head}>
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody component={Paper}>
                {users_details.history?.map((history) => (
                  <TableRow key={history.id}>
                    <TableCell>{history.userId}</TableCell>
                    <TableCell>{history.description}</TableCell>
                    <TableCell>{history.changedBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      )}
    </>
  );
}