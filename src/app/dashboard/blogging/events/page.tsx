"use client";

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

export default function EventList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: userData, isLoading: userLoading } = useMany({
    resource: "users",
    ids:
      tableProps?.dataSource?.map((item) => item?.user?.id).filter(Boolean) ??
      [],
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
          render={(_, value, index) => (
            <strong key={value}>
              {format.twoChar(format.number(index + 1))}
            </strong>
          )}
        />
        <Table.Column dataIndex="title" title={"Title"} />
        <Table.Column
          dataIndex="start"
          title={"Start"}
          render={(value) => format.date(value)}
        />
        <Table.Column
          dataIndex="end"
          title={"End"}
          render={(value) => format.date(value)}
        />

        <Table.Column
          dataIndex={["userId"]}
          title={"User"}
          render={(value: any) =>
            userData?.data.find((item) => item.id === value)?.email
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
