import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Carousel, Card, Divider } from "antd";
import HomeCarousel from "./HomeCarousel";
import "./Home.scss";

function HomePage(props) {
    return (
        <>
            <Row>
                <Col span={24} className="custom-carousel">
                    <HomeCarousel />
                </Col>
            </Row>
        </>
    );
}

export default HomePage;
