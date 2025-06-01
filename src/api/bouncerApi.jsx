import axios from 'axios';

// ✅ Safe fallback and debug log
const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5858';
const BASE_URL = rawBaseUrl.replace(/\/+$/, '') + '/api';

console.log("🌐 Bouncer API Base URL:", BASE_URL);

export const fetchAllBouncers = () => axios.get(`${BASE_URL}/accounts`);

export const fetchFilteredBouncers = (filters) =>
  axios.post(`${BASE_URL}/filter/newfilter`, filters);
