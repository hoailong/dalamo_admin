import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOrderStatus from "./List";
import OrderStatusModal from "./Modal";
import {
  createOrderStatus,
  deleteOrderStatus,
  fetchOrderStatus,
  setIsProcessing,
  updateOrderStatus,
} from "./slice";

function OrderStatus(props) {
  const dispatch = useDispatch();
  const { orderStatus, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.orderStatus
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectingOrderStatus, setSelectingOrderStatus] = useState(null);

  useEffect(() => {
    dispatch(fetchOrderStatus());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingOrderStatus(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (orderStatus) => {
    setSelectingOrderStatus(orderStatus);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingOrderStatus(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (orderStatus) => {
    dispatch(deleteOrderStatus(orderStatus.id));
  };

  const handleSubmit = (orderStatus) => {
    if (orderStatus.id) {
      dispatch(updateOrderStatus(orderStatus));
    } else {
      dispatch(createOrderStatus(orderStatus));
      // setSelectingOrderStatus(orderStatus);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Trạng Thái Đơn Hàng</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateItem}>
            Thêm mới
          </Button>
        </Row>
        <Divider />{" "}
        <ListOrderStatus
          loading={isLoading}
          dataSource={orderStatus}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <OrderStatusModal
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          orderStatus={selectingOrderStatus}
          key={
            selectingOrderStatus ? selectingOrderStatus["id"] : "_orderStatus"
          }
        />
      </div>
    </>
  );
}

export default OrderStatus;
