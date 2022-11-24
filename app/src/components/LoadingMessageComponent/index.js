import React from 'react';

import { StyledBox, StyledDot } from './index.styled';

export default function LoadingMessageComponent() {
  return (
    <StyledBox my={0.5}>
      <StyledDot />
      <StyledDot />
      <StyledDot />
    </StyledBox>
  );
}
