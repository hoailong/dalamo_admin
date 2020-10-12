import { Col, Tabs } from "antd";
import React from "react";
import ProductCardGrid from "../../../../components/Product/product-card-grid";

function ProductSection(props) {
    const data = [
        {
            name: "Lorem ipsum",
            price: 100,
        },
        {
            name: "Lorem ipsum",
            price: 1010,
        },
        {
            name: "Lorem ipsum",
            price: 100,
        },
        {
            name: "Lorem ipsum",
            price: 100,
        },
        {
            name: "Lorem ipsum",
            price: 100,
        },
    ];
    return (
        <Col span={16} push={4}>
            <Tabs defaultActiveKey="new-arrival">
                <Tabs.TabPane tab="Hàng mới về" key="new-arrival">
                    <ProductCardGrid data={data} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Sản phẩm bán chạy" key="best-seller">
                    <ProductCardGrid data={data} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Sản phẩm mới" key="new-product">
                    <ProductCardGrid data={data} />
                </Tabs.TabPane>
            </Tabs>
        </Col>
    );
}

export default ProductSection;
