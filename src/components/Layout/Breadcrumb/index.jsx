import { Breadcrumb } from "antd";
import React from "react";
import "./Bread.scss";

function Bread(props) {
  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Bread;
