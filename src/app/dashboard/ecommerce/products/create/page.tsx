"use client";

import { ProductFormField } from "@components/form-fields/product/product-form-field.component";
import { IProduct } from "@model/product.model";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function ProductCreate() {
  const { formProps, saveButtonProps, form } = useForm<IProduct>({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <ProductFormField form={form} />
      </Form>
    </Create>
  );
}
