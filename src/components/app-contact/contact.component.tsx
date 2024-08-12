import React, { useState } from "react";
import { Form, Col, Input, Row, message, Button } from "antd";

import { useForm } from "antd/es/form/Form";
import { emptyContact } from "@model/contact";
import { contactAPI } from "@store/api/contact_api";

export const ContactForm = () => {
  const { Item } = Form;

  const [addContact] = contactAPI.useAddContactMutation();

  const [load, setLoad] = useState(false);
  const [form] = useForm();

  const handleSubscribe = async (values: any) => {
    setLoad(true);
    const feedback = await addContact({
      ...emptyContact,
      ...values,
    }).unwrap();

    if (feedback) {
      message.success("Thank you! Your submission has been received!");
      form.resetFields();
    } else {
      message.error("message failed failed!");
    }
    setLoad(false);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubscribe}
      initialValues={emptyContact}
      className="contact-form"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        marginBottom: 30,
      }}
    >
      <Item name={"name"} style={{ width: "100%" }}>
        <Input size="large" placeholder="Name" className="form-field w-input" />
      </Item>

      <Item name={"email"} style={{ width: "100%" }}>
        <Input
          size="large"
          placeholder="Email"
          className="form-field no-margin w-input"
        />
      </Item>

      <Item name={"subject"} style={{ width: "100%" }}>
        <Input
          size="large"
          placeholder="Subject"
          className="form-field w-input"
        />
      </Item>

      <Item name={"message"} style={{ width: "100%" }}>
        <Input.TextArea
          size="large"
          rows={5}
          placeholder="Write Message"
          className="textarea w-input"
        />
      </Item>

      <Button
        size="large"
        type="primary"
        htmlType="submit"
        disabled={load}
        className="contact-button w-button"
        style={{ width: "100%" }}
      >
        Submit
      </Button>
    </Form>
  );
};
