import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(1.25),
  borderRadius: '16px',
  borderBottomLeftRadius: 0,
  backgroundColor: theme.palette.primary.secondary,
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  '.bouncing-loader': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@keyframes bouncing-loader': {
    to: {
      transform: 'translateY(-8px)',
    },
  },
  '& div:nth-of-type(2)': {
    animationDelay: '0.2s',
  },
  '& div:nth-of-type(3)': {
    animationDelay: '0.4s',
  },
}));

export const StyledDot = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  margin: theme.spacing(0.5, 0.75),
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  animation: 'bouncing-loader 0.6s infinite alternate',
}));
