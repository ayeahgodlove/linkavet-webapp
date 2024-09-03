"use client";

import { IPost } from "@model/post";
import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";
import dynamic from "next/dynamic";

const PostFormFields = dynamic(
  () => import("@components/form-fields/post/post-form-field.component"),
  { ssr: false }
);

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
