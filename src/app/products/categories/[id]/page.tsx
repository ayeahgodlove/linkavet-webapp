"use client";
import Products from "@components/products/products";
import { makeUpLabel } from "../../../../utils";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import { categoryAPI } from "@store/api/category_api";
import { useEffect } from "react";
import { emptyCategory } from "@model/category.model";
import { Typography } from "antd";

export default function IndexPage({ params }: { params: { id: string } }) {
  const key = params.id;

  const { data, isLoading, isFetching } =
    categoryAPI.useGetSingleCategoryQuery(key);

  useEffect(() => {}, [data, isLoading, isFetching]);
  return (
    <DefaultLayout>
      <PageContent hasSider>
        <Typography.Title level={4} style={{ marginBottom: 0}}>
          Category {makeUpLabel(isLoading || isFetching ? emptyCategory : data)}
        </Typography.Title>
        <div>
          <Products category={key} />
        </div>
      </PageContent>
    </DefaultLayout>
  );
}
