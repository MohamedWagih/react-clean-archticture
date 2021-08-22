import React, { useEffect, useState } from "react";
import { initRootStore } from "application/models/store";
import AppProvider from "infrastructure/provider/index";
import api from "infrastructure/services/api/index";
import dataMapper from "infrastructure/services/dataMapper/index";
import AppLayout from "Presentation/Containers/Layout/index";
import TodoListPage from "Presentation/Containers/TodoListPage";
import HomePage from "Presentation/Containers/HomePage";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "Presentation/Routes/ProtectedRoute";

const App = () => {
  const [rootStore, setRootStore] = useState(undefined);

  useEffect(() => {
    (async () => {
      const store = await initRootStore(api, dataMapper);
      console.log(store);
      setRootStore(store);
    })();
  }, []);

  if (!rootStore) return null;
  return (
    <AppProvider store={rootStore}>
      <AppLayout>
        <Switch>
          <ProtectedRoute exact path="/todolist" component={TodoListPage} />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>NotFound</Route>
        </Switch>
      </AppLayout>
    </AppProvider>
  );
};

export default App;
