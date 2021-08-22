const mapTodosToTodosLists = (todos) => {
  const mappedTodos = mapTodos(todos);
  const todoLists = [
    {
      id: 1,
      header: "Even Todos",
      todoItems: mappedTodos.filter(({ id }) => id % 2 === 0),
    },
    {
      id: 2,
      header: "Odd Todos",
      todoItems: mappedTodos.filter(({ id }) => id % 2 !== 0),
    },
  ];
  return todoLists;
};

const mapTodos = (todos) => {
  return todos
    .map(({ id, title, completed }) => ({
      id,
      title,
      done: completed,
    }))
    .slice(0, 10);
};

const dataMapper = {
  mapTodosToTodosLists,
};

export default dataMapper;
