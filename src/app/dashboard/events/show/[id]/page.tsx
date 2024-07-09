"use client";

import { API_URL_UPLOADS_POSTS } from "@constants/api-url";
import {
  DateField,
  ImageField,
  MarkdownField,
  Show,
  TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { format } from "@utils/format";
import { Typography } from "antd";

const { Title } = Typography;

export default function BlogPostShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: record?.category?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Description"}</Title>
      <MarkdownField value={record?.description} />
      <Title level={5}>{"Url"}</Title>
      <TextField value={record?.url} />
      <Title level={5}>{"Start"}</Title>
      <DateField value={format.date(record?.start)} />
      <Title level={5}>{"End"}</Title>
      <DateField value={format.date(record?.end)} />
    </Show>
  );
}
