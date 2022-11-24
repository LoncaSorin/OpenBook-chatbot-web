import { styled } from '@mui/material/styles';
import { Dialog } from '@mui/material';

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
  },
}));
