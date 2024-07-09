"use client";

import { CategoryFormField } from "@components/form-fields/category/category-form-field.component";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function CategoryCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <CategoryFormField />
      </Form>
    </Create>
  );
}
