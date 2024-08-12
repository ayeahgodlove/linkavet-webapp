import { Form, Input } from "antd";
import React from "react";

const FaqFormField = () => {
  return (
    <>
      <Form.Item name="question" label="Question" style={{ marginBottom: 3 }}>
        <Input size="large" />
      </Form.Item>

      <Form.Item name="answer" label="Answer" style={{ marginBottom: 3 }}>
        <Input.TextArea size="large" rows={4} />
      </Form.Item>
    </>
  );
};

export default FaqFormField;
