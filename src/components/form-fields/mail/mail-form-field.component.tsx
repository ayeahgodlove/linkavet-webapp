import UploadImage from "@components/products/upload-image";
import { useSubscriber } from "@hook/subscriber.hook";
import { useForm } from "@refinedev/antd";
import { Col, Form, Input, Row, Select } from "antd";
import React from "react";

const MailFormField = () => {
  const { form } = useForm({});

  const handleImageUpload = (url: string) => {
    const images = form.getFieldValue("media");
    form.setFieldsValue({
      images: [...images, url],
    });
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const { subscribers } = useSubscriber();
  return (
    <>
      <>
        <Form.Item
          name="media"
          label="Upload Attachments"
          style={{ marginTop: 13 }}
        >
          <UploadImage
            maxCount={4}
            folderName="mails"
            onUpload={handleImageUpload}
            name={"attactment"}
          />
        </Form.Item>
      </>
      <Form.Item name="email" label="Email" style={{ marginBottom: 3 }}>
        <Select
          size="large"
          showSearch
          placeholder="Select a user email"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          mode="multiple"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={subscribers.map((c) => {
            return {
              value: c.id,
              label: c.email,
            };
          })}
        />
      </Form.Item>

      <Form.Item name="headline" label="Headline" style={{ marginBottom: 3 }}>
        <Input size="large" />
      </Form.Item>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Form.Item name="cta" label="cta" style={{ marginBottom: 3 }}>
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="type" label="Type" style={{ marginBottom: 3 }}>
            <Select
              size="large"
              showSearch
              placeholder="Select type"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { id: 1, description: "Marketing" },
                { id: 2, description: "Promotion" },
              ].map((c) => {
                return {
                  value: c.id,
                  label: c.description,
                };
              })}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="description"
        label="Description"
        style={{ marginBottom: 3 }}
      >
        <Input.TextArea size="large" rows={4} />
      </Form.Item>
    </>
  );
};

export default MailFormField;
