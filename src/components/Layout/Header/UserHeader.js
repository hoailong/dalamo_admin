import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout, Menu, Avatar, Input } from "antd";
import React from "react";
import "./Header.scss";
import Images from "../../../constants/images";
import SubMenu from "antd/lib/menu/SubMenu";

function UserHeader(props) {
    const { username, collapsed, onCollapseChange } = props;
    return (
        <Layout.Header className="header fixed">
            <div className="logo">Dalamo</div>
            <Menu style={{ width: "100%" }} key="search" mode="horizontal" selectable={false}>
                <Menu.Item style={{ width: "100%" }} key="search-bar">
                    <Input.Search size="large" placeholder="Tìm kiếm sản phẩm" />
                </Menu.Item>
            </Menu>
            <Menu key="user" mode="horizontal" selectable={false}>
                <Menu.Item key="Cart" icon={<ShoppingCartOutlined style={{ fontSize: 30 }} />} />
                <SubMenu
                    title={
                        <>
                            <span style={{ marginRight: 4 }}>Xin chào </span>
                            <span className="username">User</span>
                            {/* TODO: Username */}
                            <Avatar style={{ marginLeft: 8 }} src={Images.AVATAR_ADMIN} />
                        </>
                    }
                >
                    <Menu.Item key="Profile">Tài khoản của tôi</Menu.Item>
                    <Menu.Item key="Orders">Danh sách đơn hàng</Menu.Item>
                    <Menu.Item key="SignOut">Đăng xuất</Menu.Item>
                </SubMenu>
            </Menu>
        </Layout.Header>
    );
}

export default UserHeader;
