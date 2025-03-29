import axios from 'axios';

const API_URL = 'http://demo-backend-app-987232490.eu-north-1.elb.amazonaws.com/';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
