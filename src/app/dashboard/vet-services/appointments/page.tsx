"use client";

import { STATUS } from "@constants/constant";
import { IAppointment } from "@model/health/appointment";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { format } from "@utils/format";
import { Badge, Space, Table, Tag, TimePicker } from "antd";
import moment from "moment";

export default function AppointmentList() {
  const { tableProps } = useTable<IAppointment>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={"ID"}
          render={(value: any, record: string, index: number) => {
            return (
              <span key={value.id}>
                {format.twoChar((index + 1).toString())}
              </span>
            );
          }}
        />
        <Table.Column dataIndex="fullname" title={"Fullname"} />
        <Table.Column
          dataIndex="appointmentDate"
          title={"AppointmentDate"}
          render={(value) => format.date(value)}
        />
        <Table.Column
          dataIndex="appointmentTime"
          title={"AppointmentTime"}
          render={(value) => (
            <TimePicker
              defaultValue={value} // Initial value, null in this case
              format={"HH:mm:ss"} // Time format, you can customize it as needed
              style={{ width: 100 }} // Set width of the TimePicker
              clearIcon={false}
            />
          )}
        />
        <Table.Column dataIndex="email" title={"Email"} />
        <Table.Column
          dataIndex="isConfirmed"
          title={"IsConfirmed"}
          render={(value) => {
            return value ? (
              <Badge color="green" text="YES" />
            ) : (
              <Badge color="#941c50" text="NO" />
            );
          }}
        />
        <Table.Column
          dataIndex="status"
          title={"Status"}
          render={(record, value) => {
            return record.status === STATUS.APPROVED ? (
              <Tag color="#87d068">{record.status}</Tag>
            ) : record.status === STATUS.PENDING ? (
              <Tag color="#941c50">{record.status}</Tag>
            ) : (
              <Tag color="#f50">{record.status}</Tag>
            );
          }}
          filters={[
            { text: STATUS.APPROVED, value: STATUS.APPROVED },
            { text: STATUS.PENDING, value: STATUS.PENDING },
            { text: STATUS.CANCELED, value: STATUS.CANCELED },
          ]}
          onFilter={(value: any, record: any) =>
            record.status.indexOf(value) === 0
          }
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
