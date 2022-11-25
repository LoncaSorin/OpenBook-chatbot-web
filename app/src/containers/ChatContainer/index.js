import React, { useEffect, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { StyledChatContentWrapper, StyledChatWrapper, StyledIconButton } from './index.styled';
import MessageComponent from '../../components/MessageComponent';
import LoadingMessageComponent from '../../components/LoadingMessageComponent';
import { addQuestion, getMessages, updateMessage } from '../../services/MessageService';
import LoadingComponent from '../../components/LoadingComponent';

export default function ChatContainer() {
  const [searchParams] = useSearchParams();
  const ref = useRef();
  const artefactId = searchParams?.get('artefactId');

  const [isQuestionLoading, setIsQuestionLoading] = useState(false);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (artefactId) {
      fetchMessages();
    }
  }, [artefactId]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  const fetchMessages = async () => {
    try {
      setIsMessagesLoading(true);
      const params = { artefactId };

      const response = await getMessages(params);

      setMessages(response?.data || []);
    } catch (e) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsMessagesLoading(false);
    }
  };

  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
    setErrorMessage('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAskQuestion();
    }
  };

  const handleAskQuestion = async () => {
    if (!question) {
      return setErrorMessage('Please enter a question.');
    }

    const existingMessages = [...messages];
    setQuestion('');
    setMessages((prevMessages) => [...prevMessages, { id: 'temporaryMessage', question }]);

    try {
      setIsQuestionLoading(true);
      const payload = { question };
      const params = { artefactId };

      const response = await addQuestion(payload, params);

      setMessages([...existingMessages, response?.data]);
      setErrorMessage('');
    } catch (e) {
      setErrorMessage(e?.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsQuestionLoading(false);
    }
  };

  const handleFeedback = async (messageId, feedback) => {
    try {
      const params = { messageId };
      const payload = { feedback };

      await updateMessage(payload, params);

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        const messageIndex = prevMessages.findIndex((message) => message.id === messageId);

        updatedMessages[messageIndex] = {
          ...updatedMessages[messageIndex],
          feedback,
        };

        return updatedMessages;
      });
    } catch (e) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
      <StyledChatWrapper>
        {isMessagesLoading && <LoadingComponent />}

        <StyledChatContentWrapper className="hidden-scroll" ref={ref}>
          {messages?.length > 0 && messages.map((message, index) => {
            const isLastMessage = index === messages.length - 1;

            return (
              <Box key={message?.id} mb={isLastMessage ? 1.5 : 0}>
                <MessageComponent message={message?.question} />

                {message?.answer && (
                  <MessageComponent
                    message={message?.answer}
                    mode="secondary"
                    secondaryMessage={message?.newAnswer}
                    onFeedback={(feedback) => handleFeedback(message?.id, feedback)}
                    feedback={message?.feedback}
                  />
                )}
              </Box>
            );
          })}
          {isQuestionLoading && (
            <LoadingMessageComponent />
          )}
        </StyledChatContentWrapper>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} width="100%">
          <TextField
            id="field-question"
            placeholder="Ask your book a question..."
            variant="outlined"
            fullWidth
            size="medium"
            sx={{ mr: 3 }}
            value={question}
            onChange={handleChangeQuestion}
            error={Boolean(errorMessage)}
            helperText={errorMessage}
            onKeyPress={handleKeyPress}
          />

          <StyledIconButton size="large" sx={{ mr: 1 }} onClick={handleAskQuestion}>
            <SmsOutlinedIcon />
          </StyledIconButton>
        </Box>
      </StyledChatWrapper>
    </Box>
  );
}
