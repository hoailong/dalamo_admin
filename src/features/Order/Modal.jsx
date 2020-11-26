import { Form, Input, Modal, Select } from "antd";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { formItemLayoutHorizontal } from "../../constants/global";
import { getSlug } from "../../utils/common";

const { Option } = Select;

OrderModal.propTypes = {
  visible: PropTypes.bool,
  isProcessing: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  order: PropTypes.object,
};

OrderModal.defaultProps = {
  isProcessing: false,
  visible: false,
  order: null,
};

function OrderModal(props) {
  const [form] = Form.useForm();
  const {
    visible,
    isProcessing,
    handleSubmit,
    handleCancel,
    order,
    orderStatus,
  } = props;

  const statusOption = orderStatus.map((status) => (
    <Option key={status.id} value={status.id}>
      {status.name}
    </Option>
  ));

  useEffect(() => {
    if (visible && !order) form.resetFields();
  }, [visible, order, form]);

  const initialValues = order || { name: "", slug: "", status: 1 };
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
      title="Cập nhật đơn hàng"
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
        <Form.Item name="name" label="Khách">
          <Input disabled />
        </Form.Item>
        <Form.Item name="phone" label="SĐT">
          <Input disabled />
        </Form.Item>
        <Form.Item name="total" label="Số lượng">
          <Input disabled />
        </Form.Item>
        <Form.Item name="totalPrice" label="Tổng tiền">
          <Input disabled />
        </Form.Item>
        <Form.Item name="idStatus" label="Trạng thái">
          <Select
            showSearch
            placeholder="Chọn trạng thái"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
            rules={[{ required: true, message: "Trường này là bắt buộc" }]}
          >
            {statusOption}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default OrderModal;
