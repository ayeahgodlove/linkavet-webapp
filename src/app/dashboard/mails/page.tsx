"use client";

import { ICategory } from "@model/category.model";
import { IMail } from "@model/mail.model";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { format } from "@utils/format";
import { Space, Table, Tag } from "antd";

export default function MailList() {
  const { tableProps } = useTable<IMail>({
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
        <Table.Column
          title="HEADLINE"
          dataIndex="headline"
          key="headline"
          filtered
        />
        <Table.Column
          title="Receivers"
          dataIndex="receiverEmails"
          key="receiverEmails"
          render={(_, record) => (
            <>
              {_.receiverEmails.map((r: any, index: number) => (
                <Tag color="#27b025" key={index}>
                  {r}
                </Tag>
              ))}
            </>
          )}
        />
        <Table.Column title="TYPE" dataIndex="type" key="type" filtered />
        <Table.Column title="STATUS" dataIndex="status" key="status" />
        <Table.Column title="CTA" dataIndex="cta" key="cta" />
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
