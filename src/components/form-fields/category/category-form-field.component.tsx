import { Form, Input } from "antd";
import React from "react";

export const CategoryFormField: React.FC = () => {
  return (
    <>
      <Form.Item
        name="name"
        label="Name"
        style={{ marginBottom: 3 }}
        rules={[
          {
            required: true,
            message: "Name is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Description is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
    </>
  );
};
