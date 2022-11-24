import React, { useEffect, useState } from 'react';
import {
  Box,
  Button, DialogActions, DialogContent, DialogTitle, TextField, Tooltip, Typography,
} from '@mui/material';

import { StyledDialog } from './index.styled';
import { createArtefact } from '../../services/ArtefactService';

export default function ArtefactDialogContainer() {
  const [open, setOpen] = useState(true);
  const [artefactId, setArtefactId] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsDisabled(!artefactId);
  }, [artefactId]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setArtefactId(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await createArtefact({ artefactId });

      handleClose();
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
