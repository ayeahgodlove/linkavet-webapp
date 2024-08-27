import React, { useEffect } from "react";
import { Form, Input, InputNumber } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadImage from "@components/products/upload-image";
import { modules } from "@constants/constant";
import { FormInstance } from "antd/lib";

interface Props {
  form: FormInstance<any>;
}
const ServiceFormFields: React.FC<Props> = ({ form }) => {
  const handleImageUpload = (url: string) => {
    const imageName = form.getFieldValue("fileName") || url;
    form.setFieldValue("fileName", imageName);
  };

  console.log("form: ", form, form.getFieldValue("fileName"));
  useEffect(() => {}, [form]);
  return (
    <>
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
        name="price"
        label="Price"
        style={{ marginBottom: 3 }}
        rules={[
          {
            required: true,
            message: "Price is required",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} size="large" />
      </Form.Item>
      <Form.Item
        name="short_description"
        label="Short Description"
        style={{ marginBottom: 3 }}
        rules={[
          {
            required: true,
            message: "Short Description is required",
          },
        ]}
      >
        <Input.TextArea size="large" rows={3} />
      </Form.Item>

      <Form.Item
        name={"description"}
        label="Description"
        rules={[
          {
            required: true,
            message: "Description is required",
          },
        ]}
      >
        <ReactQuill
          modules={modules}
          theme="snow"
          onChange={(html) => form.setFieldValue("description", html)}
          placeholder="Enter description..."
        />
      </Form.Item>

      <Form.Item
        name={"fileName"}
        label="File"
        // rules={[{ required: true, message: "This field is a required field" }]}
        style={{ marginBottom: 10 }}
      >
        <UploadImage
          maxCount={4}
          folderName="services"
          onUpload={handleImageUpload}
          name="image"
        />
      </Form.Item>
    </>
  );
};

export default ServiceFormFields;
