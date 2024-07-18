"use client";

import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { userAPI } from "@store/api/user_api";
import { Typography } from "antd";

const { Title } = Typography;

export default function PaymentShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const {
    data: users,
    isLoading: isLoadingUser,
    isFetching: isFetchUser,
  } = userAPI.useFetchAllUsersQuery(1);

  const record = data?.data;

  const getUser = (userId: string) => {
    if (users && users.length) {
      return users.find((item) => item.id === userId)?.email;
    }
    return "Not found";
  };

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"User"}</Title>
      <TextField value={getUser(record?.userId)} />
      <Title level={5}>{"Amount"}</Title>
      <NumberField value={record?.amount} />
      <Title level={5}>{"OrderNo"}</Title>
      <TextField value={record?.orderNo} />
      <Title level={5}>{"Status"}</Title>
      <TextField value={record?.status} />
      <Title level={5}>{"Telelphone"}</Title>
      <TextField value={record?.cellPhone} />
    </Show>
  );
}
