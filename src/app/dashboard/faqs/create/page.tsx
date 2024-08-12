"use client";

import FaqFormField from "@components/form-fields/faq/faq-form-field.component";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function MailCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <FaqFormField />
      </Form>
    </Create>
  );
}
