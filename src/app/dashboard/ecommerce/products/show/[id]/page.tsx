"use client";

import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { IProduct } from "@model/product.model";
import { ImageField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { format } from "@utils/format";
import { Image, Typography } from "antd";

const { Title } = Typography;

export default function MailShow() {
  const { queryResult } = useShow<IProduct>({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id ?? ""} />

      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />

      <Title level={5}>{"Short Description"}</Title>
      <TextField value={record?.shortDescription} />

      <Title level={5}>{"Description"}</Title>
      <TextField
        value={
          <div
            style={{ padding: 10, background: "#f2f2f2" }}
            dangerouslySetInnerHTML={{
              __html: record?.description as any,
            }}
          />
        }
      />
      <Title level={5}>{"Amount"}</Title>
      <TextField value={format.number(record?.amount!)} />

      <Title level={5}>{"Discount Percentage"}</Title>
      <TextField value={format.number(record?.discountPercentage!)} />

      <Title level={5}>{"Quantity"}</Title>
      <TextField value={format.number(record?.qtty!)} />

      <Title level={5}>{"Rating"}</Title>
      <TextField value={format.number(record?.rating!)} />

      <Title level={5}>{"Availability Status"}</Title>
      <TextField value={record?.availabilityStatus!} />

      <Title level={5}>{"Image"}</Title>
      <ImageField
        // src={`${API_URL_UPLOADS_PRODUCTS}/${record?.productImages[0]}`}
        value={`${API_URL_UPLOADS_PRODUCTS}/${record?.productImages[0]}`}
        alt={record?.name}
      />
    </Show>
  );
}
