import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListUser from "./List";
import UserModal from "./Modal";
import {
  createUser,
  deleteUser,
  fetchUser,
  setIsProcessing,
  updateUser,
} from "./slice";

function Customer(props) {
  const dispatch = useDispatch();
  const { user, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.user
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectingUser, setSelectingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingUser(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (user) => {
    setSelectingUser(user);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingUser(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (user) => {
    dispatch(deleteUser(user.id));
  };

  const handleSubmit = (user) => {
    if (user.id) {
      dispatch(updateUser(user));
    } else {
      dispatch(createUser(user));
      // setSelectingUser(user);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Khách Hàng</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateItem}>
            Thêm mới
          </Button>
        </Row>
        <Divider />{" "}
        <ListUser
          loading={isLoading}
          dataSource={user}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <UserModal
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          user={selectingUser}
          key={selectingUser ? selectingUser["id"] : "_user"}
        />
      </div>
    </>
  );
}

export default Customer;
