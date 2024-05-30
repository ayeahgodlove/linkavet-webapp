"use client";

import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Image, Space, Table } from "antd";

export default function BlogPostList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "categories",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.category?.id)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="imageUrl"
          title={"Image"}
          render={(value, record: any) => (
            <Image
              src={`${API_URL_UPLOADS_PRODUCTS}/${record.imageUrl}`}
              alt={record?.title}
              height={50}
              width={50}
            />
          )}
        />
        <Table.Column
          dataIndex="id"
          title={"ID"}
          render={(value, index) => <strong key={value}>{index + 1}</strong>}
        />

        <Table.Column
          dataIndex="content"
          title={"Content"}
          render={(value: any) => {
            if (!value) return "-";
            return <MarkdownField value={value.slice(0, 80) + "..."} />;
          }}
        />
        <Table.Column
          dataIndex={"category"}
          title={"Category"}
          render={(value) =>
            categoryIsLoading ? (
              <>Loading...</>
            ) : (
              categoryData?.data?.find((item) => item.id === value?.id)?.title
            )
          }
        />
        <Table.Column dataIndex="title" title={"Title"} />
        <Table.Column dataIndex="stock" title={"Stock"} />
        <Table.Column dataIndex="price" title={"Price"} />
        <Table.Column dataIndex="rating" title={"Rating"} />
      
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
