import React from "react";
import { Typography } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const { Title } = Typography;

const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <Title level={3}>Welcome {user.name} to your TodoList App</Title>
      ) : (
        <Title level={3}>Welcome to TodoList App</Title>
      )}
    </>
  );
};

export default HomePage;
