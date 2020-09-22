import {
    ShoppingOutlined,
    ShoppingTwoTone,
    SearchOutlined,
    UserOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Tooltip } from "antd";
import React from "react";
import "./Header.scss";
import Images from "../../../constants/images";
import { Link } from "react-router-dom";

function UserHeader(props) {
    const { user } = props;
    const havingItem = false;
    return (
        <Layout.Header className="header fixed">
            <div className="logo">Dalamo logo</div>
            <Menu style={{ width: "100%" }} key="search" mode="horizontal" selectable={false}>
                <Menu.Item key="HomePage">
                    <Link to="/">
                        <Tooltip title="Trang chủ">
                            <HomeOutlined className="icon--non-margin" />
                        </Tooltip>
                    </Link>
                </Menu.Item>
            </Menu>
            <Menu key="user" mode="horizontal" selectable={false}>
                <Menu.Item
                    key="Cart"
                    icon={
                        havingItem ? (
                            <Tooltip title="Giỏ hàng có 5 sản phẩm">
                                <ShoppingTwoTone
                                    twoToneColor="#6da9f7"
                                    className="icon--non-margin"
                                />
                            </Tooltip>
                        ) : (
                            <Tooltip title="Giỏ hàng rỗng">
                                <ShoppingOutlined className="icon--non-margin" />
                            </Tooltip>
                        )
                    }
                />
                {user ? (
                    <Menu.SubMenu
                        title={
                            <>
                                <span style={{ marginRight: 4 }}>Xin chào </span>
                                <span className="username">{user["name"]}</span>
                                {/* TODO: Username */}
                                <Avatar style={{ marginLeft: 8 }} src={Images.AVATAR_ADMIN} />
                            </>
                        }
                    >
                        <Menu.Item key="Profile">Tài khoản của tôi</Menu.Item>
                        <Menu.Item key="Orders">Danh sách đơn hàng</Menu.Item>
                        <Menu.Item key="SignOut">Đăng xuất</Menu.Item>
                    </Menu.SubMenu>
                ) : (
                    <Menu.SubMenu icon={<UserOutlined className="icon--non-margin" />}>
                        <Menu.Item key="Login">
                            <Link to="/login">Đăng nhập</Link>
                        </Menu.Item>
                        <Menu.Item key="Register">Đăng ký</Menu.Item>
                    </Menu.SubMenu>
                )}
            </Menu>
        </Layout.Header>
    );
}

export default UserHeader;
