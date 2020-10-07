import React from "react";
import {
    ShoppingOutlined,
    ShoppingTwoTone,
    SearchOutlined,
    UserOutlined,
    HomeOutlined,
    RetweetOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Tooltip, Badge } from "antd";
import { useDispatch } from "react-redux";
import "./Header.scss";
import Images from "../../../constants/images";
import { Link } from "react-router-dom";
import { openModal as openCompareModal } from "../../Modal/Compare/slice";
import CompareModal from "../../Modal/Compare";

function UserHeader(props) {
    const { user } = props;
    const dispatch = useDispatch();

    const handleOpenCompare = () => {
        dispatch(openCompareModal());
    }

    return (
        <Layout.Header className="header fixed">
            <div className="logo">Dalamo logo</div>
            <Menu style={{ width: "100%" }} key="search" mode="horizontal" selectable={false}>
                <Menu.Item key="HomePage">
                    <Link to="/">Trang chủ</Link>
                </Menu.Item>
            </Menu>
            <Menu key="user" mode="horizontal" selectable={false}>
                <Menu.Item
                    key="Cart"
                    icon={
                        <Tooltip title="Giỏ hàng có 5 sản phẩm">
                            <Badge count={5}>
                                <ShoppingTwoTone
                                    twoToneColor="#6da9f7"
                                    className="icon--non-margin"
                                />
                            </Badge>
                        </Tooltip>
                    }
                />
                <Menu.Item
                    onClick={handleOpenCompare}
                    key="Compare"
                    icon={
                        <Tooltip title="Đang so sánh 5 sản phẩm">
                            <Badge count={5}>
                                <RetweetOutlined className="icon--non-margin" />
                            </Badge>
                        </Tooltip>
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
            <CompareModal />
        </Layout.Header>
    );
}

export default UserHeader;
