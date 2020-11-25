import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListProvider from "./List";
import ProviderModal from "./Modal";
import {
  createProvider,
  deleteProvider,
  fetchProvider,
  setIsProcessing,
  updateProvider,
} from "./slice";

function Provider(props) {
  const dispatch = useDispatch();
  const { provider, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.provider
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectingProvider, setSelectingProvider] = useState(null);

  useEffect(() => {
    dispatch(fetchProvider());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingProvider(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (provider) => {
    setSelectingProvider(provider);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingProvider(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (provider) => {
    dispatch(deleteProvider(provider.id));
  };

  const handleSubmit = (provider) => {
    if (provider.id) {
      dispatch(updateProvider(provider));
    } else {
      dispatch(createProvider(provider));
      // setSelectingProvider(provider);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Nhà Cung Cấp</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateItem}>
            Thêm mới
          </Button>
        </Row>
        <Divider />{" "}
        <ListProvider
          loading={isLoading}
          dataSource={provider}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <ProviderModal
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          provider={selectingProvider}
          key={selectingProvider ? selectingProvider["id"] : "_provider"}
        />
      </div>
    </>
  );
}

export default Provider;
