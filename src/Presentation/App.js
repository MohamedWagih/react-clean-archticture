import React, { useEffect, useState } from "react";
import TodoList from "Presentation/Components/TodoList";
import AppLayout from "Presentation/Containers/Layout/index";
import { Typography, Col, Row } from "antd";
import AppProvider from "infrastructure/provider/index";
import { initRootStore } from "application/models/store";
import api from "infrastructure/services/api/index";
import dataMapper from "infrastructure/services/dataMapper/index";

const { Title } = Typography;

const App = () => {
  const [rootStore, setRootStore] = useState(undefined);

  useEffect(() => {
    (async () => {
      const store = await initRootStore(api, dataMapper);
      console.log(store);
      setRootStore(store);
    })();
  }, []);

  const handleClick = () => {
    rootStore.todoStore[0].todoItems[0].dummyChange();
  };

  if (!rootStore) return null;
  return (
    <AppProvider store={rootStore}>
      <AppLayout>
        <Title>TodoList App</Title>
        <div>
          <Row gutter={16}>
            <Col span={8}>
              <TodoList todoList={rootStore.todoStore[0]} />
            </Col>
            <Col span={8}>
              <TodoList todoList={rootStore.todoStore[1]} />
            </Col>
          </Row>
        </div>
        <br />
        <button onClick={handleClick}>click me</button>
      </AppLayout>
    </AppProvider>
  );
};

export default App;
