import React, { useState } from "react";
import { initialRootStore } from "application/models/store";
import AppProvider from "infrastructure/provider/index";
import AppLayout from "Presentation/Containers/Layout/index";
import { Switch } from "react-router-dom";
import Route from "Routes/ProtectedRoute";
import { QueryClient } from "react-query";
import { routes } from "Routes/routes";

const queryClient = new QueryClient();

const App = () => {
  const [rootStore, setRootStore] = useState(initialRootStore);

  if (!rootStore) return null;
  return (
    <AppProvider store={rootStore} queryClient={queryClient}>
      <AppLayout>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              protectedRoute={route.protected}
              exact={route.exact}
            />
          ))}
          <Route>NotFound</Route>
        </Switch>
      </AppLayout>
    </AppProvider>
  );
};

export default App;
