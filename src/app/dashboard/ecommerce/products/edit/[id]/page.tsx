"use client";

import { ProductFormField } from "@components/form-fields/product/product-form-field.component";
import { IProduct } from "@model/product.model";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function ProductEdit() {
  const { formProps, saveButtonProps, form } = useForm<IProduct>({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <ProductFormField form={form} />
      </Form>
    </Edit>
  );
}
