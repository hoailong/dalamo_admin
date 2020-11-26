import { Form, Input, Modal, Select } from "antd";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { formItemLayoutHorizontal } from "../../constants/global";
import { getSlug } from "../../utils/common";

const { Option } = Select;

ProviderModal.propTypes = {
  visible: PropTypes.bool,
  isProcessing: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  provider: PropTypes.object,
};

ProviderModal.defaultProps = {
  isProcessing: false,
  visible: false,
  provider: null,
};

function ProviderModal(props) {
  const [form] = Form.useForm();
  const { visible, isProcessing, handleSubmit, handleCancel, provider } = props;

  useEffect(() => {
    if (visible && !provider) form.resetFields();
  }, [visible, provider, form]);

  const initialValues = provider || {
    name: "",
    phone: "",
    email: "",
    address: "",
    description: "",
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
      title="Nhà cung cấp"
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
        <Form.Item name="phone" label="SĐT">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ">
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

export default ProviderModal;
