const mapTodosToTodosLists = (todos) => {
  const mappedTodos = mapTodos(todos);
  const todoLists = [
    {
      id: 1,
      header: "First Todos",
      todoItems: mappedTodos?.filter(({ id }) => id % 2 === 0),
    },
    {
      id: 2,
      header: "Second Todos",
      todoItems: mappedTodos?.filter(({ id }) => id % 2 !== 0),
    },
    {
      id: 3,
      header: "Third Todos",
      todoItems: mappedTodos?.filter(({ id }) => id % 2 !== 0),
    },
    {
      id: 4,
      header: "Fourth Todos",
      todoItems: mappedTodos?.filter(({ id }) => id % 2 !== 0),
    },
    {
      id: 5,
      header: "Fifth Todos",
      todoItems: mappedTodos?.filter(({ id }) => id % 2 !== 0),
    },
    {
      id: 6,
      header: "sixth Todos",
      todoItems: mappedTodos?.filter(({ id }) => id % 2 !== 0),
    },
  ];
  return todoLists;
};

const mapTodos = (todos) => {
  return todos
    ?.map(({ id, title, completed }) => ({
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
