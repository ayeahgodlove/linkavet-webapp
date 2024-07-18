import React, { useEffect } from "react";
import UploadImage from "@components/products/upload-image";
import { AVAILABILITY_STATUS } from "@constants/constant";
import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useSelect } from "@refinedev/core";
import { ICategory } from "@model/category.model";
import { ITag } from "@model/tag.model";
import { FormInstance } from "antd/lib";

interface Props {
  form: FormInstance<any>;
}
export const ProductFormField: React.FC<Props> = ({ form }) => {
  const { queryResult, ...selectProps } = useSelect<ICategory>({
    resource: "categories",
  });

  const { queryResult: tagQuery, onSearch } = useSelect<ITag>({
    resource: "tags",
  });

  const handleImageUpload = (url: string) => {
    const productImages = form.getFieldValue("productImages") || [];
    form.setFieldsValue({
      productImages: [...productImages, url],
    });
  };

  const { data } = queryResult;

  useEffect(() => {}, [form]);
  return (
    <>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="shortDescription" label="Short Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
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
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label={"Tags"}
            name={"tags"}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              showSearch
              onSearch={onSearch}
              mode="tags"
              options={
                tagQuery.data
                  ? tagQuery.data.data.map((d) => {
                      return {
                        label: d.name,
                        value: d.id,
                      };
                    })
                  : []
              }
            />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} min={0} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="qtty" label="Quantity" rules={[{ required: true }]}>
            <InputNumber style={{ width: "100%" }} min={0} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="rating" label="Rating">
            <InputNumber style={{ width: "100%" }} min={0} max={5} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="discountPercentage" label="Discount Percentage">
            <InputNumber style={{ width: "100%" }} min={0} max={100} />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
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
      </Row>

      <Form.Item name="productImages" label="Upload Images">
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
