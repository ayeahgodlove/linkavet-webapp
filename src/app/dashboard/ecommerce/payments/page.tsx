"use client";

import { IPayment } from "@model/payment.model";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { format } from "@utils/format";
import { Space, Table } from "antd";

export default function PaymentList() {
  const { tableProps } = useTable<IPayment>({
    syncWithLocation: true,
  });

  const { data: userData, isLoading: userIsLoading } = useMany({
    resource: "users",
    ids:
      (tableProps?.dataSource
        ?.map((item) => item?.userId)
        .filter(Boolean) as any) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
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
        <Table.Column
          dataIndex="userId"
          title={"Username"}
          render={(value) =>
            userData?.data.find((item) => item.id === value)?.email
          }
        />
        <Table.Column dataIndex="amount" title={"Amount"} />
        <Table.Column dataIndex="status" title={"Status"} />
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
