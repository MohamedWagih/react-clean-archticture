import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "assets/todo-icon.png";
import { useStores } from "application/models";
import { observer } from "mobx-react-lite";
import enUS from "antd/lib/locale/en_US";
import arEG from "antd/lib/locale/ar_EG";
import {
  Layout,
  Menu,
  Typography,
  Button,
  Row,
  Col,
  ConfigProvider,
} from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const AppLayout = ({ children }) => {
  const { layoutStore } = useStores();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const toggleLocale = () => {
    layoutStore.locale === "ar"
      ? layoutStore.setLocale("en")
      : layoutStore.setLocale("ar");
  };
  const getLocale = () => {
    return layoutStore.locale === "ar" ? arEG : enUS;
  };
  console.log("locale: ", getLocale());
  return (
    <ConfigProvider direction={layoutStore.direction} locale={getLocale()}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo">
            <img alt="app logo" src={logo} />
            <Text strong>Todo App</Text>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            {isAuthenticated && (
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/todolist">TodoLists</Link>
              </Menu.Item>
            )}
            {!isAuthenticated ? (
              <Menu.Item
                onClick={() => loginWithRedirect()}
                key="3"
                icon={<LoginOutlined />}
              >
                LogIn
              </Menu.Item>
            ) : (
              <Menu.Item
                onClick={() => logout({ returnTo: window.location.origin })}
                key="4"
                icon={<LogoutOutlined />}
              >
                LogOut
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            <Row justify="end">
              <Col>
                <Button type="primary" shape="circle" onClick={toggleLocale}>
                  {layoutStore.locale === "ar" ? "AR" : "EN"}
                </Button>
              </Col>
            </Row>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default observer(AppLayout);
