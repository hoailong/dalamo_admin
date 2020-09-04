import React, { useState, useEffect } from "react";
import { Modal, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

function UserModal(props) {
  const { visible, handleOk, handleCancel, user } = props;

  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState([
    {
      name: ["fullname"],
      value: "",
    },
    {
      name: ["email"],
      value: "",
    },
    {
      name: ["gender"],
      value: "",
    },
  ]);

  useEffect(() => {
    if (user) {
      const userFields = [];
      Object.keys(user).forEach((key) => {
        userFields.push({
          name: [key],
          value: user[key],
        });
      });
      setCurrentUser(userFields);
    }
  }, [user]);

  const handleChangeUserInfo = (changedField, newUser) => {
    setCurrentUser(newUser);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  return (
    <Modal
      title="Tài khoản thành viên"
      visible={visible}
      centered
      onOk={handleOk}
      okText="Lưu"
      onCancel={handleCancel}
      cancelText="Huỷ bỏ"
    >
      <Form
        {...formItemLayout}
        fields={currentUser}
        onFieldsChange={_.debounce(handleChangeUserInfo, 250)}
      >
        <Form.Item
          name="fullname"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Please input your full name",
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
              type: "email",
              message: "The input is not valid Email",
            },
            {
              required: true,
              message: "Please input your email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

UserModal.propTypes = {
  visible: PropTypes.bool,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  user: PropTypes.object,
};

UserModal.defaultProps = {
  visible: false,
  user: null,
};

export default UserModal;
