"use client";

import { ProductFormField } from "@components/form-fields/product/product-form-field.component";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function ProductCreate() {
  const { formProps, saveButtonProps, form } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <ProductFormField />
      </Form>
    </Create>
  );
}
