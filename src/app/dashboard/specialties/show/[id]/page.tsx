"use client";

import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function SpecialtyShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.fullname} />
      <Title level={5}>{"Specialty"}</Title>
      <TextField value={record?.speciaty} />
      <Title level={5}>{"YearsOfExperience"}</Title>
      <TextField value={record?.yearsOfExperience} />
      <Title level={5}>{"Website"}</Title>
      <TextField value={record?.website} />
      <Title level={5}>{"Facebook"}</Title>
      <TextField value={record?.facebook} />
      <Title level={5}>{"Twitter"}</Title>
      <TextField value={record?.twitter} />
      <Title level={5}>{"LinkedIn"}</Title>
      <TextField value={record?.linkedIn} />
    </Show>
  );
}
