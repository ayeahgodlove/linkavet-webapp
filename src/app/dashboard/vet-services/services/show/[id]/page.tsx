"use client";

import { API_URL_UPLOADS_SERVICES } from "@constants/api-url";
import { DateField, ImageField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { format } from "@utils/format";
import { Typography } from "antd";

const { Title } = Typography;

export default function ServiceShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Short Description"}</Title>
      <TextField value={record?.short_description} />
      <Title level={5}>{"Description"}</Title>
      {/* <MarkdownField value={record?.content} /> */}
      <div
        style={{ padding: 10, background: "#f2f2f2" }}
        dangerouslySetInnerHTML={{
          __html: record?.description,
        }}
      />
      <ImageField
        imageTitle={record?.title}
        value={`${API_URL_UPLOADS_SERVICES}/${record?.fileName}`}
      />
      <Title level={5}>{"CreatedAt"}</Title>
      <DateField value={format.date(record?.createdAt)} />
    </Show>
  );
}
