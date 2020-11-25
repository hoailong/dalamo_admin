import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../Brand/slice";
import { fetchCategory } from "../Category/slice";
import ListProduct from "./List";
import ProductModal from "./Modal";
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  setIsProcessing,
  updateProduct,
} from "./slice";

function Product(props) {
  const dispatch = useDispatch();
  const { product, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.product
  );

  const { brand } = useSelector((state) => state.brand) || [];
  const { category } = useSelector((state) => state.category) || [];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectingProduct, setSelectingProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProduct());
    if (brand.length === 0) dispatch(fetchBrand());
    if (category.length === 0) dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingProduct(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (product) => {
    setSelectingProduct(product);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingProduct(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (product) => {
    dispatch(deleteProduct(product.id));
  };

  const handleSubmit = (product) => {
    console.log(product);
    const formData = new FormData();
    formData.append("data", JSON.stringify(product));
    if (product.images && product.images.new) {
      for (let image of product.images.new) {
        formData.append("files[]", image);
      }
    }
    if (product.info.id) {
      formData.append("_method", "PUT");
      dispatch(updateProduct(product.info.id, formData));
    } else {
      dispatch(createProduct(formData));
      // setSelectingProduct(product);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Sản Phẩm</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateItem}>
            Thêm mới
          </Button>
        </Row>
        <Divider />{" "}
        <ListProduct
          categories={category}
          loading={isLoading}
          dataSource={product}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <ProductModal
          brands={brand}
          categories={category}
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          product={selectingProduct}
          key={selectingProduct ? selectingProduct["id"] : "_product"}
        />
      </div>
    </>
  );
}

export default Product;
