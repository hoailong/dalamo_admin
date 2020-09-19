import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import Bread from "./Breadcrumb";
import { UserFooter } from "./Footer";
import { UserHeader } from "./Header";
import "./Layout.scss";

function UserLayout(props) {
    return (
        <Layout className="wrapper">
            <Layout>
                <UserHeader />
                <Layout.Content className="wrapper-content white-background">
                    {/* <Bread /> */}
                    <div className="main-content">{props.children}</div>
                </Layout.Content>
                <UserFooter />
            </Layout>
        </Layout>
    );
}

export default UserLayout;
