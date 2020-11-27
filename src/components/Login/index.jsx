import { Button, Form, Input, Row } from "antd";
import React, { Fragment } from "react";
import Images from "../../constants/images";
import axiosClient from "../../utils/axiosClient";
import jwt from "jsonwebtoken";
import "./Login.scss";
import Axios from "axios";

const FormItem = Form.Item;

function Login(props) {
  const handleSubmit = async (credentials) => {
    try {
      const resp = await Axios.post("http://127.0.0.1:8000/api/login", {
        data: credentials,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      const token = resp["token"];
      // window.localStorage.setItem("token", token);
      // const tokenInfo = jwt.decode(token);
      // window.userInfo = tokenInfo["user"];
      console.log(token);

      // toast.success("Đăng nhập thành công.");
    } catch (e) {
      // toast.error("Đăng nhập thất bại! Vui lòng thử lại sau.");
      console.error(e);
    }
  };

  return (
    <Fragment>
      <div className="login">
        <div className="logo">
          <img alt="logo" src={Images.LOGO_CAFE} />
          <span>ADMIN PAGE</span>
        </div>
        <Form onFinish={handleSubmit}>
          <FormItem
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email",
              },
            ]}
            hasFeedback
          >
            <Input type="email" placeholder="Email" />
          </FormItem>
          <FormItem
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
            hasFeedback
          >
            <Input type="password" placeholder="Mật khẩu" />
          </FormItem>
          <Row>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Row>
        </Form>
      </div>
      <div className="footer"></div>
    </Fragment>
  );
}

export default Login;
