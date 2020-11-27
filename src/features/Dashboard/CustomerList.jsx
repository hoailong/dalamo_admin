import { Table } from "antd";
import moment from "moment";
import React from "react";
moment.locale("vi");

function CustomerList(props) {
  const { dataSource, isLoading } = props;

  const columns = [
    {
      title: "#",
      width: "10%",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Họ tên",
      dataIndex: "fullName",
      // defaultSortOrder: "ascend",
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: "Tham gia",
      dataIndex: "createdDate",
      sorter: (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
      render: (createdDate) => moment(createdDate).fromNow(),
    },
  ];
  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.id}
    />
  );
}

export default CustomerList;
