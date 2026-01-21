import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apiKey: API_KEY,
    country: 'us',
  },
});

export default client;
