import React, { Suspense } from "react";
import { Typography } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const HomePage = () => {
  const { isAuthenticated, user } = useAuth0();
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading">
      <Title level={2}>{t("title")}</Title>
      {isAuthenticated ? (
        <Title level={3}>Welcome {user.name} to your TodoList App</Title>
      ) : (
        <Title level={3}>Welcome to TodoList App</Title>
      )}
    </Suspense>
  );
};

export default HomePage;
