"use client";

import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Badge, Typography } from "antd";

const { Title } = Typography;

export default function UserShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"Username"}</Title>
      <TextField value={record?.username} />
      <Title level={5}>{"FirstName"}</Title>
      <TextField value={record?.firstname} />
      <Title level={5}>{"LastName"}</Title>
      <TextField value={record?.lastname} />
      <Title level={5}>{"Address"}</Title>
      <TextField value={record?.address} />
      <Title level={5}>{"Telephone"}</Title>
      <TextField value={record?.telephone} />
      <Title level={5}>{"Is Verified?"}</Title>
      <TextField
        value={
          record?.verified ? (
            <Badge color="green" text="YES" />
          ) : (
            <Badge color="red" text="NO" />
          )
        }
      />
    </Show>
  );
}
