"use client";

import EventFormFields from "@components/form-fields/event/event-form-field.component";
import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";
import moment from "moment";

export default function BlogPostEdit() {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  const start = queryResult?.data?.data.start;
  const end = queryResult?.data?.data.end;
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        initialValues={{
          ...queryResult?.data?.data,
          start: moment(start),
          end: moment(end)
        }}
        layout="vertical"
      >
        <EventFormFields />
      </Form>
    </Edit>
  );
}
