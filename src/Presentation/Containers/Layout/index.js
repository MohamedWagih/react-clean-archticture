import React from "react";
import { useStores } from "application/models";
import { observer } from "mobx-react-lite";
import enUS from "antd/lib/locale/en_US";
import arEG from "antd/lib/locale/ar_EG";
import { Layout, ConfigProvider } from "antd";
import LayoutHeader from "./components/Header";
import LayoutSider from "./components/Sider";

const { Content } = Layout;

const AppLayout = ({ children }) => {
  const { layoutStore } = useStores();

  const getLocale = () => {
    return layoutStore.locale === "ar" ? arEG : enUS;
  };
  console.log("locale: ", getLocale());
  return (
    <ConfigProvider direction={layoutStore.direction} locale={getLocale()}>
      <Layout style={{ minHeight: "100vh" }}>
        <LayoutSider />
        <Layout className="site-layout">
          <LayoutHeader />
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
