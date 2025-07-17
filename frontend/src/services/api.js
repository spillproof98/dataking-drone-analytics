import axios from 'axios';

const API = axios.create({ baseURL: 'https://dataking-drone-analytics.onrender.com/api/violations' });

export const uploadReport = (data) => API.post('/upload-report', data);
export const getViolations = (filters) => API.get('/violations', { params: filters });