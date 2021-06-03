import axios from 'axios';
import keys from 'config/keys';
import { getLocalUser, removeLocalUser } from './common';

const opts = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const bindAuthHeaders = (config) => {
  let accessToken = getLocalUser();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
};

const http = axios.create({
  ...opts,
  baseURL: keys.API,
});

http.interceptors.request.use(bindAuthHeaders);

http.interceptors.response.use((response) => {
  if (response.status === 401 || response.status === 403) {
    removeLocalUser();
  }
  return response;
});

export default http;
