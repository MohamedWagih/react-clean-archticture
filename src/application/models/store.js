import { types, getParent, destroy } from "mobx-state-tree";

export const Todo = types
  .model({
    id: types.identifierNumber,
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    done: types.boolean,
  })
  .actions((self) => ({
    dummyChange() {
      self.title += "0";
    },
    updateTitle(title) {
      self.title = title;
    },
    remove() {
      getParent(self, 2).removeTodoItem(self);
    },
    toggleDone() {
      self.done = !self.done;
    },
  }));

export const TodoList = types
  .model({
    id: types.identifierNumber,
    header: types.optional(types.string, ""),
    todoItems: types.array(Todo),
  })
  .actions((self) => ({
    addTodo(id, text) {
      self.todoItems.push({ id, title: text, done: false });
    },
    removeTodoItem(item) {
      destroy(item);
    },
    rename(header) {
      self.header = header;
    },
  }));

const layoutStoreModel = types
  .model({
    direction: types.optional(types.string, "ltr"),
    locale: types.optional(types.string, "en"),
  })
  .actions((self) => ({
    setDirection(direction) {
      self.direction = direction;
    },
    setLocale(locale) {
      self.locale = locale;
      if (locale === "ar") self.direction = "rtl";
      else self.direction = "ltr";
    },
  }));

export const storeModel = types
  .model({
    // todoStore: types.array(TodoList),
    layoutStore: layoutStoreModel,
  })
  .actions((self) => ({
    removeList(idx) {},
  }));

export const initRootStore = async (api, dataMapper) => {
  const todoData = await api.getTodos();
  const todoLists = dataMapper.mapTodosToTodosLists(todoData);
  return storeModel.create({
    todoStore: todoLists,
  });
};

export const initialRootStore = storeModel.create({
  layoutStore: {
    direction: "ltr",
  },
});

// export const rootStore = storeModel.create({
//   todoStore: [
//     {
//       header: "Shopping List",
//       todoItems: [
//         Todo.create({
//           id: 1,
//           title: "Milk",
//           done: false,
//         }),
//         Todo.create({
//           id: 2,
//           title: "Banana",
//           done: false,
//         }),
//         Todo.create({
//           id: 3,
//           title: "Strawberry",
//           done: false,
//         }),
//       ],
//     },
//     {
//       header: "Wearings List",
//       todoItems: [
//         Todo.create({
//           id: 1,
//           title: "Milk",
//           done: false,
//         }),
//         Todo.create({
//           id: 2,
//           title: "Banana",
//           done: false,
//         }),
//         Todo.create({
//           id: 3,
//           title: "Strawberry",
//           done: false,
//         }),
//       ],
//     },
//   ],
// });
