import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const uploadReport = (data) => API.post('/upload-report', data);
export const getViolations = (filters) => API.get('/violations', { params: filters });