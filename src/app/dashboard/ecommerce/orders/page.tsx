"use client";

import { IOrder } from "@model/order.model";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export default function OrderList() {
  const { tableProps } = useTable<IOrder>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={"ID"}
          render={(value, index) => <strong key={value}>{index + 1}</strong>}
        />
        <Table.Column dataIndex="firstName" title={"First Name"} />
        <Table.Column dataIndex="lastName" title={"Last Name"} />
        <Table.Column dataIndex="gender" title={"Gender"} />
        <Table.Column dataIndex="email" title={"Email"} />
        <Table.Column dataIndex="address" title={"Address"} />

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
