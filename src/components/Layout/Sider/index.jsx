import {
  AppstoreOutlined,
  CopyrightOutlined,
  DashboardOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  NumberOutlined,
  RocketOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Images from "../../../constants/images";
import "./Sider.scss";

function Sider(props) {
  const location = useLocation();
  const { collapsed, onCollapseChange } = props;
  const activeMenu = location.pathname.slice(1);
  return (
    <Layout.Sider
      width="250"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapseChange}
    >
      <div className="brand">
        <div className="logo">
          <img alt="logo" src={Images.LOGO_CAFE} />
          {!collapsed && <h1>Admin Page</h1>}
        </div>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[activeMenu !== "" ? activeMenu : "product"]}
        mode="inline"
      >
        <Menu.ItemGroup>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <Link to="dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="product" icon={<ExperimentOutlined />}>
            <Link to="product">Sản phẩm</Link>
          </Menu.Item>
          <Menu.Item key="category" icon={<AppstoreOutlined />}>
            <Link to="category">Danh mục</Link>
          </Menu.Item>
          <Menu.Item key="brand" icon={<CopyrightOutlined />}>
            <Link to="brand">Nhãn hiệu</Link>
          </Menu.Item>
          <Menu.Item key="provider" icon={<RocketOutlined />}>
            <Link to="provider">Nhà cung cấp</Link>
          </Menu.Item>
          <Menu.Item key="customer" icon={<UserOutlined />}>
            <Link to="customer">Khách hàng</Link>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup title="">
          <Menu.Item key="order" icon={<ShoppingCartOutlined />}>
            <Link to="order">Quản lý đơn hàng</Link>
          </Menu.Item>
          <Menu.Item key="order_status" icon={<NumberOutlined />}>
            <Link to="order_status">Trạng thái đơn hàng</Link>
          </Menu.Item>
        </Menu.ItemGroup>

        {/* <Menu.ItemGroup title="">
          <SubMenu key="sub1" icon={<TeamOutlined />} title="Sub Menu">
            <Menu.Item key="9">Team 1</Menu.Item>
            <Menu.Item key="10">Team 2</Menu.Item>
          </SubMenu>
        </Menu.ItemGroup> */}
      </Menu>{" "}
    </Layout.Sider>
  );
}

export default Sider;
