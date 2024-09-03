"use client";

import { Suspense } from "react";
import { Spin } from "antd";
import Products from "@components/products/products";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";

export default function IndexPage() {
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
        <Suspense
          fallback={
            <Spin
              size="large"
              style={{
                minHeight: "65vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          }
        >
          <Products category={""} query={""} />
        </Suspense>
      </PageContent>
    </DefaultLayout>
  );
}
