import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCategory from "./List";
import CategoryModal from "./Modal";
import {
  createCategory,
  deleteCategory,
  fetchCategory,
  setIsProcessing,
  updateCategory,
} from "./slice";

function Category(props) {
  const dispatch = useDispatch();
  const { category, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.category
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectingCategory, setSelectingCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingCategory(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (category) => {
    setSelectingCategory(category);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingCategory(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (category) => {
    dispatch(deleteCategory(category.id));
  };

  const handleSubmit = (category) => {
    if (category.id) {
      dispatch(updateCategory(category));
    } else {
      dispatch(createCategory(category));
      // setSelectingCategory(category);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Danh Mục Sản Phẩm</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateItem}>
            Thêm mới
          </Button>
        </Row>
        <Divider />{" "}
        <ListCategory
          loading={isLoading}
          dataSource={category}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <CategoryModal
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          category={selectingCategory}
          key={selectingCategory ? selectingCategory["id"] : "_category"}
        />
      </div>
    </>
  );
}

export default Category;
