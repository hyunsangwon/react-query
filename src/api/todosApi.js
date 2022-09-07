import axios from 'axios';

const todosApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const getTodos = async () => {
  const response = await todosApi.get('/todos');
  return response;
};
