import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListBrand from "./List";
import BrandModal from "./Modal";
import {
  createBrand,
  deleteBrand,
  fetchBrand,
  setIsProcessing,
  updateBrand,
} from "./slice";

function Brand(props) {
  const dispatch = useDispatch();
  const { brand, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.brand
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectingBrand, setSelectingBrand] = useState(null);

  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingBrand(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (brand) => {
    setSelectingBrand(brand);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingBrand(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (brand) => {
    dispatch(deleteBrand(brand.id));
  };

  const handleSubmit = (brand) => {
    if (brand.id) {
      dispatch(updateBrand(brand));
    } else {
      dispatch(createBrand(brand));
      // setSelectingBrand(brand);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Nhãn Hiệu</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateItem}>
            Thêm mới
          </Button>
        </Row>
        <Divider />{" "}
        <ListBrand
          loading={isLoading}
          dataSource={brand}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <BrandModal
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          brand={selectingBrand}
          key={selectingBrand ? selectingBrand["id"] : "_brand"}
        />
      </div>
    </>
  );
}

export default Brand;
