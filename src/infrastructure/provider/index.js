import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { RootStoreProvider, rootStore } from "application/models";

const AppProvider = (props) => {
  return (
    <React.StrictMode>
      <RootStoreProvider value={rootStore}>{props.children}</RootStoreProvider>
    </React.StrictMode>
  );
};

export default AppProvider;
