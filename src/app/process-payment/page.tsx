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
      <DefaultLayout
        title={
          "Process Order"
        }
        description={
          "Stay informed and connected with the latest trends, insights, and valuable tips in pet care. Our blog at Linkavet is a trusted resource for pet parents, filled with expert advice from our experienced veterinary team. Explore a variety of topics, from health and nutrition to behavior and training. Empower yourself with knowledge and become a proactive and knowledgeable pet owner. For the love of your furry friends, Linkavet is your go-to destination for insightful pet-related content"
        }
        keywords="veterinary, pet care, blog posts, LinkaVet, animal care"
        uri="posts"
      >
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
