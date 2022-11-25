import { runGetApiRequest, runPostApiRequest, runUpdateApiRequest } from './Api';
import { ADD_QUESTION, GET_MESSAGES, MESSAGE_BY_ID } from '../constants/apiRoutes';
import { formatRoute } from '../utils/formatters';

export const addQuestion = async (payload, params) => (
  runPostApiRequest(formatRoute(ADD_QUESTION, params), payload)
);

export const getMessages = async (params) => (
  runGetApiRequest(formatRoute(GET_MESSAGES, params))
);

export const updateMessage = async (payload, params) => (
  runUpdateApiRequest(formatRoute(MESSAGE_BY_ID, params), payload)
);
