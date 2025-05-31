import axios from 'axios';

// ✅ Use environment variable for base URL
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

export const fetchAllBouncers = () => axios.get(`${BASE_URL}/accounts`);

export const fetchFilteredBouncers = (filters) =>
  axios.post(`${BASE_URL}/filter/newfilter`, filters);
