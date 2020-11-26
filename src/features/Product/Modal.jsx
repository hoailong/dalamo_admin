import {
  CameraOutlined,
  CarryOutOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Form, Modal, Tabs } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Detail from "./Form/Detail";
import Info from "./Form/Info";
import Photo from "./Form/Photo";

const { TabPane } = Tabs;

ProductModal.propTypes = {
  visible: PropTypes.bool,
  isProcessing: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  product: PropTypes.object,
};

ProductModal.defaultProps = {
  isProcessing: false,
  visible: false,
  product: null,
};

function ProductModal(props) {
  const [form] = Form.useForm();
  const {
    visible,
    isProcessing,
    handleSubmit,
    handleCancel,
    product,
    brands,
    categories,
  } = props;

  const [infoForm] = Form.useForm();
  const [detailForm] = Form.useForm();
  const [photoForm] = Form.useForm();

  const defaultTabActive = "info";
  const [activeTab, setActiveTab] = useState(defaultTabActive);
  const [photoFormRender, setPhotoFormRender] = useState(false);
  const [detailFormRender, setDetailFormRender] = useState(false);

  useEffect(() => {
    if (visible && !product) {
      setActiveTab(defaultTabActive);
      infoForm.resetFields();
    }
    if (!visible) {
      setPhotoFormRender(false);
    }
  }, [visible]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "photos" && !photoFormRender) setPhotoFormRender(true);
    if (tab === "detail" && !detailFormRender) setDetailFormRender(true);
  };

  const onOK = async () => {
    let data = {};
    const infoFormValue = await infoForm.validateFields();
    data.info = { ...infoFormValue };
    if (detailFormRender) {
      const detailFormValue = await detailForm.validateFields();
      data.info = { ...data.info, ...detailFormValue };
    }
    if (photoFormRender) {
      const photoFormValue = await photoForm.validateFields();
      data.images = { ...photoFormValue };
    }
    handleSubmit(data);
  };

  return (
    <Modal
      title="Sản phẩm"
      okText="Lưu"
      cancelText="Huỷ"
      centered
      width={840}
      visible={visible}
      onOk={onOK}
      onCancel={handleCancel}
      confirmLoading={isProcessing}
    >
      <Form.Provider>
        <Tabs type="card" onChange={handleTabChange} activeKey={activeTab}>
          <TabPane
            key="info"
            tab={
              <span>
                <InfoCircleOutlined />
                Thông tin
              </span>
            }
          >
            <Info
              infoForm={infoForm}
              product={product}
              brands={brands}
              categories={categories}
            />
          </TabPane>
          <TabPane
            key="detail"
            tab={
              <span>
                <CarryOutOutlined />
                Chi tiết
              </span>
            }
          >
            <Detail detailForm={detailForm} product={product} />
          </TabPane>

          <TabPane
            key="photos"
            tab={
              <span>
                <CameraOutlined />
                Hình ảnh
              </span>
            }
          >
            <Photo photoForm={photoForm} product={product} />
          </TabPane>
        </Tabs>
      </Form.Provider>
    </Modal>
  );
}

export default ProductModal;
