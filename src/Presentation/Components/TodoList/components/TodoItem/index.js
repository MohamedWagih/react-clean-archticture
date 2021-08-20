import React from "react";
import { observer } from "mobx-react-lite";
import { Typography, List, Checkbox } from "antd";

const { Text, Title } = Typography;
const TodoItem = ({ todoItem }) => {
  return (
    <List.Item actions={[]}>
      <List.Item.Meta
        title={
          <Checkbox onChange={todoItem.toggleDone}>
            <Text level={2} delete={todoItem.done}>
              {todoItem.title}
            </Text>
          </Checkbox>
        }
        description={todoItem.description}
      />
    </List.Item>
  );
};

export default observer(TodoItem);
