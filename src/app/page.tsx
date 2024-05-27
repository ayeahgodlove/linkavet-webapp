"use client";

import { Suspense } from "react";
import { Spin } from "antd";
import Products from "@components/products/products";

export default function IndexPage() {
  return (
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
      <Products category={"electronics"} query={"phone"} />
    </Suspense>
  );
}
