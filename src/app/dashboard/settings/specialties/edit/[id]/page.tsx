"use client";

import SpecialtyFormField from "@components/form-fields/specialty/specialty-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function SpecialtyEdit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <SpecialtyFormField />
      </Form>
    </Edit>
  );
}
