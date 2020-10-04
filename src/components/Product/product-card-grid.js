import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import ProductCard from "./product-card";

function ProductCardGrid(props) {
    const { data } = props;
    return (
        <>
            <Row gutter={16}>
                {data.map((p, idx) => (
                    <Col key={idx} lg={6} md={8} sm={12} xs={24}>
                        <ProductCard product={p} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

ProductCardGrid.propTypes = {
    data: PropTypes.array,
};

ProductCardGrid.defaultProps = {
    data: [],
};

export default ProductCardGrid;
