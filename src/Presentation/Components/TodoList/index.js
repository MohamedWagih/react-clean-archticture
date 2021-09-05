import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import TodoItem from "./components/TodoItem";
import { List, Card, Typography, Modal } from "antd";
import { EllipsisOutlined, DeleteOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const TodoList = ({ todoList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleTitleChange = (value) => {
    todoList.rename(value);
  };
  return (
    <>
      <Card
        title={
          <Paragraph editable={{ onChange: handleTitleChange }}>
            {todoList.header}
          </Paragraph>
        }
        bordered={true}
        // style={{ width: 300 }}
        bodyStyle={{ padding: "5px 10px" }}
        actions={[
          <DeleteOutlined key="delete" onClick={showModal} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <List
          itemLayout="horizontal"
          dataSource={todoList.todoItems}
          renderItem={(todoItem) => <TodoItem todoItem={todoItem} />}
        />
      </Card>
      <Modal
        title="Delete TodoList"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure to delete "{todoList.header}" TodoList</p>
      </Modal>
    </>
  );
};

export default observer(TodoList);
