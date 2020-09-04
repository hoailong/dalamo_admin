import { Button, Form, Input, Row } from "antd";
import React, { Fragment } from "react";
import Images from "../../constants/images";
import "./Login.scss";

const FormItem = Form.Item;

function Login(props) {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <div className="login">
        <div className="logo">
          <img alt="logo" src={Images.LOGO_CAFE} />
          <span>ADMIN PAGE</span>
        </div>
        <Form onFinish={handleSubmit}>
          <FormItem name="username" rules={[{ required: true }]} hasFeedback>
            <Input placeholder="Username" />
          </FormItem>
          <FormItem name="password" rules={[{ required: true }]} hasFeedback>
            <Input type="password" placeholder="Password" />
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
