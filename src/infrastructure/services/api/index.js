import axios from "axios";

const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
};

const api = {
  getTodos,
};

export default api;
