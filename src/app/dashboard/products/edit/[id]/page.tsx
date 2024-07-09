"use client";

import { ProductFormField } from "@components/form-fields/product/product-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function ProductEdit() {
  const { formProps, saveButtonProps, form } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <ProductFormField />
      </Form>
    </Edit>
  );
}
