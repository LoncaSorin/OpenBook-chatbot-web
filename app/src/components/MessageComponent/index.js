import React, { useState } from 'react';
import { string, oneOf, func } from 'prop-types';
import { Box, Tooltip, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CachedIcon from '@mui/icons-material/Cached';

import { StyledIconWrapper, StyledMessageWrapper } from './index.styled';
import { BAD_ANSWER, GOOD_ANSWER } from '../../constants/general';

MessageComponent.propTypes = {
  message: string.isRequired,
  secondaryMessage: string,
  mode: oneOf(['primary', 'secondary']),
  onFeedback: func,
  feedback: string,
};

MessageComponent.defaultProps = {
  mode: 'primary',
  secondaryMessage: null,
  onFeedback: null,
  feedback: null,
};

export default function MessageComponent(props) {
  const {
    message, mode, secondaryMessage, onFeedback, feedback,
  } = props;
  const isPrimaryMode = mode === 'primary';
  const [visibleMessage, setVisibleMessage] = useState(secondaryMessage || message);
  const [tooltipTitle, setTooltipTitle] = useState('Flip the card to see the original answer.');
  const isGoodAnswer = feedback === GOOD_ANSWER;
  const hasFeedback = !!feedback;

  const handleFlipCard = () => {
    const isVisibleMessageTheOriginal = visibleMessage === message;

    setVisibleMessage(isVisibleMessageTheOriginal ? secondaryMessage : message);
    setTooltipTitle(isVisibleMessageTheOriginal
      ? 'Flip the card to see the original answer.'
      : 'Flip the card to see the new answer.');
  };

  const handlePositiveFeedback = () => {
    if (!message?.feedback) {
      onFeedback(GOOD_ANSWER);
    }
  };

  const handleNegativeFeedback = () => {
    if (!message?.feedback) {
      onFeedback(BAD_ANSWER);
    }
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
            <StyledIconWrapper
              sx={{ mr: 1 }}
              onClick={handlePositiveFeedback}
              disabled={!isGoodAnswer && hasFeedback}
              isActive={isGoodAnswer && hasFeedback}
            >
              <ThumbUpIcon />
            </StyledIconWrapper>

            <StyledIconWrapper
              onClick={handleNegativeFeedback}
              disabled={isGoodAnswer && hasFeedback}
              isActive={!isGoodAnswer && hasFeedback}
            >
              <ThumbDownIcon />
            </StyledIconWrapper>
          </Box>
        )}
      </StyledMessageWrapper>
    </Box>
  );
}
