import React from "react";
import { Row } from "antd";
import Carousel from "./carousel";
import FeaturedSection from "./featured-section";
import ProductSection from "./product-section";
import "./Home.scss";

function HomePage(props) {
    return (
        <>
            <Row>
                <Carousel />
            </Row>
            <Row gutter={10} className="featured-section">
                <FeaturedSection />
            </Row>
            <Row className="product-section">
                <ProductSection />
            </Row>
        </>
    );
}

export default HomePage;
