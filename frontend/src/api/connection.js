import axios from 'axios';
import { baseURL } from './constants';

export default axios.create({
  baseURL,
  timeout: 10000,
  withCredentials: true,
  crossDomain: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
