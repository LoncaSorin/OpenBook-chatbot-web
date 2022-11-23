import React from 'react';
import { string, oneOf } from 'prop-types';
import { Box, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { StyledIconWrapper, StyledMessageWrapper } from './index.styled';

MessageComponent.propTypes = {
  message: string.isRequired,
  mode: oneOf(['primary', 'secondary']),
};

MessageComponent.defaultProps = {
  mode: 'primary',
};

export default function MessageComponent(props) {
  const { message, mode } = props;
  const isPrimaryMode = mode === 'primary';

  return (
    <Box display="flex" justifyContent={isPrimaryMode ? 'flex-end' : 'flex-start'} width="100%" my={0.5}>
      <StyledMessageWrapper mode={mode} position="relative">
        <Typography variant="body2">
          {message}
        </Typography>

        {!isPrimaryMode && (
          <Box
            display="flex"
            alignItems="center"
            position="absolute"
            right={-12}
            bottom={-12}
          >
            <StyledIconWrapper sx={{ mr: 1 }}>
              <ThumbUpIcon />
            </StyledIconWrapper>

            <StyledIconWrapper>
              <ThumbDownIcon />
            </StyledIconWrapper>
          </Box>
        )}
      </StyledMessageWrapper>
    </Box>
  );
}
