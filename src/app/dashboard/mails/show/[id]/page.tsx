"use client";

import {  Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function MailShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"Headline"}</Title>
      <TextField value={record?.headline} />
      <Title level={5}>{"Type"}</Title>
      <TextField value={record?.type} />
      <Title level={5}>{"Status"}</Title>
      <TextField value={record?.status} />
      <Title level={5}>{"Cta"}</Title>
      <TextField value={record?.cta} />
    </Show>
  );
}
