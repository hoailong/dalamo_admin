import { Form, Input, Modal, Select, Switch } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { formItemLayoutHorizontal } from "../../constants/global";
import { getSlug } from "../../utils/common";

const { Option } = Select;

UserModal.propTypes = {
  visible: PropTypes.bool,
  isProcessing: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  user: PropTypes.object,
};

UserModal.defaultProps = {
  isProcessing: false,
  visible: false,
  user: null,
};

function UserModal(props) {
  const [form] = Form.useForm();
  const { visible, isProcessing, handleSubmit, handleCancel, user } = props;

  const [changePassword, setChangePassword] = useState(false);

  useEffect(() => {
    if (visible && !user) form.resetFields();
  }, [visible, user, form]);

  useEffect(() => {}, [changePassword]);

  const initialValues = user || {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    idRole: 1,
    status: 1,
  };

  const onSwitch = () => {
    setChangePassword(!changePassword);
    form.setFieldsValue({ password: "" });
  };

  const onOK = () => {
    form
      .validateFields()
      .then((values) => {
        const data = { ...initialValues, ...values };
        if (!changePassword && user) delete data.password;
        handleSubmit(data);
      })
      .catch((err) => {});
  };

  return (
    <Modal
      title="Khách hàng"
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
          name="fullName"
          label="Họ tên"
          rules={[
            {
              required: true,
              message: "Trường này là bắt buộc",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Trường này là bắt buộc",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ">
          <Input />
        </Form.Item>
        {user?.id && (
          <Form.Item label="Đổi MK">
            <Switch checked={changePassword} onChange={onSwitch} />
          </Form.Item>
        )}
        {(changePassword || !user?.id) && (
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc",
              },
            ]}
          >
            <Input type={"password"} />
          </Form.Item>
        )}
        <Form.Item name="idRole" label="Tài khoản">
          <Select>
            <Option value={1}>ADMIN</Option>
            <Option value={2}>CUSTOMER</Option>
          </Select>
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

export default UserModal;
