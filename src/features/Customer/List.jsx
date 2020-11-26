import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table, Tag } from "antd";
import React from "react";
import moment from "moment";
moment.locale("vi");

function ListUser(props) {
  const { dataSource, loading, onEditItem, onDeleteItem, onPageChange } = props;

  const handleEditClick = (record) => {
    onEditItem(record);
  };

  const handleDeleteClick = (record) => {
    Modal.confirm({
      title: `Xác nhận xoá tài khoản`,
      content: `Bạn có chắc chắn muốn xoá tài khoản này?`,
      onOk: () => onDeleteItem(record),
      centered: true,
    });
  };
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
      title: "Tài khoản",
      dataIndex: "idRole",
      sorter: (a, b) => a.idRole - b.idRole,
      render: (idRole) => (idRole === 1 ? "ADMIN" : "CUSTOMER"),
    },
    {
      title: "Tham gia",
      dataIndex: "createdDate",
      sorter: (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
      render: (createdDate) => moment(createdDate).fromNow(),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      sorter: (a, b) => a.status - b.status,
      render: (status) =>
        status === 1 ? (
          <Tag color="processing">Active</Tag>
        ) : (
          <Tag color="default">UnActive</Tag>
        ),
    },
    {
      title: "Hành động",
      width: "15%",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            ghost
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEditClick(record)}
          >
            Sửa
          </Button>
          <Button
            ghost
            danger
            size="small"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteClick(record)}
          >
            Xoá
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

export default ListUser;
