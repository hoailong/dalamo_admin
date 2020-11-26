import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table, Tag } from "antd";
import React from "react";

function ListBrand(props) {
  const { dataSource, loading, onEditItem, onDeleteItem, onPageChange } = props;

  const handleEditClick = (record) => {
    onEditItem(record);
  };

  const handleDeleteClick = (record) => {
    Modal.confirm({
      title: `Xác nhận xoá nhãn hiệu`,
      content: `Bạn có chắc chắn muốn xoá nhãn hiệu này?`,
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
      title: "Tên",
      dataIndex: "name",
      // defaultSortOrder: "ascend",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Slug",
      dataIndex: "slug",
      sorter: (a, b) => a.slug.length - b.slug.length,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: "15%",
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

export default ListBrand;
