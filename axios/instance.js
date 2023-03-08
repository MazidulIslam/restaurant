import axios from 'axios';
import baseURL from './baseURL';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;
