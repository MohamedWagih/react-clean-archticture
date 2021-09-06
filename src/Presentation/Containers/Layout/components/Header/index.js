import React from "react";
import { useStores } from "application/models";
import { Layout, Button, Row, Col } from "antd";
import { useTranslation } from "react-i18next";

const { Header } = Layout;
const LayoutHeader = () => {
  const { layoutStore } = useStores();
  const { i18n } = useTranslation();

  const toggleLocale = () => {
    layoutStore.locale === "ar"
      ? i18n.changeLanguage("en", () => layoutStore.setLocale("en"))
      : i18n.changeLanguage("ar", () => layoutStore.setLocale("ar"));
  };
  return (
    <Header className="header">
      <Row justify="end">
        <Col>
          <Button type="primary" shape="circle" onClick={toggleLocale}>
            {layoutStore.locale === "ar" ? "AR" : "EN"}
          </Button>
        </Col>
      </Row>
    </Header>
  );
};

export default LayoutHeader;
