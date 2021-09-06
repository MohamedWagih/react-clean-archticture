import React from "react";
import HomePage from "Presentation/Containers/HomePage";
import TodoListPage from "Presentation/Containers/TodoListPage";

export const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/todolist",
    protected: true,
    component: TodoListPage,
  },
];
