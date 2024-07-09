"use client";

import { CategoryFormField } from "@components/form-fields/category/category-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function CategoryEdit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <CategoryFormField />
      </Form>
    </Edit>
  );
}
