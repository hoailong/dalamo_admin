import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import Bread from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss";
import Sider from "./Sider";

function MainLayout(props) {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapseChange = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout className="wrapper">
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
