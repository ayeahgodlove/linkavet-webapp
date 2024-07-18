"use client";

import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { userAPI } from "@store/api/user_api";
import { Badge, TimePicker, Typography } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

export default function AppointmentShow() {
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
      <Title level={5}>{"Appointment Time"}</Title>
      <TextField
        value={<TimePicker value={dayjs(record?.appointmentTime)} />}
      />
      <Title level={5}>{"Is Confirmed?"}</Title>
      <TextField
        value={
          record?.isConfirmed ? (
            <Badge color="green" text="YES" />
          ) : (
            <Badge color="#941c50" text="NO" />
          )
        }
      />
      <Title level={5}>{"Pet Owner"}</Title>
      <TextField value={getUser(record?.userId)} />
      <Title level={5}>{"Vet Doctor"}</Title>
      <TextField value={getUser(record?.doctorId)} />

      <Title level={5}>{"Email"}</Title>
      <TextField value={record?.email} />
      <Title level={5}>{"Symptoms"}</Title>
      <TextField value={record?.symptoms} />
      <Title level={5}>{"Contact"}</Title>
      <TextField value={record?.contact} />

      <Title level={5}>{"Room Id"}</Title>
      <TextField value={record?.roomId} />
    </Show>
  );
}
