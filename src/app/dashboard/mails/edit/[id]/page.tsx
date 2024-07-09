"use client";

import MailFormField from "@components/form-fields/mail/mail-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function MailEdit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <MailFormField />
      </Form>
    </Edit>
  );
}
