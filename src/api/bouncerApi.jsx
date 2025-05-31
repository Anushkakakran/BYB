import axios from 'axios';

const BASE_URL = 'http://localhost:5858/api';

export const fetchAllBouncers = () => axios.get(`${BASE_URL}/accounts`);
export const fetchFilteredBouncers = (filters) => axios.post(`${BASE_URL}/filter/newfilter`, filters);
