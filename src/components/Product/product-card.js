import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Card, Carousel, Col, Row } from "antd";
import PlaceHolderImg from "../../assets/img/product-placeholder.png";
import PlaceHolderImg2 from "../../assets/img/product-placeholder-2.png";

function ProductCard(props) {
    const { product } = props;
    const carousel = useRef(null);

    const handleHovering = () => {
        carousel.current.next();
    };

    const handleStopHovering = () => {
        carousel.current.prev();
    };

    return (
        <Card
            hoverable
            onMouseEnter={handleHovering}
            onMouseLeave={handleStopHovering}
            style={{ width: "100%" }}
            cover={
                <Carousel speed={500} ref={carousel}>
                    <div>
                        <img alt="Placeholder 1" src={PlaceHolderImg} style={{ width: "100%" }} />
                    </div>
                    <div>
                        <img alt="Placeholder 2" src={PlaceHolderImg2} style={{ width: "100%" }} />
                    </div>
                </Carousel>
            }
        >
            <Row>
                <Col span={20}>
                    <h3>{product["name"]}</h3>
                </Col>
                <Col span={4}>Button</Col>
            </Row>
            <p>$$$</p>
        </Card>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductCard;
