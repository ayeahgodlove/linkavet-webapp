"use client";

import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Edit, useForm } from "@refinedev/antd";
import { Col, Form, Input, Row } from "antd";
import { MdEmail } from "react-icons/md";

export default function UserEdit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Row justify={"space-between"} align={"middle"}>
          <Col span={12}>
            <Form.Item
              name="firstname"
              rules={[
                { required: true, message: "Please input your Firstname!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="firstname"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastname"
              rules={[
                { required: true, message: "Please input your Lastname!" },
              ]}
              style={{
                marginLeft: 5,
              }}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="lastname"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            size="large"
            prefix={<MdEmail className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your PhoneNumber!" },
          ]}
        >
          <Input
            size="large"
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="PhoneNumber"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
      </Form>
    </Edit>
  );
}
