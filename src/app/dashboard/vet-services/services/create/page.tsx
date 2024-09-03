"use client";

import { IService } from "@model/service";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";
import dynamic from "next/dynamic";

const ServiceFormFields = dynamic(
  () => import("@components/form-fields/service/service-form-field.component"),
  { ssr: false }
);

export default function ServiceCreate() {
  const { formProps, saveButtonProps, form } = useForm<IService>({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <ServiceFormFields form={form} />
      </Form>
    </Create>
  );
}
