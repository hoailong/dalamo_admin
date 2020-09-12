import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import React, { Fragment } from "react";
import "./Header.scss";
import Images from "../../../constants/images";
import SubMenu from "antd/lib/menu/SubMenu";

function UserHeader(props) {
    const { username, collapsed, onCollapseChange } = props;
    return (
        <Layout.Header className="header">
            <Menu key="user" mode="horizontal" onClick={() => console.log("ok")}>
                <SubMenu
                    title={
                        <Fragment>
                            <span style={{ color: "#999", marginRight: 4 }}>Hi,</span>
                            <span className="username">User</span>
                            <Avatar style={{ marginLeft: 8 }} src={Images.AVATAR_ADMIN} />
                        </Fragment>
                    }
                >
                    <Menu.Item key="SignOut">Sign out</Menu.Item>
                </SubMenu>
            </Menu>
        </Layout.Header>
    );
}

export default UserHeader;
