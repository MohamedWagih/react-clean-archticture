import { types } from "mobx-state-tree";

export const Todo = types
  .model({
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    done: types.boolean,
  })
  .actions((self) => ({
    dummyChange() {
      self.title += "0";
    },
    toggleDone() {
      self.done = !self.done;
    },
  }));

export const TodoList = types
  .model({
    header: types.optional(types.string, ""),
    todoItems: types.array(Todo),
  })
  .actions((self) => ({
    addTodo(id, text) {
      self.todoItems.push({ id, title: text });
    },
  }));

export const storeModel = types.model({
  todoStore: types.array(TodoList),
});

export const rootStore = storeModel.create({
  todoStore: [
    {
      header: "Shopping List",
      todoItems: [
        Todo.create({
          title: "Milk",
          done: false,
        }),
        Todo.create({
          title: "Banana",
          done: false,
        }),
        Todo.create({
          title: "Strawberry",
          done: false,
        }),
      ],
    },
    {
      header: "Wearings List",
      todoItems: [
        Todo.create({
          title: "Milk",
          done: false,
        }),
        Todo.create({
          title: "Banana",
          done: false,
        }),
        Todo.create({
          title: "Strawberry",
          done: false,
        }),
      ],
    },
  ],
});
