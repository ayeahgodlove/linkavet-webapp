"use client";

import EventFormFields from "@components/form-fields/event/event-form-field.component";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <EventFormFields />
      </Form>
    </Create>
  );
}
