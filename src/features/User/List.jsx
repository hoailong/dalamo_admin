import React from "react";
import { Space, Button, Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

function ListUser(props) {
    const { dataSource, onEditItem, onDeleteItem, onPageChange } = props;

    const handleEditClick = (record) => {
        onEditItem(record);
    };

    const handleDeleteClick = (record) => {
        Modal.confirm({
            title: `Xác nhận xoá người dùng`,
            content: `Bạn có chắc chắn muốn xoá user này?`,
            onOk: () => onDeleteItem(record),
            centered: true,
        });
    };
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Fullname",
            dataIndex: "fullname",
            filters: [
                {
                    text: "Joe",
                    value: "Joe",
                },
                {
                    text: "Submenu",
                    value: "Submenu",
                    children: [
                        {
                            text: "Green",
                            value: "Green",
                        },
                    ],
                },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.fullname.length - b.fullname.length,
        },
        {
            title: "Email",
            dataIndex: "email",
            sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            title: "Gender",
            dataIndex: "gender",
            sorter: (a, b) => a.gender.length - b.gender.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Role",
            dataIndex: "role",
            sorter: (a, b) => a.role.length - b.role.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Action",
            render: (record) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        ghost
                        size="small"
                        icon={<EditOutlined />}
                        onClick={() => handleEditClick(record)}
                    >
                        Chỉnh sửa
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
    return <Table columns={columns} dataSource={dataSource} rowKey={(record) => record.id} onChange={onPageChange} />;
}

export default ListUser;
