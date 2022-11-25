import React from 'react';
import { CircularProgress } from '@mui/material';

import { StyledBox } from './index.styled';

export default function LoadingComponent() {
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  );
}
