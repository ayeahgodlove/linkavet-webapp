"use client";

import { ISubscriber } from "@model/subscriber.model";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { format } from "@utils/format";
import { Space, Table } from "antd";

export default function TagList() {
  const { tableProps } = useTable<ISubscriber>({
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
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column
          title="Signup Date"
          dataIndex="createdAt"
          key="createdAt"
          render={(_, record) => format.date(_.createdAt)}
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
