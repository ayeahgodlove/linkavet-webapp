"use client";

import MailFormField from "@components/form-fields/mail/mail-form-field.component";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function MailCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <MailFormField />
      </Form>
    </Create>
  );
}
