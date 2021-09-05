import axios from "axios";

const endpoint = process.env.REACT_APP_API_URL;

const getTodos = async () => {
  const response = await axios.get(endpoint);

  return response.data;
};

const api = {
  getTodos,
};

export default api;
