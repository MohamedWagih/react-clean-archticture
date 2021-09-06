import React from "react";
import TodoList from "./components/TodoList";

import { Typography, Col, Row, Spin, message } from "antd";
import { useStores } from "application/models";
import { observer } from "mobx-react-lite";
import { useGetTodoLists } from "infrastructure/services/Todos";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const TodoListPage = () => {
  const { data: todoLists, isLoading, error } = useGetTodoLists();
  const { t } = useTranslation();

  if (isLoading) return <Spin size="large" />;

  if (error) return message.error(error);

  return (
    <>
      <Title>{t("todolistPage.header")}</Title>
      <div>
        <Row gutter={[32, 24]} justify="space-between">
          {todoLists.map((list) => (
            <Col key={list.id} span={8}>
              <TodoList todoList={list} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default observer(TodoListPage);
