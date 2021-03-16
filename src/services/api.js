import axios from 'axios';

const api = axios.create({
  baseURL: 'https://enthusiast17-travel-app-api.herokuapp.com',
});

export default api;