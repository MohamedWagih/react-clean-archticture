import { useQuery } from "react-query";
import api from "infrastructure/services/api";
import dataMapper from "infrastructure/services/dataMapper";

export const useGetTodoLists = () => {
  const query = useQuery("getTodoLists", () => api.getTodos());
  const mappedData = dataMapper.mapTodosToTodosLists(query.data);
  return { ...query, data: mappedData };
};
