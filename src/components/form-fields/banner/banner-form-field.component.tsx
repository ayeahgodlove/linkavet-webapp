import UploadImage from "@components/products/upload-image";
import { useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import React from "react";

const BannerFormFiled = () => {
  const { form } = useForm({});
  const handleImageUpload = (url: string) => {
    form.setFieldValue("image", url);
  };
  return (
    <>
      <Form.Item
        name={"title"}
        label="Title"
        required={true}
        rules={[{ required: true, message: "This field is a required field" }]}
        style={{ marginBottom: 10 }}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name={"subTitle"}
        label="Description"
        required={true}
        rules={[{ required: true, message: "This field is a required field" }]}
        style={{ marginBottom: 10 }}
      >
        <Input.TextArea size="large" />
      </Form.Item>

      <Form.Item
        name="image"
        label="Upload"
        style={{ marginBottom: 15 }}
        rules={[
          {
            required: true,
            message: "Upload is required",
          },
        ]}
      >
        <UploadImage
          maxCount={1}
          folderName="banners"
          onUpload={handleImageUpload}
          name={"image"}
        />
      </Form.Item>
    </>
  );
};

export default BannerFormFiled;
