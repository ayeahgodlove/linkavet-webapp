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
    <DefaultLayout
      title={"Vet Products - Your Pet's Wellbeing, Our Priority"}
      description={
        "Elevate your farm and pet's lifestyle with our premium range of nutrition, grooming essentials, toys, and wellness products. Each item is selected with your pet's health and happiness in mind. Shop confidently for top-quality products that complement our commitment to excellence in veterinary care. Enhance your pet's life today with Linkavet."
      }
      keywords="veterinary, pet care, store, products, LinkaVet, animal care"
      uri="products"
    >
      <PageContent hasSider>
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          Category {makeUpLabel(isLoading || isFetching ? emptyCategory : data)}
        </Typography.Title>
        <div>
          <Products category={key} />
        </div>
      </PageContent>
    </DefaultLayout>
  );
}
