import axios from 'axios';

const todosApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const getTodos = async () => {
  const response = await todosApi.get('/todos');
  return response;
};

export const addTodo = async (todo) => {
  return await todosApi.post('/todos', todo);
};

export const updateTodo = async (todo) => {
  return await todosApi.patch('/todos', todo);
};

export const deleteTodo = async (todo) => {
  return await todosApi.delete('/todos', todo);
};
