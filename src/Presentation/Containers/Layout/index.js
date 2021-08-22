import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Menu, Typography } from "antd";
import logo from "assets/todo-icon.png";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
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
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleCollapsed,
            }
          )}
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
  );
};

export default AppLayout;
