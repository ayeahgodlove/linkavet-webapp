import React from "react";
import UploadImage from "@components/products/upload-image";
import { AVAILABILITY_STATUS } from "@constants/constant";
import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/antd";

export const ProductFormField: React.FC = () => {
  const { form } = useForm({});
  const { queryResult, ...selectProps } = useSelect({
    resource: "categories",
  });

  const handleImageUpload = (url: string) => {
    const images = form.getFieldValue("images") || [];
    const productName = form.getFieldValue("name");
    form.setFieldsValue({
      images: [...images, { id: "01", url, name: productName || "" }],
    });
  };

  const { data } = queryResult;
  return (
    <>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label={"Category"}
        name={"categoryId"}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          showSearch
          onSearch={selectProps.onSearch}
          options={
            data
              ? data.data.map((d) => {
                  return {
                    label: d.name,
                    value: d.id,
                  };
                })
              : []
          }
        />
      </Form.Item>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="availabilityStatus"
            label="Availability Status"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value={AVAILABILITY_STATUS.IN_STOCK}>
                In Stock
              </Select.Option>
              <Select.Option value={AVAILABILITY_STATUS.OUT_STOCK}>
                Out of Stock
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} min={0} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="qtty" label="Quantity" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} min={0} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="weight" label="Weight" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} min={0} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="rating" label="Rating">
            <InputNumber style={{ width: "100%" }} min={0} max={5} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="discountPercentage" label="Discount Percentage">
            <InputNumber style={{ width: "100%" }} min={0} max={100} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="images" label="Upload Images">
        <UploadImage
          maxCount={4}
          onUpload={handleImageUpload}
          folderName={"products"}
          name={"image"}
        />
      </Form.Item>
    </>
  );
};
