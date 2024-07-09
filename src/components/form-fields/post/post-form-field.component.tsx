import React from "react";
import { Col, Form, Input, Row, Select } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { useTag } from "@hook/tag.hook";
import UploadImage from "@components/products/upload-image";
import { modules } from "@constants/constant";

const PostFormFields = () => {
  const { form } = useForm({});
  const { queryResult, ...selectProps } = useSelect({
    resource: "categories",
  });
  const { tags } = useTag();
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const handleImageUpload = (url: string) => {
    form.setFieldValue("imageUrl", url);
  };

  const { data } = queryResult;
  return (
    <>
      <Row align={"middle"} justify={"space-between"} gutter={[8, 8]}>
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
            name="tags"
            label="Select Tags"
            style={{ marginBottom: 3 }}
            rules={[
              {
                required: true,
                message: "Tags is required",
              },
            ]}
          >
            <Select
              size="large"
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              mode="multiple"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={tags.map((c) => {
                return {
                  value: c.id,
                  label: c.name,
                };
              })}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="title"
        label="Title"
        style={{ marginBottom: 3 }}
        rules={[
          {
            required: true,
            message: "Title is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="summary"
        label="Summary"
        style={{ marginBottom: 3 }}
        rules={[
          {
            required: true,
            message: "Summary is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name={"content"}
        label="Content"
        rules={[
          {
            required: true,
            message: "Content is required",
          },
        ]}
      >
        <ReactQuill
          modules={modules}
          theme="snow"
          onChange={(html) => form.setFieldValue("content", html)}
          placeholder="Enter content..."
        />
      </Form.Item>

      <Form.Item
        name={"imageUrl"}
        label="Image"
        required={true}
        rules={[{ required: true, message: "This field is a required field" }]}
        style={{ marginBottom: 10 }}
      >
        <UploadImage
          maxCount={4}
          folderName="posts"
          onUpload={handleImageUpload}
          name="imageUrl"
        />
      </Form.Item>
    </>
  );
};

export default PostFormFields;
