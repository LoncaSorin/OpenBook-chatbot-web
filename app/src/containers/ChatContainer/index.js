import React from 'react';
import { Box, TextField } from '@mui/material';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

import { StyledChatContentWrapper, StyledChatWrapper, StyledIconButton } from './index.styled';
import MessageComponent from '../../components/MessageComponent';

const mockMessages = [
  {
    _id: '1',
    question: 'What is OpenBook?',
    answer: 'OpenBook is a new type of NLP engine that you can use for creating chatbots.',
  },
  {
    _id: '2',
    question: 'What is OpenBook?',
    answer: 'OpenBook is a new type of NLP engine that you can use for creating chatbots.',
  },
  {
    _id: '3',
    question: 'Where is located?',
    answer: 'The hotel has no medical staff onsite, but is located within 5 minutes of the hospital. '
      + 'The hotel is equipped with security cameras on all levels and entrances. '
      + 'The hotel has 24/7 security personnel on site.',
  },
  {
    _id: '4',
    question: 'Where is located?',
    answer: 'The hotel has no medical staff onsite, but is located within 5 minutes of the hospital. '
      + 'The hotel is equipped with security cameras on all levels and entrances. '
      + 'The hotel has 24/7 security personnel on site.',
  },
];

export default function ChatContainer() {
  return (
    <Box display="flex" height="80vh" justifyContent="center" alignItems="center">
      <StyledChatWrapper>
        <StyledChatContentWrapper className="hidden-scroll">
          {mockMessages?.length && mockMessages.map((message) => (
            <Box key={message?._id}>
              <MessageComponent message={message?.question} />
              <MessageComponent message={message?.answer} mode="secondary" />
            </Box>
          ))}
        </StyledChatContentWrapper>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} width="100%">
          <TextField
            id="field-question"
            placeholder="Ask your book a question..."
            variant="outlined"
            fullWidth
            size="medium"
            sx={{ mr: 3 }}
          />

          <StyledIconButton size="large" sx={{ mr: 1 }}>
            <SmsOutlinedIcon />
          </StyledIconButton>
        </Box>
      </StyledChatWrapper>
    </Box>
  );
}
