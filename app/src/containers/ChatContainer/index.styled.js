import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledChatWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 1.25, 1.25, 1.25),
  height: '550px',
  width: '750px',
  border: `1px solid ${theme.palette.border.secondary}`,
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '& svg': {
    fill: theme.palette.background.main,
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    '& svg': {
      fill: theme.palette.background.main,
    },
  },
}));

export const StyledChatContentWrapper = styled(Box)(() => ({
  maxHeight: 'calc(100% - 78px)',
  width: '100%',
}));
