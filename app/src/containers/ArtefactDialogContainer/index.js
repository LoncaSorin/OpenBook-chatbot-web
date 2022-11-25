import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Box,
  Button, DialogActions, DialogContent, DialogTitle, TextField, Tooltip, Typography,
} from '@mui/material';

import { StyledDialog } from './index.styled';
import { HOME_ROUTE } from '../../constants/clientRoutes';
import { createArtefact } from '../../services/ArtefactService';

export default function ArtefactDialogContainer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchArtefactId = searchParams?.get('artefactId');

  const [open, setOpen] = useState(false);
  const [artefactId, setArtefactId] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setOpen(!searchArtefactId);
  }, [searchArtefactId]);

  useEffect(() => {
    setIsDisabled(!artefactId);
  }, [artefactId]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setArtefactId(event.target.value);
    setErrorMessage('');
  };

  const handleSubmit = async () => {
    try {
      await createArtefact({ artefactId });

      handleClose();
      navigate({ pathname: HOME_ROUTE, search: `?artefactId=${artefactId}` });
    } catch (e) {
      setErrorMessage(e?.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    open && (
      <StyledDialog
        open={open}
        aria-describedby="review-product"
      >
        <DialogTitle>Information for the chatbot</DialogTitle>
        <DialogContent>
          <Box width="350px" height="100px" display="flex" alignItems="center">
            <TextField
              placeholder="Write the chatbot artefactId here"
              fullWidth
              onChange={handleChange}
              error={Boolean(errorMessage)}
              helperText={errorMessage}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: '0 24px 24px' }}>
          <Tooltip
            title={<Typography variant="caption">Please write an artefactId</Typography>}
            placement="right"
          >
            <div>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isDisabled}
              >
                Submit
              </Button>
            </div>
          </Tooltip>
        </DialogActions>
      </StyledDialog>
    )
  );
}
