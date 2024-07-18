"use client";

import BannerFormFiled from "@components/form-fields/banner/banner-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function BannerEdit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <BannerFormFiled />
      </Form>
    </Edit>
  );
}
