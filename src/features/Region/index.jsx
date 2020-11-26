import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListRegion from "./List";
import RegionModal from "./Modal";
import {
  createRegion,
  deleteRegion,
  fetchRegions,
  setIsProcessing,
  updateRegion,
} from "./slice";

function Region(props) {
  const dispatch = useDispatch();
  const { regions, isLoading, isProcessing, isCompleted } = useSelector(
    (state) => state.regions
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectingRegion, setSelectingRegion] = useState(null);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

  useEffect(() => {
    if (isCompleted) {
      setModalOpen(false);
      setSelectingRegion(null);
    }
  }, [isCompleted]);

  const onCreateItem = () => {
    setModalOpen(true);
  };

  const onEditItem = (region) => {
    setSelectingRegion(region);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectingRegion(null);
    dispatch(setIsProcessing(false));
  };

  const onDeleteItem = (region) => {
    dispatch(deleteRegion(region.id));
  };

  const handleSubmit = (region) => {
    if (region.id) {
      dispatch(updateRegion(region));
    } else {
      dispatch(createRegion(region));
      // setSelectingRegion(region);
    }
  };

  const onChangePage = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div>
        <Row justify="space-between" align="middle">
          <Title level={2}>Quản Lý Khu Vực</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateItem}>
            Thêm mới
          </Button>
        </Row>
        <Divider />{" "}
        <ListRegion
          loading={isLoading}
          dataSource={regions}
          onEditItem={onEditItem}
          onDeleteItem={onDeleteItem}
          onChangePage={onChangePage}
        />
        <RegionModal
          visible={modalOpen}
          isProcessing={isProcessing}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          region={selectingRegion}
          key={selectingRegion ? selectingRegion["id"] : "_region"}
        />
      </div>
    </>
  );
}

export default Region;
