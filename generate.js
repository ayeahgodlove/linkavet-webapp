#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const entities = process.argv.slice(2);
if (entities.length === 0) {
  console.error("Please provide at least one entity name.");
  process.exit(1);
}

const templates = {
  create: (entity) =>
    `
"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function ${entity}Create() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          style={{ marginBottom: 10 }}
          rules={[
            {
              required: true,
              message: "Name is required",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </Create>
  );
}
`.trim(),
  edit: (entity) =>
    `
"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function ${entity}Edit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          style={{ marginBottom: 10 }}
          rules={[
            {
              required: true,
              message: "Name is required",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
    </Edit>
  );
}
`.trim(),
  show: (entity) =>
    `
"use client";

import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export default function ${entity}Show() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
    </Show>
  );
}
`.trim(),
  list: (entity) =>
    `
"use client";

import { I${entity} } from "@model/${entity.toLowerCase()}.model";
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

export default function ${entity}List() {
  const { tableProps } = useTable<I${entity}>({
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
        <Table.Column dataIndex="name" title={"Name"} />
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
`.trim(),
};

function writeFileRecursive(filePath, content) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
}

entities.forEach((entity) => {
  const capitalizedEntity = entity.charAt(0).toUpperCase() + entity.slice(1);

  const paths = {
    create: path.join(__dirname, "/src/app/dashboard/", entity+"s", "create", "page.tsx"),
    edit: path.join(__dirname, "/src/app/dashboard/", entity+"s", "edit", "page.tsx"),
    show: path.join(__dirname, "/src/app/dashboard/", entity+"s", "show", "page.tsx"),
    list: path.join(__dirname, "/src/app/dashboard/", entity+"s", "/", "page.tsx"),
  };

  writeFileRecursive(paths.create, templates.create(capitalizedEntity));
  writeFileRecursive(paths.edit, templates.edit(capitalizedEntity));
  writeFileRecursive(paths.show, templates.show(capitalizedEntity));
  writeFileRecursive(paths.list, templates.list(capitalizedEntity));
});

console.log("CRUD pages generated successfully.");
