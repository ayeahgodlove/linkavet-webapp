"use client";

import ServiceFormFields from "@components/form-fields/service/service-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function ServiceEdit() {
  const { formProps, saveButtonProps, form } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <ServiceFormFields form={form} />
      </Form>
    </Edit>
  );
}
