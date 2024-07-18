"use client";

import PostFormFields from "@components/form-fields/post/post-form-field.component";
import { IPost } from "@model/post";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";

export default function BlogPostCreate() {
  const { formProps, saveButtonProps } = useForm<IPost>({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <PostFormFields />
      </Form>
    </Create>
  );
}
