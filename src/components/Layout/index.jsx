import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bread from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss";
import Sider from "./Sider";

function MainLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const activeMenu = location.pathname.slice(1);
  console.log(activeMenu);

  const onCollapseChange = () => {
    setCollapsed(!collapsed);
  };
  if (activeMenu === "login") return props.children;
  return (
    <Layout className="wrapper">
      {activeMenu === "login" ? null : null}
      <Sider collapsed={collapsed} onCollapseChange={onCollapseChange} />
      <Layout>
        <Header collapsed={collapsed} onCollapseChange={onCollapseChange} />
        <Layout.Content className="wrapper-content">
          {/* <Bread /> */}
          <div className="main-content">{props.children}</div>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default MainLayout;
