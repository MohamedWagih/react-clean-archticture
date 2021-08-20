import TodoList from "./Components/TodoList";
import AppLayout from "./Containers/Layout/index";
import { Typography } from "antd";
import { useStores } from "application/models";

const { Title } = Typography;
function App() {
  const { todoStore } = useStores();
  const handleClick = () => {
    todoStore[0].todoItems[0].dummyChange();
  };

  return (
    <AppLayout>
      <Title>TodoList App</Title>
      <div>
        <TodoList todoList={todoStore[0]} />
      </div>
      <br />
      <button onClick={handleClick}>click me</button>
    </AppLayout>
  );
}

export default App;
