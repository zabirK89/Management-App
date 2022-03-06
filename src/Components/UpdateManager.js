import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { onGetUsersbyId,onUpdateManagerUsers } from '../Redux/Action/useraction';