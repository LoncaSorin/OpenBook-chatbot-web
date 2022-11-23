import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledMessageWrapper = styled(Box)(({ theme, mode }) => ({
  maxWidth: '350px',
  padding: theme.spacing(2),
  borderRadius: '16px',
  borderBottomRightRadius: mode === 'primary' ? '0px' : '8px',
  borderBottomLeftRadius: mode !== 'primary' ? '0px' : '8px',
  backgroundColor: mode === 'primary' ? theme.palette.secondary.main : theme.palette.primary.secondary,
  '& div': {
    display: 'none',
  },
  '&:hover': {
    '& div': {
      display: 'flex',
    },
  },
}));

export const StyledIconWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.border.secondary}`,
  height: '24px',
  width: '24px',
  backgroundColor: theme.palette.background.main,
  '& svg': {
    height: '16px',
    width: '16px',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  '&:hover': {
    cursor: 'pointer',
    border: `1px solid ${theme.palette.border.main}`,
  },
}));
