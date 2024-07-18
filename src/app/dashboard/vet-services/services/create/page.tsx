"use client";

import ServiceFormFields from "@components/form-fields/service/service-form-field.component";
import { IService } from "@model/service";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

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
