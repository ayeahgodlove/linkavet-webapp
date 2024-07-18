"use client";

import BannerFormFiled from "@components/form-fields/banner/banner-form-field.component";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function BannerCreate() {
  const { formProps, saveButtonProps, } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <BannerFormFiled />
      </Form>
    </Create>
  );
}