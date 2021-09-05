import React from "react";
import { observer } from "mobx-react-lite";
import { Typography, List, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;
const TodoItem = ({ todoItem }) => {
  const handleItemRemove = () => {
    todoItem.remove();
  };
  return (
    <List.Item
      actions={[<DeleteOutlined key="deleteItem" onClick={handleItemRemove} />]}
    >
      <List.Item.Meta
        title={
          <Checkbox checked={todoItem.done} onChange={todoItem.toggleDone}>
            <Text level={2} delete={todoItem.done}>
              {todoItem.title}
            </Text>
            {/* <Paragraph editable={{ onChange: handleTitleChange }}>
              {todoItem.title}
            </Paragraph> */}
          </Checkbox>
        }
        description={todoItem.description}
      />
    </List.Item>
  );
};

export default observer(TodoItem);
