"use client";

import { IPost } from "@model/post";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { format } from "@utils/format";
import { Space, Table } from "antd";

export default function BlogPostList() {
  const { tableProps } = useTable<IPost>({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "categories",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.categoryId)
        .filter(Boolean) ?? [],
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
          dataIndex="summary"
          title={"Summary"}
          render={(value) => value.slice(0, 80) + "..."}
        />
        <Table.Column
          dataIndex={"categoryId"}
          title={"Category"}
          render={(_, value, index) => {
            const category = categoryData?.data.find(
              (item: any) => item.id === value
            )?.name;
            return categoryIsLoading ? <>Loading...</> : <>{category}</>;
          }}
        />
        <Table.Column dataIndex="status" title={"Status"} />
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
