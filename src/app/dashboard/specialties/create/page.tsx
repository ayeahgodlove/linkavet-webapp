"use client";

import SpecialtyFormField from "@components/form-fields/specialty/specialty-form-field.component";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function SpecialtyCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <SpecialtyFormField />
      </Form>
    </Create>
  );
}
