import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Card, Carousel, Col, Row } from "antd";
import { EyeTwoTone, ShoppingCartOutlined } from "@ant-design/icons";
import PlaceHolderImg from "../../assets/img/product-placeholder.png";
import PlaceHolderImg2 from "../../assets/img/product-placeholder-2.png";

function ProductCard(props) {
    const { product } = props;
    const carousel = useRef(null);

    const [hidden, setHidden] = useState(true);

    const handleHovering = () => {
        carousel.current.next();
        setHidden(false);
    };

    const handleStopHovering = () => {
        setHidden(true);
    };

    return (
        <Card
            hoverable
            onMouseEnter={handleHovering}
            onMouseLeave={handleStopHovering}
            style={{ width: "100%" }}
            cover={
                <div style={{ width: "100%", position: "relative" }}>
                    <Carousel speed={500} ref={carousel}>
                        <div>
                            <img
                                alt="Placeholder 1"
                                src={PlaceHolderImg}
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div>
                            <img
                                alt="Placeholder 2"
                                src={PlaceHolderImg2}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </Carousel>
                    <div
                        className="custom-overlay custom-overlay-dark-bg"
                        hidden={hidden}
                        style={{ display: "table", textAlign: "center" }}
                    >
                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                            <Button
                                style={{ color: "green" }}
                                size="large"
                                shape="circle"
                                icon={<ShoppingCartOutlined />}
                            />
                            <Button size="large" shape="circle" icon={<EyeTwoTone />} />
                        </div>
                    </div>
                </div>
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
