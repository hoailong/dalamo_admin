import React from "react";
import { Modal, Button, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./slice";
import { formatVietnameseCurrency } from "../../../utils/common";

function CompareModal(props) {
    const { modalState, products } = useSelector((state) => state.compare);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const properties = [
        {
            title: "Tên sản phẩm",
            name: "name",
        },
        {
            title: "Giá tiền",
            name: "price",
        },
    ];

    return (
        <Modal
            title="So sánh sản phẩm"
            visible={modalState}
            footer={[
                <Button key="close" onClick={handleCloseModal}>
                    Đóng
                </Button>,
            ]}
        >
            {products.length > 0 ? (
                <table>
                    {properties.map((property) => (
                        <tr>
                            <td>{property["title"]}</td>
                            {products.map((product) => (
                                <td>
                                    {property["name"] === "price"
                                        ? formatVietnameseCurrency(product[property["name"]])
                                        : product[property["name"]]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </table>
            ) : (
                <Alert
                    description="Chưa có sản phẩm nào để tiến hành so sánh"
                    style={{ textAlign: "center" }}
                    type="warning"
                />
            )}
        </Modal>
    );
}

export default CompareModal;
