import React, { useEffect } from "react";
import { Modal, Row, Col, Button, Alert, Form, Input, Tabs, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./slice";
import SkinCare from "../../../assets/img/skin-care.jpg";

function LoginModal(props) {
    const { modalState } = useSelector((state) => state.login);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <Modal
            width="50%"
            visible={modalState}
            footer={null}
            closable={false}
            bodyStyle={{ padding: 0 }}
        >
            <Row>
                <Col span={12}>
                    <Tabs
                        tabBarStyle={{ marginLeft: 15 }}
                        defaultActiveKey="login"
                        style={{ height: "100%" }}
                    >
                        <Tabs.TabPane tab="Đăng nhập" key="login">
                            <Form labelCol={{ span: 4, offset: 2 }} wrapperCol={{ span: 16 }}>
                                <Form.Item label="Email" name="email" required>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Mật khẩu" name="password" required>
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                                    <Button type="primary">Đăng nhập</Button>
                                </Form.Item>
                            </Form>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Đăng ký" key="register">
                            <Form labelCol={{ span: 4, offset: 2 }} wrapperCol={{ span: 16 }}>
                                <Form.Item label="Email" name="email" required>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Mật khẩu" name="password" required>
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                                    <Button type="primary">Đăng nhập</Button>
                                </Form.Item>
                            </Form>
                        </Tabs.TabPane>
                    </Tabs>
                </Col>
                <Col span={12} style={{ textAlign: "center", padding: 25 }}>
                    <Popover
                        content={
                            <a
                                href="http://www.freepik.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Designed by stories / Freepik
                            </a>
                        }
                        placement="bottom"
                    >
                        <img src={SkinCare} alt="login-img" style={{ width: "100%" }} />
                    </Popover>
                </Col>
            </Row>
        </Modal>
    );
}

export default LoginModal;
