const mapTodosToTodosLists = (todos) => {
  const mappedTodos = mapTodos(todos);
  const todoLists = [
    {
      header: "Even Todos",
      todoItems: mappedTodos.filter(({ id }) => id % 2 === 0),
    },
    {
      header: "Odd Todos",
      todoItems: mappedTodos.filter(({ id }) => id % 2 !== 0),
    },
  ];
  return todoLists;
};

const mapTodos = (todos) => {
  return todos.map(({ id, title, completed }) => ({
    id,
    title,
    done: completed,
  }));
};

const dataMapper = {
  mapTodosToTodosLists,
};

export default dataMapper;
