import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Avatar, Button, Modal, Space, Table, Tag } from "antd";
import React from "react";
import { formatCurrency } from "../../utils/common";

function ListProduct(props) {
  const {
    dataSource,
    loading,
    onEditItem,
    onDeleteItem,
    onPageChange,
    categories,
  } = props;

  const handleEditClick = (record) => {
    onEditItem(record);
  };

  const handleDeleteClick = (record) => {
    Modal.confirm({
      title: `Xác nhận xoá sản phẩm`,
      content: `Bạn có chắc chắn muốn xoá sản phẩm này?`,
      onOk: () => onDeleteItem(record),
      centered: true,
    });
  };
  const columns = [
    {
      title: "#",
      width: "5%",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Ảnh",
      dataIndex: "images",
      width: "10%",
      render: (images) =>
        images.length >= 0 ? (
          <Avatar shape="square" size={60} src={images[0].thumbnailUrl} />
        ) : null,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      width: "40%",
      // defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
      // ellipsis: true,
    },
    {
      title: "Danh mục",
      dataIndex: "idCategory",
      width: "14%",
      // sorter: (a, b) => a.category.localeCompare(b.category),
      render: (idCategory) => {
        const category = categories.find((e) => e.id === idCategory);
        return category ? category.name : "";
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      width: "8%",
      sorter: (a, b) => a.price - b.price,
      render: (price) => formatCurrency(price),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: "8%",
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

export default ListProduct;
