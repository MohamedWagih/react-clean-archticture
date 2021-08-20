import React from "react";
import { observer } from "mobx-react-lite";
import TodoItem from "./components/TodoItem";
import { List, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const TodoList = ({ todoList }) => {
  return (
    <Card
      title={todoList.header}
      bordered={true}
      style={{ width: 300 }}
      bodyStyle={{ padding: "5px 10px" }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <List
        itemLayout="horizontal"
        dataSource={todoList.todoItems}
        renderItem={(todoItem) => <TodoItem todoItem={todoItem} />}
      />
    </Card>
  );
};

export default observer(TodoList);
