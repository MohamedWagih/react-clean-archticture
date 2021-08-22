import React from "react";
import TodoList from "Presentation/Components/TodoList";

import { Typography, Col, Row } from "antd";
import { useStores } from "application/models";
import { observer } from "mobx-react-lite";

const { Title } = Typography;

const TodoListPage = () => {
  const { todoStore } = useStores();
  const handleClick = () => {
    todoStore[0].todoItems[0].dummyChange();
  };

  return (
    <>
      <Title>TodoList App</Title>
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <TodoList todoList={todoStore[0]} />
          </Col>
          <Col span={8}>
            <TodoList todoList={todoStore[1]} />
          </Col>
        </Row>
      </div>
      <br />
      <button onClick={handleClick}>click me</button>
    </>
  );
};

export default observer(TodoListPage);
