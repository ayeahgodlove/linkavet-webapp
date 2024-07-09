import React from "react";
import { Col, DatePicker, Form, Input, Row } from "antd";

const EventFormFields = () => {
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
        name="description"
        label="Description"
        style={{ marginBottom: 3 }}
        rules={[
          {
            required: true,
            message: "Description is required",
          },
        ]}
      >
        <Input.TextArea size="large" />
      </Form.Item>

      <Form.Item
        name="url"
        label="Url"
        style={{ marginBottom: 3 }}
        rules={[
          {
            required: true,
            message: "Url is required",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Row align={"middle"} justify={"space-between"} gutter={[8, 8]}>
        <Col xs={24} md={12}>
          <Form.Item
            name="start"
            label="Start"
            style={{ marginBottom: 3 }}
            rules={[
              {
                required: true,
                message: "Start is required",
              },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="end"
            label="End"
            style={{ marginBottom: 3 }}
            rules={[
              {
                required: true,
                message: "End is required",
              },
            ]}
          >
            <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default EventFormFields;
