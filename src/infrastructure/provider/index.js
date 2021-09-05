import React from "react";
import "antd/dist/antd.css";
import { RootStoreProvider } from "application/models";
import Auth0ProviderWithHistory from "infrastructure/services/auth/auth0provider";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";

const AppProvider = ({ children, store, queryClient }) => {
  return (
    <React.StrictMode>
      <RootStoreProvider value={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Auth0ProviderWithHistory>{children}</Auth0ProviderWithHistory>
          </Router>
        </QueryClientProvider>
      </RootStoreProvider>
    </React.StrictMode>
  );
};

export default AppProvider;
