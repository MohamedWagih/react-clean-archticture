import React from "react";
import { useStores } from "application/models";
import { Layout, Button, Row, Col } from "antd";

const { Header } = Layout;
const LayoutHeader = () => {
  const { layoutStore } = useStores();

  const toggleLocale = () => {
    layoutStore.locale === "ar"
      ? layoutStore.setLocale("en")
      : layoutStore.setLocale("ar");
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
