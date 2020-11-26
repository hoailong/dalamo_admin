import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table, Tag } from "antd";
import React from "react";
import moment from "moment";
import { formatCurrency } from "../../utils/common";

function ListOrder(props) {
  const {
    dataSource,
    loading,
    onEditItem,
    onDeleteItem,
    onPageChange,
    orderStatus,
  } = props;

  console.log(orderStatus);

  const handleEditClick = (record) => {
    onEditItem(record);
  };
  const columns = [
    {
      title: "#",
      width: "10%",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Khách hàng",
      dataIndex: "name",
      // defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      // defaultSortOrder: "ascend",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Số lượng",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      sorter: (a, b) => a.totalPrice - b.totalPrice,
      render: (totalPrice) => formatCurrency(totalPrice),
    },
    {
      title: "Trạng thái",
      dataIndex: "idStatus",
      width: "15%",
      sorter: (a, b) => a.idStatus - b.idStatus,
      render: (idStatus) => {
        const status = orderStatus.find((e) => e.id === idStatus);
        console.log(status);
        return status ? (
          <Tag color={status.color || "#2db7f5"}>{status.name}</Tag>
        ) : (
          ""
        );
      },
    },
    {
      title: "Tạo lúc",
      dataIndex: "createdDate",
      sorter: (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
      render: (createdDate) =>
        moment(createdDate).format("DD/MM/YYYY HH:mm:ss"),
    },
    {
      title: "Hành động",
      width: "10%",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEditClick(record)}
          >
            Cập nhật
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      rowKey={(record) => record.id}
      onChange={onPageChange}
    />
  );
}

export default ListOrder;
