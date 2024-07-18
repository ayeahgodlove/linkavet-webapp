"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function TagCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          style={{ marginBottom: 10 }}
          rules={[
            {
              required: true,
              message: "Name is required",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </Create>
  );
}
