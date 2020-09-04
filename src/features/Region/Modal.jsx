import { Form, Input, Modal, Select } from "antd";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { formItemLayoutHorizontal } from "../../constants/global";
import { getSlug } from "../../utils/common";

const { Option } = Select;

RegionModal.propTypes = {
  visible: PropTypes.bool,
  isProcessing: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  region: PropTypes.object,
};

RegionModal.defaultProps = {
  isProcessing: false,
  visible: false,
  region: null,
};

function RegionModal(props) {
  const [form] = Form.useForm();
  const { visible, isProcessing, handleSubmit, handleCancel, region } = props;

  useEffect(() => {
    if (visible && !region) form.resetFields();
  }, [visible, region, form]);

  const initialValues = region || { name: "", slug: "", status: 1 };
  const onValuesChange = (changedValues, allValues) => {
    if (changedValues.name) allValues.slug = getSlug(changedValues.name);
  };

  const onOK = () => {
    form
      .validateFields()
      .then((values) => handleSubmit({ ...initialValues, ...values }))
      .catch((err) => {});
  };

  return (
    <Modal
      title="Khu vực - Quận huyện"
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
        onValuesChange={onValuesChange}
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
        <Form.Item name="slug" label="Slug" dependencies={["name"]}>
          <Input disabled />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            <Option value={1}>Active</Option>
            <Option value={0}>UnActive</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default RegionModal;
