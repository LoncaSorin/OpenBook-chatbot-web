import React, { useState } from 'react';
import { string, oneOf } from 'prop-types';
import { Box, Tooltip, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CachedIcon from '@mui/icons-material/Cached';

import { StyledIconWrapper, StyledMessageWrapper } from './index.styled';

MessageComponent.propTypes = {
  message: string.isRequired,
  secondaryMessage: string,
  mode: oneOf(['primary', 'secondary']),
};

MessageComponent.defaultProps = {
  mode: 'primary',
  secondaryMessage: null,
};

export default function MessageComponent(props) {
  const { message, mode, secondaryMessage } = props;
  const isPrimaryMode = mode === 'primary';
  const [visibleMessage, setVisibleMessage] = useState(secondaryMessage || message);
  const [tooltipTitle, setTooltipTitle] = useState('Flip the card to see the original message.');

  const handleFlipCard = () => {
    const isVisibleMessageTheOriginal = visibleMessage === message;

    setVisibleMessage(isVisibleMessageTheOriginal ? secondaryMessage : message);
    setTooltipTitle(isVisibleMessageTheOriginal
      ? 'Flip the card to see the original message.'
      : 'Flip the card to see the new message.');
  };

  return (
    <Box display="flex" justifyContent={isPrimaryMode ? 'flex-end' : 'flex-start'} width="100%" my={0.5}>
      <StyledMessageWrapper mode={mode} hasError={visibleMessage !== message}>
        <Typography variant="body2">
          {visibleMessage}
        </Typography>

        {secondaryMessage && (
          <Tooltip
            title={<Typography variant="caption">{tooltipTitle}</Typography>}
            placement="right"
          >
            <Box
              position="absolute"
              right={-12}
              top={-12}
              onClick={handleFlipCard}
            >
              <StyledIconWrapper>
                <CachedIcon />
              </StyledIconWrapper>
            </Box>
          </Tooltip>
        )}

        {!isPrimaryMode && (
          <Box
            id="feedbacks"
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
