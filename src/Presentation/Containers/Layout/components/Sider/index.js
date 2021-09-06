import React from "react";
import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import logo from "assets/todo-icon.png";
import { useAuth0 } from "@auth0/auth0-react";
import {
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { Text } = Typography;

const LayoutSider = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
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
  );
};

export default LayoutSider;
