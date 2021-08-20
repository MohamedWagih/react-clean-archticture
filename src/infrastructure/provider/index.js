import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { RootStoreProvider, rootStore } from "application/models";

const AppProvider = ({ children, store }) => {
  return (
    <React.StrictMode>
      <RootStoreProvider value={store}>{children}</RootStoreProvider>
    </React.StrictMode>
  );
};

export default AppProvider;
