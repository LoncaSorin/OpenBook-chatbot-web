import { styled } from '@mui/material/styles';

export const StyledBox = styled('div')(() => ({
  position: 'absolute',
  zIndex: 1000,
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
}));
