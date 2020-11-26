import { Form, Input, Modal, Select } from "antd";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { formItemLayoutHorizontal } from "../../constants/global";

const { Option } = Select;

OrderStatusModal.propTypes = {
  visible: PropTypes.bool,
  isProcessing: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  orderStatus: PropTypes.object,
};

OrderStatusModal.defaultProps = {
  isProcessing: false,
  visible: false,
  orderStatus: null,
};

function OrderStatusModal(props) {
  const [form] = Form.useForm();
  const {
    visible,
    isProcessing,
    handleSubmit,
    handleCancel,
    orderStatus,
  } = props;

  useEffect(() => {
    if (visible && !orderStatus) form.resetFields();
  }, [visible, orderStatus, form]);

  const initialValues = orderStatus || {
    name: "",
    description: "",
    color: "#2db7f5",
    status: 1,
  };

  const onOK = () => {
    form
      .validateFields()
      .then((values) => handleSubmit({ ...initialValues, ...values }))
      .catch((err) => {});
  };

  return (
    <Modal
      title="Danh mục sản phẩm"
      okText="Lưu"
      cancelText="Huỷ"
      centered
      visible={visible}
      onOk={onOK}
      onCancel={handleCancel}
      confirmLoading={isProcessing}
    >
      <Form
        {...formItemLayoutHorizontal}
        form={form}
        initialValues={initialValues}
      >
        <Form.Item
          name="name"
          label="Tên"
          rules={[
            {
              required: true,
              message: "Trường này là bắt buộc",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="color" label="Mã màu">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Mô tả">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="Trạng thái">
          <Select>
            <Option value={1}>Active</Option>
            <Option value={0}>UnActive</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default OrderStatusModal;
