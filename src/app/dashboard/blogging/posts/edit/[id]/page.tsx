"use client";

import PostFormFields from "@components/form-fields/post/post-form-field.component";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export default function BlogPostEdit() {
  const { formProps, saveButtonProps, queryResult } = useForm({});

  const blogPostsData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <PostFormFields />
      </Form>
    </Edit>
  );
}
