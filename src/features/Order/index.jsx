import { Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderStatus } from "../OrderStatus/slice";
import ListOrder from "./List";
import OrderModal from "./Modal";
import {
  createOrder,
  deleteOrder,
  fetchOrder,
  setIsProcessing,
  updateOrder,
} from "./slice";

function Order(props) {
  const dispatch = useDispatch();
  const { order, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.order
  );

  const { orderStatus } = useSelector((state) => state.orderStatus) || [];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectingOrder, setSelectingOrder] = useState(null);

  useEffect(() => {
    dispatch(fetchOrder());
    if (orderStatus.length === 0) dispatch(fetchOrderStatus());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingOrder(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (order) => {
    setSelectingOrder(order);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingOrder(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (order) => {
    dispatch(deleteOrder(order.id));
  };

  const handleSubmit = (order) => {
    if (order.id) {
      dispatch(updateOrder(order));
    } else {
      dispatch(createOrder(order));
      // setSelectingOrder(order);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Đơn Hàng</Title>
        </Row>
        <Divider />{" "}
        <ListOrder
          orderStatus={orderStatus}
          loading={isLoading}
          dataSource={order}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <OrderModal
          orderStatus={orderStatus}
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          order={selectingOrder}
          key={selectingOrder ? selectingOrder["id"] : "_order"}
        />
      </div>
    </>
  );
}

export default Order;
