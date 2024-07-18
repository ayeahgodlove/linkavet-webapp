"use client";

import { IUser } from "@model/user.model";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, CanAccess } from "@refinedev/core";
import { format } from "@utils/format";
import { Badge, Space, Table } from "antd";

export default function UserList() {
  const { tableProps } = useTable<IUser>({
    syncWithLocation: true,
  });

  return (
    <CanAccess
      // resource="users"
      // action="read"
      // onUnauthorized={(props) => {
      //   console.log("props: ", props);
      // }}
      // fallback={<h1> Sorry you cannot access this account now</h1>}
    >
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
          <Table.Column dataIndex="username" title={"Username"} />
          <Table.Column dataIndex="firstname" title={"Firstname"} />
          <Table.Column dataIndex="lastname" title={"Lastname"} />
          <Table.Column dataIndex="email" title={"Email"} />
          <Table.Column dataIndex="telephone" title={"Telephone"} />
          <Table.Column dataIndex="address" title={"Address"} />
          <Table.Column
            dataIndex="verified"
            title={"Verified"}
            render={(value) => {
              return value ? (
                <Badge color="green" text="YES" />
              ) : (
                <Badge color="red" text="NO" />
              );
            }}
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
    </CanAccess>
  );
}
