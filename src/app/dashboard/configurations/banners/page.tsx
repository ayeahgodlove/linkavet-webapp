"use client";

import { API_URL_UPLOADS_BANNERS } from "@constants/api-url";
import { IBanner } from "@model/banner";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { format } from "@utils/format";
import { Image, Space, Table } from "antd";

export default function BannerList() {
  const { tableProps } = useTable<IBanner>({
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
        <Table.Column dataIndex="title" title={"Title"} />
        <Table.Column dataIndex="description" title={"Description"} />
        <Table.Column
          dataIndex="image"
          title={"Image"}
          render={(_, record) => (
            <Image
              width={100}
              height={100}
              src={`${API_URL_UPLOADS_BANNERS}/${record}`}
              alt={_.title}
            />
          )}
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
