"use client";

import { IService } from "@model/service";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { format } from "@utils/format";
import { Space, Table } from "antd";

export default function ServiceList() {
  const { tableProps } = useTable<IService>({
    syncWithLocation: true,
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
          dataIndex="short_description"
          title={"Short_description"}
          render={(value) => value.slice(0, 80) + "..."}
        />
        <Table.Column
          dataIndex="price"
          title={"Price"}
          render={(value) => format.number(value)}
        />
        <Table.Column
          dataIndex={["publishedAt"]}
          title={"Published At"}
          render={(value: any) => <DateField value={value} />}
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
