"use client";

import { Suspense } from "react";
import { Spin } from "antd";
import Products from "@components/products/products";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";

export default function IndexPage() {
  return (
    <DefaultLayout>
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
