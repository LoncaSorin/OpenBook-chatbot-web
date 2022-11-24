import axios from 'axios';

import { getHeaders } from '../utils/apiUtils';

export const runGetApiRequest = async (endpoint, params, token) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`;

  return axios.get(
    url,
    {
      params,
      headers: getHeaders(token),
    },
  );
};

export const runPostApiRequest = async (endpoint, data, params, token) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`;

  return axios.post(
    url,
    data,
    {
      params,
      headers: getHeaders(token),
    },
  );
};

export const runUpdateApiRequest = async (endpoint, data = {}, params, token) => {
  const url = `${process.env.REACT_APP_API_ENDPOINT}/${endpoint}`;

  return axios.put(
    url,
    data,
    {
      params,
      headers: getHeaders(token),
    },
  );
};
