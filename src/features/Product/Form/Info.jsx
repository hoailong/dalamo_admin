import { Form, Input, Select, Switch } from "antd";
import React from "react";
import { formItemLayoutHorizontal } from "../../../constants/global";
import { getSlug } from "../../../utils/common";

const { Option } = Select;

function Info(props) {
  const { infoForm, product, brands, categories } = props;

  const brandOption = brands.map((brand) => (
    <Option key={brand.id} value={brand.id}>
      {brand.name}
    </Option>
  ));

  const categoryOption = categories.map((category) => (
    <Option key={category.id} value={category.id}>
      {category.name}
    </Option>
  ));

  const defaultValues = {
    isHot: 0,
    isNew: 0,
    isDiscount: 0,
    status: 1,
  };

  const initialValues = product || defaultValues;

  const onValuesChange = (changedValues, allValues) => {
    if (changedValues.name) allValues.slug = getSlug(changedValues.name);
  };

  return (
    <>
      <Form
        name="infoForm"
        {...formItemLayoutHorizontal}
        form={infoForm}
        initialValues={initialValues}
        onValuesChange={onValuesChange}
      >
        <Form.Item name="id" noStyle>
          <Input type="hidden" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên"
          rules={[
            {
              required: true,
              message: "Trường này là bắt buộc",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="slug" label="Slug" dependencies={["name"]}>
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="price"
          label="Giá"
          rules={[
            {
              required: true,
              message: "Trường này là bắt buộc",
            },
          ]}
        >
          <Input type={"number"} />
        </Form.Item>
        <Form.Item
          name="idCategory"
          label="Danh mục"
          rules={[{ required: true, message: "Trường này là bắt buộc" }]}
        >
          <Select
            showSearch
            placeholder="Chọn danh mục sản phẩm"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {categoryOption}
          </Select>
        </Form.Item>
        <Form.Item
          name="idBrand"
          label="Nhãn hiệu"
          rules={[{ required: true, message: "Trường này là bắt buộc" }]}
        >
          <Select
            showSearch
            placeholder="Chọn nhãn hiệu"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {brandOption}
          </Select>
        </Form.Item>
        <Form.Item name="isHot" label="Hàng hot" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="isNew" label="Hàng mới" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          name="isDiscount"
          label="Đang giảm giá"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item name="discountPercent" label="% Giảm giá">
          <Input type={"number"} />
        </Form.Item>
        <Form.Item name="storageQuantity" label="SL trong kho">
          <Input type={"number"} />
        </Form.Item>
        <Form.Item name="transportingQuantity" label="SL đang giao">
          <Input type={"number"} />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            <Option value={1}>Active</Option>
            <Option value={0}>UnActive</Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
}

export default Info;
