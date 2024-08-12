"use client";

import FaqFormField from "@components/form-fields/faq/faq-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function MailEdit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <FaqFormField />
      </Form>
    </Edit>
  );
}
