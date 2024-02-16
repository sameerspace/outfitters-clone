import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  timeout: 2000,
});

export default apiClient;
