import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "antd";
import Carousel from "./carousel";
import FeaturedSection from "./featured-section";
import ProductSection from "./product-section";
import ProductCarousel from "./product-carousel";
import "./Home.scss";

function HomePage(props) {
    const { hotProducts } = useSelector((state) => state.product);

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
            <Row style={{ marginTop: 10 }}>
                <Col span={24} style={{ textAlign: "center" }}>
                    <Button type="link">
                        <u>Xem thêm các sản phẩm khác</u>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={16} push={4}>
                    <h2 className="txt--font-lobster">Sản phẩm nổi bật</h2>
                </Col>
            </Row>
            <Row
                gutter={2}
                style={{ backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)" }}
            >
                <ProductCarousel products={hotProducts.slice(0, Math.floor(hotProducts.length / 2))} />
                <ProductCarousel products={hotProducts.slice(Math.floor(hotProducts.length / 2))} />
            </Row>
        </>
    );
}

export default HomePage;
