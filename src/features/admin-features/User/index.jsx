import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import { alertError } from "../../Alert/slice";
import ListUser from "./List";
import { fetchUsers } from "./slice";
import UserModal from "./Modal";
import { v1 } from "uuid";

function User(props) {
  const dispatch = useDispatch();
  const { users, isLoading, isError } = useSelector((state) => state.users);
  const usersData = users.map((user, index) => ({ ...user, key: index }));

  const [modifyModal, setModifyModal] = useState(false);
  const [selectingUser, setSelectingUser] = useState(null);
  const [randomModalKey, setRandomModalKey] = useState(v1());

  useEffect(() => {
    if (isError) dispatch(alertError(isError));
  }, [isError, dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onCreateItem = () => {
    console.log("Create");
    setModifyModal(true);
    setRandomModalKey(v1());
  };

  const onEditItem = (user) => {
    setSelectingUser(user);
    setModifyModal(true);
  };

  const onDeleteItem = (user) => {
    console.log(user);
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleOk = () => {
    console.log("Ok");
    setModifyModal(false);
  };

  const handleCancel = () => {
    console.log("Cancel");
    setModifyModal(false);
    setSelectingUser(null);
  };

  return (
    <>
      {(isLoading && <Loading />) || (
        <div>
          <Row justify="space-between" align="middle">
            <Title level={2}>Quản Lý Tài Khoản</Title>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={onCreateItem}
            >
              Thêm mới
            </Button>
          </Row>
          <Divider />
          <ListUser
            dataSource={usersData}
            onEditItem={onEditItem}
            onDeleteItem={onDeleteItem}
            onChangePage={onChangePage}
          />
          <UserModal
            visible={modifyModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
            user={selectingUser}
            key={selectingUser ? selectingUser["id"] : randomModalKey}
          />
        </div>
      )}
    </>
  );
}

export default User;
