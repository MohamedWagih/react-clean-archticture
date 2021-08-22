import React from "react";
import "antd/dist/antd.css";
import { RootStoreProvider } from "application/models";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "infrastructure/services/auth/auth0provider";

const AppProvider = ({ children, store }) => {
  return (
    <React.StrictMode>
      <RootStoreProvider value={store}>
        <Router>
          <Auth0ProviderWithHistory>{children}</Auth0ProviderWithHistory>
        </Router>
      </RootStoreProvider>
    </React.StrictMode>
  );
};

export default AppProvider;
