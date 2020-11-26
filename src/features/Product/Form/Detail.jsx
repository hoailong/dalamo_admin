import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { formItemLayoutHorizontal } from "../../../constants/global";
import { getSlug } from "../../../utils/common";

function Detail(props) {
  const { detailForm, product } = props;

  const initialValues = product || {};

  const onValuesChange = (changedValues, allValues) => {
    if (changedValues.name) allValues.slug = getSlug(changedValues.name);
  };

  return (
    <>
      <Form
        name="detailForm"
        {...formItemLayoutHorizontal}
        form={detailForm}
        initialValues={initialValues}
        onValuesChange={onValuesChange}
      >
        <Form.Item name="description" label="Mô tả">
          <TextArea
            placeholder="Nhập miêu tả cho sản phẩm"
            autoSize={{ minRows: 2, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item name="characteristic" label="Đặc tính">
          <TextArea
            placeholder="Nhập đặc tính cho sản phẩm"
            autoSize={{ minRows: 2, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item name="ingredient" label="Thành phần">
          <TextArea
            placeholder="Nhập thành phần sản phẩm"
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </Form.Item>
        <Form.Item name="guide" label="Hướng dẫn SD">
          <TextArea
            placeholder="Nhập hướng dẫn sử dụng sản phẩm"
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </Form.Item>
        <Form.Item name="preservation" label="Bảo quản">
          <TextArea
            placeholder="Nhập bảo quản sản phẩm"
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </Form.Item>
        <Form.Item name="origin" label="Nguồn gốc">
          <TextArea
            placeholder="Nhập ngồn gốc sản phẩm"
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </Form.Item>
      </Form>
    </>
  );
}

export default Detail;
