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
      <Title level={5}>{"Question"}</Title>
      <TextField value={record?.question} />
      <Title level={5}>{"Answer"}</Title>
      <TextField value={record?.answer} />
    </Show>
  );
}
