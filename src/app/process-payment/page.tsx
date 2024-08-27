"use client";
import Link from "next/link";
import SuperThank from "../../assets/images/super_thank_you.svg";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import Image from "next/image";
import { Suspense } from "react";
import { Spin } from "antd";

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
      <DefaultLayout>
        <PageContent>
          <h2>
            🥰 Thanks for your order. Return <Link href="/"> home page</Link>.
          </h2>
          <Image
            src={SuperThank}
            style={{ width: "280px", maxWidth: "60%" }}
            alt="Thank you"
          />
        </PageContent>
      </DefaultLayout>
    </Suspense>
  );
}
